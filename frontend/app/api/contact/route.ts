import { ContactSchema } from "@/features/contact/schemas/ContactSchema";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Doble validación en el servidor
    const validatedData = ContactSchema.safeParse(body);

    if (!validatedData.success) {
      return NextResponse.json(
        { error: "Datos de formulario inválidos" },
        { status: 400 }
      );
    }

    const { fullName, email, options, message } = validatedData.data;

    // Si tu combobox guarda el objeto completo, extraemos el texto. Si guarda solo el ID, ajusta esto.
    const consultaTipo = (options as any)?.text || "Consulta General";

    // 2. Envío del email
    const data = await resend.emails.send({
      // En el tier gratuito de Resend, debes usar este remitente por defecto
      from: "Web Inmobiliaria <onboarding@resend.dev>",
      // Aquí va tu correo o el de la administración que recibirá la consulta
      to: ["damrod1999@gmail.com"],
      subject: `Nueva Consulta Web: ${consultaTipo} - ${fullName}`,
      replyTo: email, // Para poder responderle directamente al cliente dándole a "Responder"
      html: `
        <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
          <h2>Nueva consulta desde el portal web</h2>
          <hr style="border-top: 1px solid #eaeaea; margin: 20px 0;" />
          <p><strong>Nombre del cliente:</strong> ${fullName}</p>
          <p><strong>Email de contacto:</strong> ${email}</p>
          <p><strong>Tipo de operación:</strong> ${consultaTipo}</p>
          <p><strong>Mensaje:</strong></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error enviando email:", error);
    return NextResponse.json(
      { error: "Ocurrió un error al enviar el correo" },
      { status: 500 }
    );
  }
}