import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";


const apiKey = "AIzaSyCChqAH667GQUPEQeZIWo58SHRVqwrNPII";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 1000,
  responseMimeType: "text/plain",
};

async function run(promt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const result = await chatSession.sendMessage(promt);
  const response = result.response;
  console.log(response.text());
  return response.text();
}

export default run;
