import { NextResponse } from "next/server";
import { isEmailVerified, clearVerification } from "@/lib/verification-store";
import { sendEmail } from "@/lib/mailer";

export async function POST(request: Request) {
    try {
        const { name, email, phone, institution, message } = await request.json();

        if (!isEmailVerified(email)) {
            return NextResponse.json({ error: "Email not verified" }, { status: 401 });
        }

        // Send email to the institute
        await sendEmail({
            to: process.env.EMAIL_FROM || "info@rajmath.com", // Send to center email
            subject: `New Contact Form Submission from ${name}`,
            text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Institution: ${institution}
        Message: ${message}
      `,
            html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #2563eb;">New Contact Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Institution:</strong> ${institution || "N/A"}</p>
          <div style="margin-top: 20px; padding: 15px; background: #f9fafb; border-left: 4px solid #2563eb;">
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
        </div>
      `,
        });

        // Clear verification after successful send
        clearVerification(email);

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error("Error sending contact email:", error);
        return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
    }
}
