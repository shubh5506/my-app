
export const blogs = [
  {
    id: "azure-vs-python-ai-chatbot",
    title:
      "Azure Semantic Kernel (.NET) vs Python FastAPI for an AI Resume Chatbot",
    date: "Jan 2026",
    readTime: "6 min read",
    tags: [
      "Generative AI",
      "FastAPI",
      "Azure AI",
      "Semantic Kernel",
      "LangChain",
      "RAG"
    ],
    excerpt:
      "I built the same AI resume chatbot twice—once with Azure Semantic Kernel and once with Python FastAPI. Here’s what I learned about speed, cost, and long-term flexibility.",
    content: `
🔁 Why I Built My AI Resume Chatbot Twice (And What I Learned)

Most resumes are static.

You scroll.
You skim.
You leave.

I wanted something different.

So instead of a PDF, I built an AI-powered resume chatbot that lets recruiters talk to my experience:

“What cloud platforms do you know?”
“Show me your GenAI projects.”
“Explain your architecture decisions.”

And it answers instantly using Retrieval-Augmented Generation (RAG).

But here’s the twist…

I didn’t build it once.

I built it twice — using two completely different stacks — to see which one actually performs better in the real world.

☁️ Version 1 — Azure Semantic Kernel + .NET 6
<img src="/Azchat.png" style="width:100%; border-radius:12px; margin:20px 0;" />

Since I’ve spent years in C# and .NET, this felt like the natural starting point. Semantic Kernel made it easy to orchestrate prompts, plugins, and AI workflows directly inside Azure. Everything felt structured and “enterprise ready” from day one.

✅ What worked well

🧩 Clean abstractions

🏢 Strong enterprise architecture patterns

⚡ Quick initial prototyping

🔌 Tight Azure integrations

❌ Where it struggled

💸 Costs added up fast

⚙️ Configuration felt heavy

🔍 Too many hidden layers

🔒 Vendor lock-in concerns

Over time, I noticed something: Azure saved me time upfront… but added complexity later. Every small change meant navigating multiple services and settings. It felt powerful — but heavy.

🐍 Version 2 — FastAPI + LangChain
<img src="/rag.png" style="width:100%; border-radius:12px; margin:20px 0;" />

Then I rebuilt everything in Python.

Same features.
Same chatbot.
Same RAG pipeline.

Completely different experience.

And honestly?

It felt lighter immediately.

⭐ What stood out

⚡ Faster API responses

💰 Cheap hosting on Railway

🔎 Full transparency into every step

🌍 Huge open-source ecosystem

🧠 Simple embeddings + vector search
<img src="/trans.png" style="width:100%; border-radius:12px; margin:20px 0;" />

LangChain made document chunking, embeddings, and retrieval incredibly straightforward. Instead of fighting configuration… I was just building. Iteration speed skyrocketed.

📊 Head-to-Head Comparison

After deploying both versions, the differences were clear:

🚀 Python API was faster

💵 Deployment was cheaper

🔁 Iteration was easier

🔓 No vendor lock-in

Even as someone deeply experienced in .NET, I had to admit:
Python simply felt more natural for GenAI workloads.

🛠️ My Hybrid Architecture Going Forward

Here’s what I realized:
This isn’t Python vs .NET.
It’s Python and .NET.

Each stack has strengths.

So I’m using Python + FastAPI for the core AI logic — where speed and flexibility matter most. And I’m using .NET for the frontend and other non-AI services — where I want strong typing and enterprise features.

💭 Final Thoughts

Building the same product twice taught me more than any tutorial could.

☁️ Azure is powerful — but complex and expensive

🐍 Python is fast — flexible and cost-effective

If you’re building AI-first systems today, my advice is simple:
Stay lean. Stay open. Avoid lock-in. Optimize for iteration speed.

Because in GenAI…

The fastest team wins.
`
  }
];
