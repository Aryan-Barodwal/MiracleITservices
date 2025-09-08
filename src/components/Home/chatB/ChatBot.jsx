import React, { useState } from "react";
import "./ChatB.css";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // --- Bot reply logic (rules based) ---
  const getBotReply = (userMessage) => {
    const msg = userMessage.toLowerCase();

    if (
      msg.includes("hi") ||
      msg.includes("hello") ||
      msg.includes("hey")
    ) {
      return "👋 Hello! How are you today?";
    }

    if (msg.includes("how are you")) {
      return "😊 I’m doing great, thanks for asking! What about you?";
    }
    if (msg.includes("fine")) {
      return "😊 ok that's great, Now let's talk about Some work?";
    }

    if (
      msg.includes("contact") ||
      msg.includes("phone") ||
      msg.includes("mobile") ||
      msg.includes("address")
    ) {
      return "📍 B-11/4 Mansrover Building, 90 Nehru Place, Delhi 110019\n📞 +91 9871331804";
    }

    if (msg.includes("services")) {
      return "💼 We provide IT consultancy, AMC services, server management, and network security.";
    }

    if (msg.includes("bye")) {
      return "👋 Goodbye! Have a wonderful day!";
    }

    // default reply
    return "🤖 Hmm, I didn’t quite get that. Could you talk about some work?";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { from: "user", text: input }]);

    // Get bot reply
    const reply = getBotReply(input);

    // Add bot message
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
    }, 500); // small delay for human feel

    setInput("");
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen && messages.length === 0) {
      setMessages([{ from: "bot", text: "👋 Hi! How can I help you today?" }]);
    }
  };

  return (
    <div className="chatbot-container">
      {!isOpen && (
        <div className="chatbot-icon w-[57px]" onClick={toggleChat}>
          💬
        </div>
      )}

      <div className={`chatbot-box ${isOpen ? "open" : ""}`}>
        <div className="chatbot-header">
          💬 Chat with us
          <span className="close-btn" onClick={toggleChat}>
            ✖
          </span>
        </div>

        <div className="messages">
          {messages.map((msg, i) => (
            <div key={i} className={`message ${msg.from}`}>
              {msg.text}
            </div>
          ))}
        </div>

        <div className="input-area">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type a message..."
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
}
