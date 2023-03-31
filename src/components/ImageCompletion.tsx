import React from "react";
import chatgptLogo from "../assets/chatgptLogo.png";
import userLogo from "../assets/userLogo.png";
import Prompt from "./Prompt";

interface Props {
  prompt: string;
  setPrompt: any;
  submitForm: any;
  images: {
    prompt: string;
    imageUrl: string;
  }[];
}

const ImageCompletion = (props: Props) => {
  const { prompt, setPrompt, submitForm, images } = props;
  return (
    <div className="px-5 w-full h-full">
      <div className="max-w-7xl h-full mx-auto flex flex-col">
        <div
          id="messages"
          className="flex-1 overflow-y-scroll scrollbar-hide grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 flex-wrap gap-5 pt-5 pb-10"
        >
          {images.map((image, index) => (
            <div key={index}>
              <img
                className="rounded-xl shadow-md w-full h-auto"
                src={image.imageUrl}
                alt=""
              />
            </div>
          ))}
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

export default ImageCompletion;
