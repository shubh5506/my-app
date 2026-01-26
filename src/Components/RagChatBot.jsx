import { useState } from "react";

export default function RagChatBot() {
  const [open, setOpen] = useState(false);

  const [message, setMessage] = useState("");
  const [mode, setMode] = useState("recruiter");
  const [answer, setAnswer] = useState("");
  // const [citations, setCitations] = useState([]);
  const [loading, setLoading] = useState(false);

   const removeEvidence = (text) => {
    if (!text) return "";

    return text
      .replace(/###\s*Evidence[\s\S]*/i, "") // removes "### Evidence..." section
      .replace(/Evidence\s*:[\s\S]*/i, "")   // removes "Evidence: ..." section
      .replace(/Evidence[\s\S]*/i, "")   // removes "Evidence ..." section
      // remove markdown bold **text**
      .replace(/\*\*(.*?)\*\*/g, "$1")

    // remove headings like ### Title
      .replace(/^#{1,6}\s*/gm, "")

    // remove horizontal rules ---
      .replace(/^---$/gm, "")

    // remove extra blank lines
      .replace(/\n{3,}/g, "\n\n")
      .trim();
  };
  

  const callChatApi = async () => {
    if (!message.trim()) return;

    setLoading(true);
    setAnswer("");
    // setCitations([]);

 try {
  const API_BASE = process.env.REACT_APP_API_BASE;

  const url = `${API_BASE}/chat?message=${encodeURIComponent(message)}&mode=${encodeURIComponent(mode)}`;


  const res = await fetch(url);
  const data = await res.json();

  if (mode !== "Admin") {
    setAnswer(removeEvidence(data.answer || ""));
  }

  // setCitations(data.citations || []);
} catch (err) {
  console.error("Chat API failed:", err);
  setAnswer("⚠️ Unable to connect to chatbot. Please try again.");
}
 finally {
      setLoading(false);
    }
  };

  const onEnter = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      callChatApi();
    }
  };

  return (
    <>
      {/* ✅ Floating Bubble Button */}
      <button
        onClick={() => setOpen(true)}
        style={{
          ...styles.bubbleBtn,
          display: open ? "none" : "flex",
        }}
      >
        💬
      </button>

      {/* ✅ Chat Window */}
      {open && (
        <div style={styles.chatWindow}>
          {/* Header */}
          <div style={styles.header}>
            <div>
              <div style={styles.title}>Portfolio Chat</div>
              <div style={styles.subTitle}>Ask about my resume/projects</div>
            </div>

            <button onClick={() => setOpen(false)} style={styles.closeBtn}>
              ✖
            </button>
          </div>

          {/* Body */}
          <div style={styles.body}>
            <div style={styles.label}>Mode</div>
            <select
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              style={styles.select}
            >
              <option value="recruiter">Recruiter</option>
              <option value="deep_dive">Deep Dive</option>
            </select>

            <div style={{ marginTop: 12 }}>
              <div style={styles.label}>Your Question</div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={onEnter}
                placeholder="Type here... (Press Enter to send)"
                rows={3}
                style={styles.textarea}
              />
            </div>

            <button
              onClick={callChatApi}
              disabled={loading || !message.trim()}
              style={{
                ...styles.askBtn,
                opacity: loading || !message.trim() ? 0.6 : 1,
              }}
            >
              {loading ? "Thinking..." : "Ask"}
            </button>

            <div style={styles.sectionTitle}>Answer</div>
            <div style={styles.answerBox}>
              {answer ? answer : "Ask a question to get an answer ✅"}
            </div>

            {/* <div style={styles.sectionTitle}>Evidence</div>
            <div style={styles.citationsBox}>
              {citations.length === 0 ? (
                <div style={{ opacity: 0.8 }}>No citations yet.</div>
              ) : (
                citations.map((c, i) => (
                  <div key={i} style={styles.citationItem}>
                    <div style={styles.citationSource}>{c.source}</div>
                    <div style={styles.citationMeta}>{c.chunk_id}</div>
                  </div>
                ))
              )}
            </div> */}
          </div>
        </div>
      )}
    </>
  );
}

const styles = {
  bubbleBtn: {
    position: "fixed",
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    fontSize: 26,
    background: "#22c55e",
    color: "#000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.35)",
    zIndex: 9999,
  },

  chatWindow: {
    position: "fixed",
    bottom: 20,
    right: 20,
    width: 360,
    height: 520,
    borderRadius: 16,
    background: "#111827",
    border: "1px solid #1f2937",
    boxShadow: "0 10px 35px rgba(0,0,0,0.45)",
    overflow: "hidden",
    zIndex: 9999,
    display: "flex",
    flexDirection: "column",
  },

  header: {
    padding: 14,
    background: "#0b1220",
    borderBottom: "1px solid #1f2937",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#fff",
  },

  title: { fontSize: 16, fontWeight: 800 },
  subTitle: { fontSize: 12, opacity: 0.8, marginTop: 2 },

  closeBtn: {
    background: "transparent",
    border: "none",
    color: "#fff",
    fontSize: 16,
    cursor: "pointer",
  },

  body: {
    padding: 14,
    overflowY: "auto",
    color: "#fff",
    flex: 1,
  },

  label: {
    fontSize: 12,
    opacity: 0.85,
    marginBottom: 6,
  },

  select: {
    width: "100%",
    padding: 10,
    borderRadius: 12,
    border: "1px solid #334155",
    background: "#0b1220",
    color: "#fff",
    outline: "none",
  },

  textarea: {
    width: "100%",
    padding: 10,
    borderRadius: 12,
    border: "1px solid #334155",
    background: "#0b1220",
    color: "#fff",
    outline: "none",
    resize: "none",
  },

  askBtn: {
    width: "100%",
    marginTop: 12,
    padding: 12,
    borderRadius: 12,
    border: "none",
    cursor: "pointer",
    fontWeight: 800,
    background: "#22c55e",
    color: "#000",
  },

  sectionTitle: {
    marginTop: 14,
    fontSize: 13,
    fontWeight: 800,
    opacity: 0.9,
  },

  answerBox: {
    marginTop: 8,
    padding: 10,
    borderRadius: 12,
    background: "#0b1220",
    border: "1px solid #22304a",
    whiteSpace: "pre-wrap",
    fontSize: 13,
    lineHeight: 1.4,
    minHeight: 80,
  },

  citationsBox: {
    marginTop: 8,
    padding: 10,
    borderRadius: 12,
    background: "#0b1220",
    border: "1px solid #22304a",
    maxHeight: 120,
    overflowY: "auto",
  },

  citationItem: {
    padding: 8,
    borderRadius: 10,
    border: "1px solid #334155",
    marginBottom: 8,
  },

  citationSource: {
    fontSize: 12,
    fontWeight: 800,
  },

  citationMeta: {
    fontSize: 11,
    opacity: 0.8,
    marginTop: 4,
  },
};
