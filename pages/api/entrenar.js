import { trainBot } from '/data/knowledgeBase'; // Cambia la ruta del chatbot según tu estructura

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { question, answer } = req.body;
    
    if (!question || !answer) {
      return res.status(400).json({ error: "Faltan datos: pregunta o respuesta." });
    }

    try {
      await trainBot(question, answer);
      return res.status(200).json({ message: "Entrenamiento completado con éxito." });
    } catch (error) {
      return res.status(500).json({ error: "Error al entrenar el bot." });
    }
  } else {
    return res.status(405).json({ error: "Método no permitido. Solo se permite POST." });
  }
}
