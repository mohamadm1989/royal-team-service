
import { GoogleGenAI, Type } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the AI Project Assistant for "Royal Team Service". 
Royal Team Service is a professional company specializing in:
1. Gutting & Demolition (Entkernung & Demontage)
2. Asbestos Remediation (Schadstoffsanierung Asbest according to TRGS 519/521/524)
3. Waste Management (Fachgerechte Entsorgung)

Your goal is to help potential clients by:
- Providing rough estimates of project scope based on their description.
- Explaining the legal requirements for asbestos removal in Germany (TRGS standards).
- Answering technical questions about demolition.
- Gathering basic project info (size in m², location, type of building).

Guidelines:
- Professional, efficient, and safety-oriented tone.
- Communicate primarily in German (as the company is based in Reutlingen/Ohmenhausen, Germany).
- Always mention that actual pricing requires a site visit.
- If the user asks for a price, explain the factors involved (material type, access, disposal fees).
`;

export async function getGeminiResponse(userPrompt: string) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text || "Entschuldigung, ich konnte keine Antwort generieren. Bitte versuchen Sie es erneut.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Fehler bei der Verbindung zum KI-Assistenten. Bitte kontaktieren Sie uns direkt per Telefon.";
  }
}
