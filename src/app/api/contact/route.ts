import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, message, website } = body;

    // Honeypot: if "website" field is filled, silently succeed without sending
    if (website) {
      return NextResponse.json({ ok: true });
    }

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
      return NextResponse.json(
        { ok: false, error: "Invalid field types." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const companyLine = company ? `Company: ${company}` : "Company: (not provided)";

    const resend = getResend();
    const { error } = await resend.emails.send({
      // TODO: Replace with a verified domain sender, e.g. contact@makztalent.com
      from: "MAKZ Contact Form <onboarding@resend.dev>",
      to: "meralimurtaza@gmail.com",
      replyTo: email,
      subject: `New MAKZ contact form submission from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        companyLine,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #1a1a2e;">New contact form submission</h2>
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

    if (error) {
      console.error("Resend API error:", error.message);
      return NextResponse.json(
        { ok: false, error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err instanceof Error ? err.message : err);
    return NextResponse.json(
      { ok: false, error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
