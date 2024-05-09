import nodemailer from 'nodemailer';

const emailRegistro = async ( datos ) => {

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
        subject: "Comprueba tu Cuenta en APV",
        text: "Comprueba tu cuenta en APV",
        html: `
        <h2>Hola ${nombre}, Comprueba tu cuenta en APV</h2>
        <h3>Tu cuenta ya está lista</h3>
        <p>Solo debes comprobarla dando click en el siguiente enlace: </p>
        <a href="${process.env.FRONTEND_URL}/confirmar/${token}" >COMPROBAR TU CUENTA</a>

        <p>Si tú no solicitaste crear esta cuenta, puedes ignorar este mensaje</p>
        `
    } );
}

export default emailRegistro;
