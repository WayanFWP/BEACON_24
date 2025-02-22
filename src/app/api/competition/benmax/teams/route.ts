import { getTeamByEmail } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get('email');
    const category = searchParams.get('category');

    if (!email || !category) {
      return NextResponse.json({
        status: 400,
        message: 'bad request'
      });
    }

    const teamName = await getTeamByEmail(email, category);

    return NextResponse.json({
      status: 200,
      message: 'success',
      data: teamName
    })
}