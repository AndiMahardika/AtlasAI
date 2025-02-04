import Markdown from "react-markdown";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

interface Props {
  history: ChatCompletionMessageParam[];
  loading: boolean;
}

export default function ChatHistory({ history, loading }: Props) {
  return (
    <div className="py-2 space-y-2 flex-1 max-w-3xl w-full mx-auto h-full">
      {history.map((item, i) => (
        <div key={i} className={`w-full grid text-white ${item.role === "user" ? "justify-items-end pl-10" : "justify-items-start pr-10"}`}>
          <div className={`p-2 rounded-md text-sm ${item.role === "user" ? "bg-slate-200 text-black" : "bg-slate-900 text-white"}`}>
            <Markdown>{item.content as string}</Markdown>
          </div>
        </div>
      ))}

      {loading && (
        <div className="w-full grid justify-items-start pr-10">
          <div className="bg-slate-900 text-sm p-2 rounded-md text-white">
            <div className="flex space-x-1">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce delay-150"></span>
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce delay-300"></span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}