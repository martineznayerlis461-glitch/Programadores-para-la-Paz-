const axios = require('axios');
require('dotenv').config();

async function enviarMensaje(texto) {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    try {
        await axios.post(url, { chat_id: chatId, text: texto });
        console.log('Mensaje enviado con éxito');
    } catch (error) {
        console.error('Error al enviar mensaje:', error.message);
    }
}
module.exports = { enviarMensaje };
