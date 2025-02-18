import React, { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import axios from "axios";
import Markdown from "react-markdown";

export default function Chatbot() {
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you today?🤖" },
  ]);

  const toggleChatbox = () => {
    setIsChatboxOpen(!isChatboxOpen);
  };

  const handleSendMessage = async () => {
    if (userInput.trim() === "") return;

    // Tambahkan pesan pengguna ke state
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: userInput },
    ]);
    setUserInput(""); // Reset input
    try {
      const response = await axios.post(import.meta.env.VITE_API_CHATBOT, {
        messages: [{ role: "user", content: userInput }],
      });
      
      // Hapus awalan "data: " dari respons (jika ada)
      const jsonString = response.data.replace("data: ", "");
      
      const data = JSON.parse(jsonString);
      
      const botResponse = data.text;
      
      // Tambahkan respons bot ke state
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: botResponse },
      ]);
    } catch (error) {
      console.error("Error:", error);
      
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: "bot",
          text: "Sorry, something went wrong. Please try again.",
        },
      ]);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <aside>
      {/* Tombol Buka Chat */}
      {!isChatboxOpen && (
        <div className="fixed bottom-0 right-0 mb-4 mr-4">
          <button
            onClick={toggleChatbox}
            className="z-20 text-white flex flex-col shrink-0 grow-0 justify-around 
                    fixed bottom-0 right-0 rounded-lg
                    mr-1 mb-5 lg:mr-5 lg:mb-5 xl:mr-10 xl:mb-10"
          >
            <div className="p-3 rounded-full border-4 shadow-sm shadow-white border-white bg-sky-200 dark:bg-slate-800">
              <DotLottieReact
                src="https://lottie.host/0c18e573-f2a3-4735-9134-df0cd179bab6/HGWa9cMop3.lottie"
                loop
                autoplay
                className="w-12 h-12 md:w-16 md:h-16"
              />
            </div>
          </button>
        </div>
      )}

      {/* Container Chat */}
      {isChatboxOpen && (
        <div className="fixed bottom-16 right-4 w-96 z-30">
          <div className="bg-white shadow-md rounded-lg max-w-lg w-full">
            {/* Header Chat */}
            <div className="p-4 border-b bg-blue-500 text-white rounded-t-lg flex justify-between items-center">
              <p className="text-lg font-semibold">Koozee Guardian</p>
              <button
                onClick={toggleChatbox}
                className="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Chatbox */}
            <div className="p-4 h-80 overflow-y-auto">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-2 ${
                    message.sender === "user" ? "text-right" : ""
                  }`}
                >
                  <Markdown
                    className={`${
                      message.sender === "user"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    } rounded-lg py-2 px-4 inline-block`}
                  >
                    {message.text}
                  </Markdown>
                </div>
              ))}
            </div>

            {/* Input dan Tombol Kirim */}
            <div className="p-4 border-t flex">
              <input
                type="text"
                placeholder="Type a message"
                className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
