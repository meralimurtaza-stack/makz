import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: NextRequest) {
  try {
    // Check API key at request time, not module scope
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Email service not configured.", debug: "RESEND_API_KEY env var is missing" },
        { status: 503 }
      );
    }

    const body = await req.json();
    const { name, email, company, message, website } = body;

    // Honeypot: if "website" field is filled, silently succeed without sending
    if (website) {
      return NextResponse.json({ success: true });
    }

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
      return NextResponse.json(
        { error: "Invalid field types." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);

    const { error: resendError } = await resend.emails.send({
      from: "MAKZ <onboarding@resend.dev>",
      to: "meralimurtaza@gmail.com",
      replyTo: email,
      subject: `New MAKZ enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "(not provided)"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #1a1a2e;">New MAKZ enquiry</h2>
          <table style="border-collapse: collapse; width: 100%;">
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #555; vertical-align: top;">Name</td>
              <td style="padding: 8px 12px;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #555; vertical-align: top;">Email</td>
              <td style="padding: 8px 12px;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #555; vertical-align: top;">Company</td>
              <td style="padding: 8px 12px;">${company ? escapeHtml(company) : "<em>Not provided</em>"}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
          <div style="padding: 8px 12px; white-space: pre-wrap;">${escapeHtml(message)}</div>
        </div>
      `,
    });

    if (resendError) {
      console.error("Resend API error:", resendError.message);
      return NextResponse.json(
        { error: "Failed to send message. Please try again.", debug: resendError },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err instanceof Error ? err.message : err);
    return NextResponse.json(
      { error: "An unexpected error occurred.", debug: err instanceof Error ? err.message : String(err) },
      { status: 500 }
    );
  }
}
