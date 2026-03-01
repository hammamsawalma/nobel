import { GoogleGenerativeAI } from '@google/generative-ai';
const aiKey = process.env.GEMINI_API_KEY || 'AIzaSyCd_lGbBeRwqVMMOxJDOdrTCfjw6iDOkcg';
const genAI = new GoogleGenerativeAI(aiKey);
// We can't list models directly with the basic SDK setup, we will try fetching gemini-1.5-pro
async function test() {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
    const result = await model.generateContent("Hello");
    console.log(result.response.text());
  } catch(e) { console.error(e) }
}
test();
