import { useEffect, useRef, useState } from "react";

export default function RagChatBot() {
  const [message, setMessage] = useState("");
  const [mode, setMode] = useState("recruiter");
  const [loading, setLoading] = useState(false);

  const [chat, setChat] = useState([
    {
      role: "assistant",
      content: "Hi! Ask me anything about your resume/projects 🙂",
    },
  ]);

  const [citations, setCitations] = useState([]);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat, citations, loading]);

  const ask = async () => {
    if (!message.trim() || loading) return;

    const userText = message.trim();

    setChat((prev) => [...prev, { role: "user", content: userText }]);
    setMessage("");
    setLoading(true);
    setCitations([]);

    try {
      const url = `http://127.0.0.1:8000/chat?message=${encodeURIComponent(
        userText
      )}&mode=${encodeURIComponent(mode)}`;

      const res = await fetch(url);
      if (!res.ok) throw new Error(`API error: ${res.status}`);

      const data = await res.json();

      setChat((prev) => [
        ...prev,
        { role: "assistant", content: data.answer || "No answer returned." },
      ]);

      setCitations(data.citations || []);
    } catch (e) {
      setChat((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "❌ Error calling API. Check FastAPI is running on port 8000.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const onEnter = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      ask();
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.shell}>
        {/* LEFT: CHAT */}
        <div style={styles.left}>
          <div style={styles.header}>
            <div>
              <div style={styles.title}>Portfolio RAG Chat</div>
              <div style={styles.subtitle}>
                Ask questions → I answer using your resume + documents only
              </div>
            </div>

            <div style={styles.modeWrap}>
              <span style={styles.modeLabel}>Mode</span>
              <select
                value={mode}
                onChange={(e) => setMode(e.target.value)}
                style={styles.select}
              >
                <option value="recruiter">Recruiter</option>
                <option value="deep_dive">Deep Dive</option>
              </select>
            </div>
          </div>

          <div style={styles.chatArea}>
            {chat.map((m, i) => (
              <div
                key={i}
                style={{
                  ...styles.msgRow,
                  justifyContent: m.role === "user" ? "flex-end" : "flex-start",
                }}
              >
                <div
                  style={{
                    ...styles.bubble,
                    ...(m.role === "user" ? styles.userBubble : styles.botBubble),
                  }}
                >
                  <div style={styles.roleTag}>
                    {m.role === "user" ? "You" : "Assistant"}
                  </div>
                  <div style={styles.msgText}>{m.content}</div>
                </div>
              </div>
            ))}

            {loading && (
              <div style={{ ...styles.msgRow, justifyContent: "flex-start" }}>
                <div style={{ ...styles.bubble, ...styles.botBubble }}>
                  <div style={styles.roleTag}>Assistant</div>
                  <div style={styles.typing}>Typing…</div>
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          <div style={styles.inputBar}>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={onEnter}
              placeholder="Ask something... (Press Enter to send)"
              style={styles.textarea}
              rows={2}
            />
            <button
              onClick={ask}
              disabled={loading || !message.trim()}
              style={{
                ...styles.sendBtn,
                opacity: loading || !message.trim() ? 0.6 : 1,
              }}
            >
              Send
            </button>
          </div>
        </div>

        {/* RIGHT: CITATIONS */}
        <div style={styles.right}>
          <div style={styles.panelTitle}>Evidence</div>
          <div style={styles.panelSub}>
            Shows which document chunks were used.
          </div>

          {citations.length === 0 ? (
            <div style={styles.empty}>
              No citations yet. Ask a question to see sources.
            </div>
          ) : (
            <div style={styles.citationList}>
              {citations.map((c, i) => (
                <div key={i} style={styles.citationCard}>
                  <div style={styles.citationSource}>{c.source}</div>
                  <div style={styles.citationMeta}>
                    Chunk: {c.chunk_id}
                  </div>
                  {c.snippet && (
                    <div style={styles.citationSnippet}>{c.snippet}</div>
                  )}
                </div>
              ))}
            </div>
          )}

          <div style={styles.quickTitle}>Quick Prompts</div>
          <div style={styles.quickWrap}>
            {[
              "Summarize my experience in 5 bullets",
              "What is my strongest tech stack?",
              "Give a STAR story for my best project",
              "What should I highlight for Staff Engineer?",
            ].map((q) => (
              <button
                key={q}
                style={styles.quickBtn}
                onClick={() => setMessage(q)}
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ✅ Simple modern styling (no Tailwind needed) */
const styles = {
  page: {
    minHeight: "100vh",
    padding: 16,
    background: "#0b0f19",
    color: "#eaeefb",
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial",
  },
  shell: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: 16,
  },
  left: {
    background: "#111827",
    border: "1px solid #1f2937",
    borderRadius: 16,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    minHeight: "80vh",
  },
  header: {
    padding: 16,
    borderBottom: "1px solid #1f2937",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  title: { fontSize: 18, fontWeight: 700 },
  subtitle: { fontSize: 12, opacity: 0.8, marginTop: 4 },
  modeWrap: { display: "flex", alignItems: "center", gap: 8 },
  modeLabel: { fontSize: 12, opacity: 0.8 },
  select: {
    background: "#0b1220",
    color: "#eaeefb",
    border: "1px solid #334155",
    padding: "8px 10px",
    borderRadius: 10,
    outline: "none",
  },
  chatArea: {
    flex: 1,
    padding: 16,
    overflowY: "auto",
    background: "#0b1220",
  },
  msgRow: { display: "flex", marginBottom: 12 },
  bubble: {
    maxWidth: "78%",
    borderRadius: 16,
    padding: 12,
    border: "1px solid #22304a",
    boxShadow: "0 10px 24px rgba(0,0,0,0.25)",
  },
  userBubble: { background: "#1d4ed8" },
  botBubble: { background: "#111827" },
  roleTag: { fontSize: 11, opacity: 0.8, marginBottom: 6 },
  msgText: { whiteSpace: "pre-wrap", lineHeight: 1.4, fontSize: 14 },
  typing: { fontSize: 14, opacity: 0.85 },

  inputBar: {
    padding: 12,
    borderTop: "1px solid #1f2937",
    display: "flex",
    gap: 10,
    background: "#111827",
  },
  textarea: {
    flex: 1,
    resize: "none",
    padding: 12,
    borderRadius: 14,
    border: "1px solid #334155",
    outline: "none",
    background: "#0b1220",
    color: "#eaeefb",
    fontSize: 14,
  },
  sendBtn: {
    background: "#22c55e",
    border: "none",
    padding: "0 16px",
    borderRadius: 14,
    fontWeight: 700,
    cursor: "pointer",
  },

  right: {
    background: "#111827",
    border: "1px solid #1f2937",
    borderRadius: 16,
    padding: 16,
    minHeight: "80vh",
    overflow: "auto",
  },
  panelTitle: { fontSize: 16, fontWeight: 800 },
  panelSub: { fontSize: 12, opacity: 0.8, marginTop: 4, marginBottom: 12 },
  empty: {
    fontSize: 13,
    opacity: 0.8,
    border: "1px dashed #334155",
    padding: 12,
    borderRadius: 12,
  },
  citationList: { display: "flex", flexDirection: "column", gap: 10 },
  citationCard: {
    background: "#0b1220",
    border: "1px solid #22304a",
    borderRadius: 14,
    padding: 12,
  },
  citationSource: { fontWeight: 800, fontSize: 13 },
  citationMeta: { fontSize: 12, opacity: 0.8, marginTop: 4 },
  citationSnippet: {
    fontSize: 12,
    opacity: 0.9,
    marginTop: 8,
    whiteSpace: "pre-wrap",
  },

  quickTitle: { marginTop: 16, fontSize: 14, fontWeight: 800 },
  quickWrap: { display: "flex", flexWrap: "wrap", gap: 8, marginTop: 10 },
  quickBtn: {
    background: "#0b1220",
    color: "#eaeefb",
    border: "1px solid #334155",
    padding: "8px 10px",
    borderRadius: 999,
    fontSize: 12,
    cursor: "pointer",
  },
};
