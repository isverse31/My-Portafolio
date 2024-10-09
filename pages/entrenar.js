import { useState } from 'react';

export default function EntrenarBot() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!question || !answer) {
      setStatusMessage("Por favor, completa ambos campos.");
      return;
    }

    try {
      const response = await fetch('/api/entrenar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question, answer }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatusMessage(data.message);
        setQuestion(''); // Limpiar campos
        setAnswer('');
      } else {
        setStatusMessage(data.error);
      }
    } catch (error) {
      setStatusMessage("Ocurrió un error al intentar entrenar al bot.");
    }
  };

  return (
    <div>
      <h1>Entrenar al Bot</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Pregunta:</label>
          <input 
            type="text" 
            value={question} 
            onChange={(e) => setQuestion(e.target.value)} 
            required
          />
        </div>
        <div>
          <label>Respuesta:</label>
          <input 
            type="text" 
            value={answer} 
            onChange={(e) => setAnswer(e.target.value)} 
            required
          />
        </div>
        <button type="submit">Entrenar Bot</button>
      </form>
      {statusMessage && <p>{statusMessage}</p>}
    </div>
  );
}
