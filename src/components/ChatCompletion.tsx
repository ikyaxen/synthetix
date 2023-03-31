import chatgptLogo from "../assets/chatgptLogo.png";
import userLogo from "../assets/userLogo.png";

type Props = {
  prompt: string;
  setPrompt: any;
  submitForm: any;
  messages: {
    role: string;
    content: string;
  }[];
};

const ChatCompletion = (props: Props) => {
  const { prompt, setPrompt, submitForm, messages } = props;
  return (
    <div className="px-5 w-full h-full">
      <div className="max-w-7xl h-full mx-auto flex flex-col">
        <div
          id="messages"
          className="flex-1 overflow-y-scroll scrollbar-hide flex flex-col gap-5 pt-5 pb-10"
        >
          {messages.map((msg, idx) =>
            msg.role == "user" ? (
              <div key={idx}>
                <div className="max-w-[85%] w-fit ml-auto flex gap-5">
                  <div className="bg-slate-500 text-slate-200  px-4 py-2 rounded-2xl rounded-tr-none ml-auto">
                    {msg.content}
                  </div>
                  <img src={userLogo} alt="userlogo" className="w-7 h-7 bg-slate-500 rounded-full border border-black" />
                </div>
              </div>
            ) : (
              <div key={idx}>
                <div className="flex gap-5 max-w-[85%] w-fit">
                  <img src={chatgptLogo} alt="chatgpt" className="w-7 h-7 bg-slate-300 rounded-full border border-black" />
                  <div className="bg-slate-300 text-slate-800 px-4 py-2 rounded-2xl rounded-tl-none">
                    {msg.content}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        <div>
          <form onSubmit={submitForm} className="flex py-5">
            <input
              className="bg-slate-50 flex-1 rounded-tl-xl rounded-bl-xl p-2 focus:outline-none shadow-md"
              type="text"
              placeholder="Send a message..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <button
              type="submit"
              className="bg-slate-50 text-slate-500 flex items-center p-2 rounded-tr-xl rounded-br-xl shadow-md"
            >
              <span className="material-symbols-rounded">send</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatCompletion;
