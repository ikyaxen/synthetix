import React, { useRef } from "react";
import chatgptLogo from "../assets/chatgptLogo.png";
import userLogo from "../assets/userLogo.png";
import Prompt from "./Prompt";

interface Props {
  prompt: string;
  setPrompt: any;
  submitForm: any;
  messages: {
    role: string;
    content: string;
  }[];
}

const TextCompletion = (props: Props) => {
  const { prompt, setPrompt, submitForm, messages } = props;
  return (
    <div className="px-5 w-full h-full">
      <div className="max-w-7xl h-full mx-auto flex flex-col">
        <div
          className="messages flex-1 overflow-y-scroll scrollbar-hide flex flex-col gap-5 pt-5 pb-10"
        >
          {messages.map((msg, idx) =>
            msg.role == "user" ? (
              <div key={idx} className="flex gap-5">
                <img
                  src={userLogo}
                  alt="userlogo"
                  className="w-7 h-7 bg-slate-500 border border-black rounded-lg"
                />
                <div className="flex gap-5 bg-slate-500 px-4 py-2 rounded-lg">
                  <p className="text-slate-200">{msg.content}</p>
                </div>
              </div>
            ) : (
              <div key={idx} className="flex gap-5">
                <img
                  src={chatgptLogo}
                  alt="chatgpt"
                  className="w-7 h-7 bg-slate-300 border border-black rounded-lg"
                />
                <div className="flex gap-5 bg-slate-300 px-4 py-2 rounded-lg">
                  <p className="text-slate-900">{msg.content}</p>
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
              placeholder="Type a prompt..."
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

export default TextCompletion;

// class TextCompletion extends React.Component {
//   constructor(props: Props) {
//     super(props);
//   }

//   render(): React.ReactNode {
//     const { prompt, setPrompt, submitForm, messages } = this.props;
//     return (
//       <div className="px-5 w-full h-full">
//         <div className="max-w-7xl h-full mx-auto flex flex-col">
//           <div
//             id="messages"
//             className="flex-1 overflow-y-scroll scrollbar-hide flex flex-col gap-5 pt-5 pb-10"
//           >
//             {messages.map((msg, idx) =>
//               msg.role == "user" ? (
//                 <div key={idx} className="flex gap-5">
//                   <img
//                     src={userLogo}
//                     alt="userlogo"
//                     className="w-7 h-7 bg-slate-500 border border-black rounded-lg"
//                   />
//                   <div className="flex gap-5 bg-slate-500 px-4 py-2 rounded-lg">
//                     <p className="text-slate-200">{msg.content}</p>
//                   </div>
//                 </div>
//               ) : (
//                 <div key={idx} className="flex gap-5">
//                   <img
//                     src={chatgptLogo}
//                     alt="chatgpt"
//                     className="w-7 h-7 bg-slate-300 border border-black rounded-lg"
//                   />
//                   <div className="flex gap-5 bg-slate-300 px-4 py-2 rounded-lg">
//                     <p className="text-slate-900">{msg.content}</p>
//                   </div>
//                 </div>
//               )
//             )}
//           </div>
//           <div>
//             <form onSubmit={submitForm} className="flex py-5">
//               <input
//                 className="bg-slate-50 flex-1 rounded-tl-xl rounded-bl-xl p-2 focus:outline-none shadow-md"
//                 type="text"
//                 placeholder="Type a prompt..."
//                 value={prompt}
//                 onChange={(e) => setPrompt(e.target.value)}
//               />
//               <button
//                 type="submit"
//                 className="bg-slate-50 text-slate-500 flex items-center p-2 rounded-tr-xl rounded-br-xl shadow-md"
//               >
//                 <span className="material-symbols-rounded">send</span>
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default TextCompletion;
