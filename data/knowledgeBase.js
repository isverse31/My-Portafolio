const fs = require('fs').promises;
const natural = require('natural');
const tokenizer = new natural.WordTokenizer();
const stemmer = natural.PorterStemmer;

let knowledgeBase = {};
let unresolvedQuestions = [];

// Cargar la base de conocimiento desde un archivo JSON
async function loadKnowledgeBase() {
  try {
    const data = await fs.readFile('mi_info.json', 'utf8');
    knowledgeBase = JSON.parse(data);
  } catch (error) {
    console.error("Error al cargar la base de conocimiento:", error);
  }
}

// Llama a esta función al inicio de tu aplicación
loadKnowledgeBase();

function preprocessText(text) {
  return tokenizer.tokenize(text.toLowerCase()).map(stemmer.stem);
}

function cosineSimilarity(tokens1, tokens2) {
  const uniqueTokens = new Set([...tokens1, ...tokens2]);
  const vector1 = [];
  const vector2 = [];

  uniqueTokens.forEach(token => {
    vector1.push(tokens1.filter(t => t === token).length);
    vector2.push(tokens2.filter(t => t === token).length);
  });

  const dotProduct = vector1.reduce((sum, val, i) => sum + val * vector2[i], 0);
  const magnitude1 = Math.sqrt(vector1.reduce((sum, val) => sum + val * val, 0));
  const magnitude2 = Math.sqrt(vector2.reduce((sum, val) => sum + val * val, 0));

  return magnitude1 && magnitude2 ? dotProduct / (magnitude1 * magnitude2) : 0;
}

function semanticSimilarity(query, entry) {
  const processedQuery = preprocessText(query);
  const processedEntry = preprocessText(entry);
  return cosineSimilarity(processedQuery, processedEntry);
}

function searchKnowledge(query, threshold = 0.1) {
  if (!query) return "No he entendido tu pregunta. ¿Podrías reformularla?";

  let bestMatch = null;
  let highestSimilarity = 0;

  for (const [key, value] of Object.entries(knowledgeBase)) {
    const similarity = semanticSimilarity(query, key);
    if (similarity > highestSimilarity) {
      highestSimilarity = similarity;
      bestMatch = value;
    }
  }

  if (highestSimilarity > threshold) {
    console.log(`Consulta: "${query}" | Mejor coincidencia: "${bestMatch}" | Similitud: ${highestSimilarity}`);
    return bestMatch;
  } else {
    console.log(`Consulta no resuelta: "${query}"`);
    unresolvedQuestions.push(query);
    return "No tengo información específica sobre eso. ¿Podrías preguntar de otra manera?";
  }
}

// Función para entrenar al chatbot con nuevas preguntas/respuestas
async function trainBot(question, answer) {
  knowledgeBase[question] = answer;
  console.log(`Entrenamiento completado: Pregunta: "${question}", Respuesta: "${answer}"`);

  // Guardar la base de conocimiento actualizada
  await saveKnowledgeBase();
}

async function saveKnowledgeBase() {
  try {
    const data = JSON.stringify(knowledgeBase, null, 2);
    await fs.writeFile('mi_info.json', data, 'utf8');
    console.log("Base de conocimiento guardada correctamente.");
  } catch (error) {
    console.error("Error al guardar la base de conocimiento:", error);
  }
}

// Función para revisar preguntas no resueltas
function reviewUnresolvedQuestions() {
  if (unresolvedQuestions.length === 0) {
    console.log("No hay preguntas sin resolver.");
    return;
  }

  console.log("Preguntas no resueltas:");
  unresolvedQuestions.forEach((q, index) => {
    console.log(`${index + 1}. ${q}`);
  });
}

// Exportar funciones si es necesario
module.exports = {
  searchKnowledge,
  trainBot,
  loadKnowledgeBase,
  reviewUnresolvedQuestions
};
