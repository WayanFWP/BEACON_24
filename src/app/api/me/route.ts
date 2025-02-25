import { retrieveDataById } from "@/lib/firebase/service";
import { getToken } from "next-auth/jwt";
import { NextResponse, NextRequest } from "next/server"

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    const token = await getToken({
        req,
        secret: process.env.NEXT_AUTH_SECRET
    });

    if(token && id) {
        if(token.id === id) {
            const user = await retrieveDataById("users", id);
    
            return NextResponse.json({
                status: 200,
                message: "success",
                data: user
            })
        }
    }

    return NextResponse.json({
        status: 400,
        message: 'bad request'
    })
}