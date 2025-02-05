import OpenAI from "openai"

const NVDIA_BASE_URL = `${window.location.origin}/api`;
const NVDIA_API_KEY = import.meta.env.VITE_NVDIA_API_KEY;

const openai = new OpenAI({
  baseURL: NVDIA_BASE_URL,
  apiKey: NVDIA_API_KEY,
  dangerouslyAllowBrowser: true 
})

export default openai