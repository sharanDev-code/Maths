import { NextResponse } from "next/server";
import { verifyCode } from "@/lib/verification-store";

export async function POST(request: Request) {
    try {
        const { email, code } = await request.json();

        if (!email || !code) {
            return NextResponse.json({ error: "Email and code are required" }, { status: 400 });
        }

        const isValid = verifyCode(email, code);

        if (isValid) {
            return NextResponse.json({ success: true });
        } else {
            return NextResponse.json({ error: "Invalid or expired code" }, { status: 400 });
        }
    } catch (error: any) {
        console.error("Error verifying code:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
