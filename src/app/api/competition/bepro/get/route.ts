import { retrieveData } from "@/lib/firebase/service"
import { NextResponse } from "next/server"

export async function GET() {

    const teams = await retrieveData('bepro_teams')

    return NextResponse.json({
        status: 200,
        message: 'success',
        data: teams
    })
}