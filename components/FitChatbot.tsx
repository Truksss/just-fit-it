"use client"

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const SUGGESTED_PROMPTS = [
  "Give me a beginner workout plan",
  "What should I eat before a workout?",
  "How do I stay consistent?",
  "How does Just Fit It work?",
];

export default function FitChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hey! 👋 I'm your Just Fit It assistant. Ask me anything about fitness, workouts, nutrition, or how the app works!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  async function sendMessage(text?: string) {
    const userText = text ?? input.trim();
    if (!userText || loading) return;

    const newMessages: Message[] = [...messages, { role: "user", content: userText }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: `You are a friendly, knowledgeable fitness assistant for Just Fit It — a fitness tracking app. 
You help users with:
- General fitness advice and motivation
- Workout recommendations and plans
- Nutrition tips before/after workouts
- How to use the Just Fit It app (track workouts, set goals, build streaks)
Keep responses concise, warm, and encouraging. Use simple formatting. No markdown headers.`,
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await response.json();
      const reply = data.content?.[0]?.text ?? "Sorry, I couldn't get a response. Try again!";
      setMessages([...newMessages, { role: "assistant", content: reply }]);
    } catch {
      setMessages([...newMessages, { role: "assistant", content: "Oops! Something went wrong. Please try again." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-stone-900 text-white shadow-xl flex items-center justify-center text-2xl hover:bg-stone-700 transition-colors duration-200"
        aria-label="Open fitness chatbot"
      >
        {open ? "✕" : "💬"}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[340px] sm:w-[380px] bg-white rounded-2xl shadow-2xl border border-stone-200 flex flex-col overflow-hidden"
            style={{ maxHeight: "520px" }}
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-stone-100 flex items-center gap-3 bg-stone-50">
              <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-sm font-bold">
                JF
              </div>
              <div>
                <p className="text-sm font-semibold text-stone-900" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Just Fit It Assistant
                </p>
                <p className="text-xs text-stone-400" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Powered by Claude AI
                </p>
              </div>
              <div className="ml-auto w-2 h-2 rounded-full bg-green-400" />
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ maxHeight: "340px" }}>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-stone-900 text-white rounded-br-sm"
                        : "bg-stone-100 text-stone-800 rounded-bl-sm"
                    }`}
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-stone-100 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1 items-center">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-stone-400"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Suggested prompts — show only at start */}
              {messages.length === 1 && !loading && (
                <div className="pt-1 flex flex-wrap gap-2">
                  {SUGGESTED_PROMPTS.map((p) => (
                    <button
                      key={p}
                      onClick={() => sendMessage(p)}
                      className="text-xs px-3 py-1.5 rounded-full border border-stone-200 text-stone-500 hover:border-orange-400 hover:text-orange-500 transition-colors duration-150 bg-white"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-stone-100 flex gap-2 items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Ask me anything..."
                className="flex-1 text-sm px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:border-stone-400 bg-stone-50 text-stone-900 placeholder-stone-400 transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                disabled={loading}
              />
              <button
                onClick={() => sendMessage()}
                disabled={loading || !input.trim()}
                className="w-9 h-9 rounded-xl bg-stone-900 text-white flex items-center justify-center hover:bg-stone-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-200 flex-shrink-0"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}