
import { register } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const req = await request.json()

        const user = await register(req)

        return NextResponse.json({
            status: user?.status,
            message: user?.message,
        }, {status: user?.statusCode})
    }
    catch (err) {
        console.error('Error in POST function:', err);
        return NextResponse.json({ status: 'error', message: 'Internal Server Error' }, { status: 500 });
    }
}