// src/app/api/contact/route.js
import { NextResponse } from 'next/server';
import Mailjet from 'node-mailjet';

// Initialisation du client Mailjet
const mailjet = new Mailjet({
  apiKey: process.env.MJ_APIKEY_PUBLIC,
  apiSecret: process.env.MJ_APIKEY_PRIVATE
});

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    const requestData = await mailjet
      .post("send", { 'version': 'v3.1' })
      .request({
        Messages: [
          {
            From: {
              Email: process.env.MAILJET_SENDER_EMAIL,
              Name: "Portfolio Contact"
            },
            To: [
              {
                Email: process.env.EMAIL_USER,
                Name: "Lucas Plebani"
              }
            ],
            ReplyTo: {
              Email: email,
              Name: name
            },
            Subject: `Nouveau message Portfolio de ${name}`,
            TextPart: `De: ${name} (${email})\n\nMessage:\n${message}`,
            HTMLPart: `
              <div style="font-family: sans-serif; max-width: 600px; padding: 20px;">
                <h2>Nouveau contact depuis le Portfolio</h2>
                <p><strong>Nom :</strong> ${name}</p>
                <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
                <div style="background: #f4f4f5; padding: 15px; border-radius: 8px; margin-top: 20px;">
                  <p style="margin: 0; white-space: pre-wrap;">${message}</p>
                </div>
              </div>
            `
          }
        ]
      });

    return NextResponse.json({ success: true, message: "Email envoyé avec succès" }, { status: 200 });

  } catch (error) {
    console.error("Erreur d'envoi Mailjet:", error.statusCode, error.message);
    return NextResponse.json({ success: false, message: "Erreur serveur lors de l'envoi" }, { status: 500 });
  }
}