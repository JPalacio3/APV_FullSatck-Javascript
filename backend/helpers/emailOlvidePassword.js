import nodemailer from 'nodemailer';

const emailOlvidePassword = async ( datos ) => {

    // Credenciales para la configuración de Email
    var transporter = nodemailer.createTransport( {
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    } );

    const { email, nombre, token } = datos;

    // Enviar el Email
    const info = await transporter.sendMail( {
        from: "APV - Administrador de Pacientes de Veterinaria",
        to: email,
        subject: "Restablecimiento de Contraseña  en APV",
        text: "Restablecimiento de Contraseña  en APV",
        html: `
        <div class="bg-gray-100 p-6">
            <h2 class="text-2xl font-semibold text-gray-800">Hola ${nombre}, Restablece tu contraseña y recupera tu acceso en APV</h2>
            <p class="text-lg text-gray-700 mt-4">Tu cuenta ya está lista.</p>
            <p class="text-lg text-gray-700">Sigue el siguiente enlace para generar una nueva contraseña:</p>
            <a href="${process.env.FRONTEND_URL}/olvide-password/${token}" class="block bg-indigo-500 text-white font-semibold text-center py-2 px-4 rounded mt-4 hover:bg-indigo-600">RESTABLECE TU CONTRASEÑA</a>
            <p class="text-lg text-gray-700 mt-4">Si tú no solicitaste crear esta cuenta, puedes ignorar este mensaje.</p>
        </div>
        `
    } );
}

export default emailOlvidePassword;
