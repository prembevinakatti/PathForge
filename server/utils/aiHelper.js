const axios = require("axios");

const MODEL = "mistralai/mistral-7b-instruct";

const api = axios.create({
  baseURL: "https://openrouter.ai/api/v1/chat/completions",
  headers: {
    Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
    "Content-Type": "application/json",
  },
});

exports.generateRoadmapAI = async (rolePrompt) => {
  const prompt = `
Generate an AI learning roadmap for the role: "${rolePrompt}"

Return strict JSON only. No explanation. No markdown.

FORMAT:
[
  {
    "month": "Month X — Title",
    "desc": "Short description",
    "items": ["Topic1", "Topic2"],
    "weeks": [
      { "title": "Week 1", "tasks": ["Task A", "Task B"] },
      { "title": "Week 2", "tasks": ["Task A", "Task B"] },
      { "title": "Week 3", "tasks": ["Task A", "Task B"] },
      { "title": "Week 4", "tasks": ["Task A", "Task B"] }
    ]
  }
]

Generate exactly 6 months.
`;

  const res = await api.post("", {
    model: MODEL,
    messages: [{ role: "user", content: prompt }], // ✅ FIXED
    temperature: 0.7,
  });

  let text =
    res.data.choices?.[0]?.message?.content ||
    res.data.choices?.[0]?.message ||
    "";

  text = text.trim();

  // Remove markdown wrappers if present
  let cleaned = text
    .replace(/```json/gi, "")
    .replace(/```/g, "")
    .trim();

  // Some models prepend text (we extract JSON only)
  const jsonStart = cleaned.indexOf("[");
  const jsonEnd = cleaned.lastIndexOf("]") + 1;

  if (jsonStart === -1 || jsonEnd === -1) {
    throw new Error("AI did not return valid JSON.");
  }

  cleaned = cleaned.slice(jsonStart, jsonEnd);

  return JSON.parse(cleaned);
};
