import Navbar from "@/components/share/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useCountryStore from "@/store/useCountryStore";
import { Loader2, SendHorizontal } from "lucide-react";
import Select from "react-select";
import ChatHistory from "./components/chathistory";
import useChatbot from "./hooks/useChatbot";

export default function Chatbot() {
  const { history, loading, input, setInput, fetchAi } = useChatbot()
  const { countries, selectedCountry, setSelectedCountry } = useCountryStore()

  return (
    <main className="min-h-screen flex flex-col justify-between px-2 bg-white">
      <div className="sticky top-0 left-0 right-0 bg-white">
        <Navbar />
        <div className="flex flex-col md:flex-row max-w-3xl w-full gap-x-1 gap-y-1 md:gap-y-0 mx-auto my-1">
          <Select 
            options={countries} 
            className="w-full" 
            defaultValue={selectedCountry ? { label: selectedCountry, value: selectedCountry } : undefined}
            onChange={(e) => setSelectedCountry(e?.label as string)}
          />
          <div className="flex gap-x-1">
            <Button className="bg-blue-500 hover:bg-blue-600 text-wrap md:text-nowrap" onClick={() => fetchAi("Get travel recommendations")}>Get travel recommendations</Button>
            <Button className="bg-blue-500 hover:bg-blue-600 text-wrap md:text-nowrap" onClick={() => fetchAi("Translate country information")}>Translate country information</Button>
          </div>
        </div>
      </div>

      <ChatHistory history={history} loading={loading} />

      <form className="flex gap-x-2 max-w-3xl w-full mx-auto sticky bottom-0 bg-white py-1">
        <Input placeholder="Input..." value={input} className="bg-slate-200" onChange={(e) => setInput(e.target.value)} disabled={loading} autoComplete="off" />
        <Button type="submit" size={"icon"} disabled={loading} onClick={() => fetchAi(input)}>
            { loading ? <Loader2 className="animate-spin"/> : <SendHorizontal /> }
        </Button>
      </form>
    </main>
  )
}
