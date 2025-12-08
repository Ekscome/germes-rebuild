import { NextRequest, NextResponse } from "next/server";

// @ts-expect-error — у nodemailer нет типизации
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, phone } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "mail.hosting.reg.ru",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Заявка с сайта" <${process.env.MAIL_USER}>`,
      to: "service@germesto.ru",
      subject: "Новая заявка",
      text: `Имя: ${name}\nТелефон: ${phone}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Ошибка отправки:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
