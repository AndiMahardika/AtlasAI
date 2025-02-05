import OpenAI from "openai"

const NVDIA_BASE_URL = import.meta.env.VITE_BASE_URL_AI;
const NVDIA_API_KEY = import.meta.env.VITE_NVDIA_API_KEY;

const openai = new OpenAI({
  baseURL: NVDIA_BASE_URL,
  apiKey: NVDIA_API_KEY,
  dangerouslyAllowBrowser: true,
  defaultHeaders: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_NVDIA_API_KEY}`
  }
})

export default openai