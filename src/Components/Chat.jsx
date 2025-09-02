import React, { useState, useEffect } from "react";

function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);


  // 🔹 Resume-focused placeholder list
  const placeholders = [
    "Ask me about my experience...",
    "What skills do you have in .NET?",
    "Curious about your Azure projects?",
    "Tell me about your role at Pathward",
    "What cloud platforms do you use?",
    "Do you have React and Blazor experience?",
  ];

  // 🔹 Index to rotate placeholders
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  // 🔹 Rotate every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggleChat = () => setOpen(!open);

  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages([...messages, { sender: "user", text: input }]);

    try {
      const res = await fetch("https://shubham-chatbot-api-dzhehxerf8awcwe9.canadacentral-01.azurewebsites.net/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input }),
      });

      const data = await res.json();
      setMessages((prev) => [...prev, { sender: "bot", text: data.response }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ API error" },
      ]);
    }

    setInput("");
  };

  return (
    <div>
      {/* Floating Button */}
      <button
        onClick={toggleChat}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          borderRadius: "50%",
          width: "120px",
          height: "60px",
          background: "#007bff",
          color: "white",
          fontSize: "24px",
          border: "none",
          cursor: "pointer",
          zIndex: 1001,
        }}
      >
        💬Chat
      </button>

      {/* Popup Window */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            width: "400px",
            height: "400px",
            background: "white",
            border: "1px solid #ccc",
            borderRadius: "10px",
            boxShadow: "0px 2px 10px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "column",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "#007bff",
              color: "white",
              padding: "10px",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Chatbot
          </div>

          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "10px",
              fontSize: "14px",
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  textAlign: msg.sender === "user" ? "right" : "left",
                  margin: "5px 0",
                  color: msg.sender === "user" ? "black" : "black",
                }}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div style={{ display: "flex", padding: "10px" }}>
            <input
              style={{ flex: 1, padding: "5px" }}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              
              placeholder={placeholders[placeholderIndex]}
            />
            <button onClick={sendMessage}  style={{
    marginLeft: "5px",
    padding: "6px 12px",
    backgroundColor: "#007bff",   // Bootstrap blue
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
    transition: "background 0.3s ease",
  }}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatBot;
