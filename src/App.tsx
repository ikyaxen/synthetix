import { useState } from "react";
import ChatCompletion from "./components/ChatCompletion";
import ImageCompletion from "./components/ImageCompletion";
import Layout from "./components/Layout";
import NavBar from "./components/NavBar";
import TextCompletion from "./components/TextCompletion";

function App() {
  const apikey = "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";
  const openaiChatApiUrl = "https://api.openai.com/v1/chat/completions";
  const openaiConverstaionApiUrl =
    "https://api.openai.com/v1/engines/text-davinci-003/completions";
  const openaiImageApiUrl = "https://api.openai.com/v1/images/generations";

  interface Messges {
    items: {
      role: string;
      content: string;
    }[];
  }

  interface Images {
    items: {
      prompt: string;
      imageUrl: string;
    }[];
  }

  const modes = ["text", "chat", "image"];
  const [currentMode, setCurrentMode] = useState(modes[0]);
  const [prompt, setPrompt] = useState("");
  const [textMessages, setTextMessages] = useState<Messges>({ items: [] });
  const [chatMessages, setChatMessages] = useState<Messges>({ items: [] });
  const [imageMessages, setImageMessages] = useState<Images>({ items: [] });

  function changeCurrentMode(mode: string) {
    setCurrentMode(mode);
  }

  function updateTextMessages(...msg: { role: string; content: string }[]) {
    setTextMessages({ items: [...textMessages.items, ...msg] });
  }

  function updateChatMessages(...msg: { role: string; content: string }[]) {
    setChatMessages({ items: [...chatMessages.items, ...msg] });
  }

  function updateImages(prompt: string, imageUrl: string) {
    setImageMessages({ items: [...imageMessages.items, { prompt, imageUrl }] });
  }

  function textCompletion(e: any) {
    e.preventDefault();

    let userRequest = { role: "user", content: prompt };
    updateTextMessages(userRequest);
    // setPrompt("");

    // fetch(openaiChatApiUrl, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${apikey}`,
    //   },
    //   body: JSON.stringify({
    //     model: "gpt-3.5-turbo",
    //     messages: [userRequest],
    //     temperature: 0.7,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     updateTextMessages(userRequest, data.choices[0].message);
    //   })
    //   .catch((error) => console.log(error));
  }

  function chatCompletion(e: any) {
    e.preventDefault();

    let userRequest = { role: "user", content: prompt };
    updateChatMessages(userRequest);
    setPrompt("");

    fetch(openaiConverstaionApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apikey}`,
      },
      body: JSON.stringify({
        prompt: userRequest.content,
        n: 1,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        updateChatMessages(userRequest, {
          role: "assitant",
          content: data.choices[0].text,
        });
      })
      .catch((error) => console.log(error));
  }

  function imageCompletion(e: any) {
    e.preventDefault();

    const params = {
      model: "image-alpha-001",
      prompt: prompt,
      size: "256x256",
      response_format: "url",
      num_images: 1,
    };

    setPrompt("");

    fetch(openaiImageApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apikey}`,
      },
      body: JSON.stringify(params),
    })
      .then((response) => response.json())
      .then((data) => {
        updateImages(params.prompt, data.data[0].url);
      })
      .catch((error) => console.log(error));
  }

  return (
    <Layout className="w-screen h-screen flex bg-slate-200 max-sm:flex-col">
      <NavBar
        modes={modes}
        currentMode={currentMode}
        changeCurrentMode={changeCurrentMode}
      />
      <Layout className="flex-1 h-full overflow-hidden">
        {currentMode == "text" && (
          <TextCompletion
            prompt={prompt}
            setPrompt={setPrompt}
            submitForm={textCompletion}
            messages={textMessages.items}
          />
        )}
        {currentMode == "chat" && (
          <ChatCompletion
            prompt={prompt}
            setPrompt={setPrompt}
            submitForm={chatCompletion}
            messages={chatMessages.items}
          />
        )}
        {currentMode == "image" && (
          <ImageCompletion
            prompt={prompt}
            setPrompt={setPrompt}
            submitForm={imageCompletion}
            images={imageMessages.items}
          />
        )}
      </Layout>
    </Layout>
  );
}

export default App;
