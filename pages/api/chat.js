// pages/api/chat.js
import { searchKnowledge } from '../../data/knowledgeBase';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ reply: 'Método no permitido' });
  }

  try {
    const { message } = req.body;

    // Simular un pequeño retraso para que parezca más natural
    await new Promise(resolve => setTimeout(resolve, 500));

    // Buscar en la base de conocimientos
    const response = searchKnowledge(message);

    res.status(200).json({ reply: response });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      reply: 'Lo siento, hubo un error al procesar tu solicitud.'
    });
  }
}