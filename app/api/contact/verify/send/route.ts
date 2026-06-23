import { NextResponse } from "next/server";
import { generateCode } from "@/lib/verification-store";
import { sendEmail } from "@/lib/mailer";

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email || !email.includes("@")) {
            return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
        }

        const code = generateCode(email);

        await sendEmail({
            to: email,
            subject: "Verification Code for Raj Mathematics Institute",
            text: `Your verification code is: ${code}. It will expire in 10 minutes.`,
            html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #2563eb;">Verify Your Email</h2>
          <p>You requested a verification code to send a message to Raj Mathematics Institute.</p>
          <div style="background: #f3f4f6; padding: 20px; text-align: center; font-size: 32px; font-weight: bold; letter-spacing: 5px; border-radius: 8px;">
            ${code}
          </div>
          <p style="margin-top: 20px; font-size: 14px; color: #666;">This code will expire in 10 minutes. If you didn't request this, please ignore this email.</p>
        </div>
      `,
        });

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error("Error sending verification code:", error);
        return NextResponse.json({ error: "Failed to send verification code" }, { status: 500 });
    }
}
