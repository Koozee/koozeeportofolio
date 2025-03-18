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
                    mr-1 mb-5 lg:mr-5 lg:mb-5 xl:mr-10 xl:mb-10 transition-transform hover:scale-110"
          >
            <div className="p-3 rounded-full border-4 shadow-lg hover:shadow-xl shadow-white border-white bg-sky-200 dark:bg-slate-800 transition-all duration-300 hover:bg-sky-300">
              <DotLottieReact
                src="https://lottie.host/0c18e573-f2a3-4735-9134-df0cd179bab6/HGWa9cMop3.lottie"
                loop
                autoplay
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
              />
            </div>
          </button>
        </div>
      )}

      {/* Container Chat */}
      {isChatboxOpen && (
        <div className="fixed bottom-4 right-4 w-[90vw] sm:w-[400px] md:w-[450px] z-30">
          <div className="bg-white shadow-lg rounded-lg w-full transition-all duration-300">
            {/* Header Chat */}
            <div className="p-3 sm:p-4 border-b bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-t-lg flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <p className="text-base sm:text-lg font-semibold">Koozee Guardian</p>
              </div>
              <button
                onClick={toggleChatbox}
                className="text-gray-100 hover:text-white focus:outline-none transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 sm:w-6 sm:h-6"
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
            <div className="p-4 h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-y-auto scroll-smooth">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-3 ${
                    message.sender === "user" ? "text-right" : ""
                  }`}
                >
                  <Markdown
                    className={`${
                      message.sender === "user"
                        ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                        : "bg-gray-100 text-gray-800"
                    } rounded-2xl py-2 px-4 inline-block max-w-[80%] shadow-sm transition-all duration-300 hover:shadow-md`}
                  >
                    {message.text}
                  </Markdown>
                </div>
              ))}
            </div>

            {/* Input dan Tombol Kirim */}
            <div className="p-3 sm:p-4 border-t flex gap-2">
              <input
                type="text"
                placeholder="Ketik pesan Anda..."
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition-all duration-300 flex items-center gap-2"
              >
                <span className="hidden sm:inline">Kirim</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
