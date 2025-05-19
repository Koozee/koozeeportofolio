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

  const quickQuestions = [
    "Tentang Niko Achmad",
    "Pengalaman yang dimiliki",
    "Kemampuan yang dimiliki"
  ];

  const toggleChatbox = () => {
    setIsChatboxOpen(!isChatboxOpen);
  };

  const handleQuickQuestion = async (question) => {
    // Tambahkan pesan pengguna ke state
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: question },
    ]);

    try {
      const response = await axios.post(import.meta.env.VITE_API_CHATBOT, {
        messages: [{ role: "user", content: question }],
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
            className="z-20 flex flex-col shrink-0 grow-0 justify-around 
                    fixed bottom-0 right-0 rounded-full
                    mr-1 mb-5 lg:mr-5 lg:mb-5 xl:mr-10 xl:mb-10 transition-transform hover:scale-110
                    bg-gradient-to-br from-cyan-500 via-blue-700 to-purple-700 shadow-[0_0_30px_5px_rgba(0,255,255,0.5)]
                    dark:bg-gradient-to-br dark:from-[#0f2027] dark:via-[#2c5364] dark:to-[#24243e] dark:shadow-[0_0_30px_5px_rgba(0,255,255,0.3)]"
          >
            <div className="p-3 rounded-full border-4 border-cyan-300 shadow-[0_0_20px_5px_rgba(0,255,255,0.5)] bg-slate-100 transition-all duration-300 hover:bg-slate-300
              dark:border-cyan-700 dark:bg-slate-800 dark:shadow-[0_0_20px_5px_rgba(0,255,255,0.2)]"
            >
              <DotLottieReact
                src="https://lottie.host/0c18e573-f2a3-4735-9134-df0cd179bab6/HGWa9cMop3.lottie"
                loop
                autoplay
                className="w-12 h-12"
              />
            </div>
          </button>
        </div>
      )}

      {/* Container Chat */}
      {isChatboxOpen && (
        <div className="fixed bottom-4 right-4 w-[90vw] sm:w-[350px] md:w-[400px] z-50">
          <div className="bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#24243e] shadow-2xl rounded-3xl w-full border border-cyan-400/40 backdrop-blur-lg bg-opacity-80 transition-all duration-300
            dark:bg-gradient-to-br dark:from-[#181c2b] dark:via-[#232946] dark:to-[#121826] dark:border-cyan-700/40"
          >
            {/* Header Chat */}
            <div className="p-3 border-b border-cyan-400/30 bg-gradient-to-r from-cyan-700/80 to-blue-900/80 text-cyan-200 rounded-t-3xl flex justify-between items-center font-orbitron
              dark:bg-gradient-to-r dark:from-[#232946]/80 dark:to-[#121826]/80 dark:text-cyan-300 dark:border-cyan-700/30"
            >
              <div className="flex items-center gap-2">
                <span className="bg-cyan-400 w-2.5 h-2.5 rounded-full animate-pulse shadow-[0_0_10px_2px_cyan]
                  dark:bg-cyan-500 dark:shadow-[0_0_10px_2px_#67e8f9]"
                ></span>
                <svg className="w-6 h-6 text-cyan-300 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
                <p className="text-base font-bold tracking-widest">Koozee Guardian</p>
              </div>
              <button
                onClick={toggleChatbox}
                className="text-cyan-200 hover:text-white focus:outline-none transition-colors duration-300 dark:text-cyan-400 dark:hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
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
            <div className="p-3 h-[45vh] sm:h-[50vh] md:h-[60vh] overflow-y-auto scroll-smooth">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-3 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <Markdown
                    className={`backdrop-blur-md bg-white/10 border border-cyan-400/20 shadow-[0_0_10px_2px_rgba(0,255,255,0.1)] 
                      dark:bg-white/5 dark:border-cyan-700/20 dark:shadow-[0_0_10px_2px_rgba(0,255,255,0.05)]
                      ${message.sender === "user"
                        ? "bg-gradient-to-r from-cyan-500/80 to-blue-700/80 text-white dark:from-cyan-600/80 dark:to-blue-900/80 dark:text-cyan-100"
                        : "bg-gradient-to-r from-white/20 to-cyan-200/20 text-cyan-100 dark:from-[#232946]/40 dark:to-[#121826]/40 dark:text-cyan-200"
                    } rounded-2xl py-2 px-4 max-w-[80%] transition-all duration-300 hover:shadow-cyan-400/40`}
                  >
                    {message.text}
                  </Markdown>
                </div>
              ))}
            </div>

            {/* Quick Questions */}
            <div className="p-4 border-t border-cyan-400/20 bg-gradient-to-r from-cyan-900/30 to-blue-900/30
              dark:bg-gradient-to-r dark:from-[#232946]/30 dark:to-[#121826]/30 dark:border-cyan-700/20">
              <div className="flex gap-2 mb-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-cyan-500/50 scrollbar-track-transparent">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="px-3 py-1.5 text-sm bg-gradient-to-r from-cyan-500/80 to-blue-700/80 
                      text-white rounded-full hover:from-cyan-400 hover:to-blue-600 
                      transition-all duration-300 font-orbitron shadow-[0_0_10px_2px_rgba(0,255,255,0.2)]
                      dark:from-cyan-700/80 dark:to-blue-900/80 dark:hover:from-cyan-600 dark:hover:to-blue-800
                      whitespace-nowrap"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            {/* Input dan Tombol Kirim */}
            <div className="p-4 border-t border-cyan-400/20 flex gap-2 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-b-3xl
              dark:bg-gradient-to-r dark:from-[#232946]/30 dark:to-[#121826]/30 dark:border-cyan-700/20"
            >
              <input
                type="text"
                placeholder="Ketik pesan Anda..."
                className="w-full px-4 py-2 border border-cyan-400/30 rounded-xl bg-white/10 text-cyan-200 placeholder-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 transition-all duration-300 font-orbitron
                  dark:bg-white/5 dark:text-cyan-100 dark:placeholder-cyan-500 dark:border-cyan-700/30 dark:focus:ring-cyan-500/60"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button
                onClick={handleSendMessage}
                className="bg-gradient-to-r from-cyan-500 to-blue-700 text-white px-4 py-2 rounded-xl hover:from-cyan-400 hover:to-blue-600 shadow-[0_0_10px_2px_cyan] transition-all duration-300 flex items-center gap-2 font-orbitron
                  dark:from-cyan-700 dark:to-blue-900 dark:hover:from-cyan-600 dark:hover:to-blue-800 dark:shadow-[0_0_10px_2px_#67e8f9]"
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
