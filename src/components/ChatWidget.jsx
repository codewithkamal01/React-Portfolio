import { useEffect, useRef, useState } from "react";
import {
  Bot,
  Send,
  X,
  Sparkles,
  Briefcase,
  Code2,
  Mail,
  User,
  Github,
  Linkedin,
} from "lucide-react";

function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi 👋 I'm Kamal's AI assistant. How can I help you today?",
    },
  ]);

  const quickPrompts = [
    {
      icon: <Code2 size={14} />,
      text: "Tech Stack",
    },
    {
      icon: <Briefcase size={14} />,
      text: "Projects",
    },
    {
      icon: <Sparkles size={14} />,
      text: "Services",
    },
    {
      icon: <Mail size={14} />,
      text: "Contact",
    },
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const getBotReply = (message) => {
    const msg = message.toLowerCase().trim();

    // Greetings
    if (/(hello|hi|hey|yo)/.test(msg)) {
      return "👋 Hi! Welcome to Kamal's portfolio. Ask me about his skills, projects, experience, or services.";
    }
    // Acknowledgements
    if (/^(ok|okay|okk|thanks|thank you|cool|great|nice|awesome)$/.test(msg)) {
      const replies = [
        "😊 Happy to help!",
        "👍 Great! Let me know if you'd like to know more.",
        "🚀 Feel free to ask about projects, skills, or experience.",
        "✨ I'm here if you have any other questions.",
      ];

      return replies[Math.floor(Math.random() * replies.length)];
    }
    // About
    if (/(who are you|about|yourself|introduce)/.test(msg)) {
      return "🤖 I'm Kamal's AI portfolio assistant. I help visitors learn about his work, skills, and projects.";
    }

    // Skills
    if (/(skill|tech|stack|technology|tools)/.test(msg)) {
      return "💻 Kamal works with React.js, JavaScript, Tailwind CSS, and is currently learning the MERN stack.";
    }

    // MERN
    if (/(mern|full stack|backend)/.test(msg)) {
      return "🚀 Kamal is learning and building MERN stack applications using MongoDB, Express.js, React, and Node.js.";
    }

    // React
    if (/(react|frontend)/.test(msg)) {
      return "⚛️ React is one of Kamal's strongest skills. He enjoys building modern, responsive, and user-friendly interfaces.";
    }

    // Projects
    if (/(project|portfolio|work|built)/.test(msg)) {
      return `📂 Featured Projects:
• AutoCloud Guard
• Campus Notes
• Social Media App
• Personal Portfolio
• Creyotech Agency Website
• Notes Management System`;
    }

    // Services
    if (/(service|hire|freelance|work with)/.test(msg)) {
      return "🛠️ Services include React development, responsive websites, UI redesigns, and MERN stack applications.";
    }

    // Pricing
    if (/(price|pricing|cost|budget)/.test(msg)) {
      return "💰 Pricing depends on project requirements. Contact Kamal for a personalized quote.";
    }

    // Experience
    if (/(experience|internship|worked)/.test(msg)) {
      return "📈 Kamal has experience building multiple web applications and has completed web development internships.";
    }

    // Education
    if (/(study|college|education|bca)/.test(msg)) {
      return "🎓 Kamal is pursuing a BCA degree while continuously improving his web development skills.";
    }

    // Contact
    if (/(contact|email|reach|connect)/.test(msg)) {
      return "📩 You can connect through the Contact section, GitHub, or LinkedIn.";
    }

    // GitHub
    if (msg.includes("github")) {
      return "💻 Visit Kamal's GitHub profile to explore his projects and source code.";
    }

    // LinkedIn
    if (msg.includes("linkedin")) {
      return "🤝 Connect with Kamal on LinkedIn for networking, collaborations, and opportunities.";
    }

    // Availability
    if (/(available|open to work|opportunity)/.test(msg)) {
      return "✅ Kamal is open to internships, freelance projects, collaborations, and new opportunities.";
    }

    // UI / UX
    if (/(design|ui|ux|interface)/.test(msg)) {
      return "✨ Kamal focuses on clean UI, responsive design, accessibility, and smooth user experiences.";
    }

    // Backend / APIs
    if (/(api|server|database)/.test(msg)) {
      return "🗄️ Kamal is learning Express.js, REST APIs, MongoDB, and authentication systems.";
    }

    // AI
    if (/(ai|assistant|chatbot)/.test(msg)) {
      return "🤖 This chatbot is a custom portfolio assistant built with React and Tailwind CSS.";
    }

    // Resume
    if (/(resume|cv)/.test(msg)) {
      return "📄 You can download Kamal's resume directly from the portfolio.";
    }

    // Default
    return "🤔 I don't have an answer for that yet. Try asking about skills, projects, experience, services, or contact information.";
  };

  const sendMessage = (customText = null) => {
    const messageText = customText || input;

    if (!messageText.trim()) return;

    const userMessage = {
      role: "user",
      text: messageText,
    };

    setMessages((prev) => [...prev, userMessage]);

    setInput("");
    setLoading(true);

    setTimeout(() => {
      const reply = getBotReply(messageText);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: reply,
        },
      ]);

      setLoading(false);
    }, 900);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className={`fixed bottom-5 right-5 z-50
  flex items-center justify-center
  w-14 h-14
  rounded-full
  bg-gradient-to-br from-red-500 to-orange-500
  text-white
  transition-all duration-300
  hover:scale-110 active:scale-95
  ${
    !open
      ? "shadow-[0_0_25px_rgba(249,115,22,0.7)] animate-pulse"
      : "shadow-[0_0_15px_rgba(249,115,22,0.4)]"
  }`}
      >
        {open ? <X size={24} /> : <Bot size={24} />}
      </button>

      {/* Chat Box */}
      <div
        className={`fixed z-40 bottom-24 right-5
        w-[300px] sm:w-[320px]
        h-[500px] sm:h-[520px]
        rounded-3xl
        overflow-hidden
        flex flex-col
        border border-white/10
        bg-[#0B1120]/95
        backdrop-blur-2xl
        shadow-[0_10px_50px_rgba(0,0,0,0.5)]
        transition-all duration-300
        ${
          open
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-5 scale-95 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-white/5">
          <div>
            <h2 className="text-white font-semibold text-base flex items-center gap-2">
              <Bot size={17} />
              AI Assistant
            </h2>

            <p className="text-gray-400 text-xs mt-1">Online & ready to help</p>
          </div>

          <div className="relative flex items-center justify-center">
            <span className="absolute w-3 h-3 rounded-full bg-green-400 animate-ping"></span>
            <span className="relative w-3 h-3 rounded-full bg-green-400"></span>
          </div>
        </div>

        {/* Quick Prompts */}
        <div className="px-4 pt-4 flex flex-wrap gap-2">
          {quickPrompts.map((prompt, index) => (
            <button
              key={index}
              onClick={() => sendMessage(prompt.text)}
              className="flex items-center gap-2
              text-xs text-gray-300
              bg-white/5 hover:bg-white/10
              border border-white/10
              px-3 py-2 rounded-full
              transition-all duration-300"
            >
              {prompt.icon}
              {prompt.text}
            </button>
          ))}
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-5 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[85%]
                px-4 py-3
                rounded-2xl
                text-sm leading-relaxed
                ${
                  msg.role === "user"
                    ? "bg-gradient-to-br from-red-500 to-orange-500 text-white rounded-br-sm"
                    : "bg-[#111827] border border-white/5 text-gray-200 rounded-bl-sm"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-[#111827] border border-white/5 text-gray-400 px-4 py-3 rounded-2xl text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400 animate-bounce"></span>
                <span className="w-2 h-2 rounded-full bg-red-400 animate-bounce delay-100"></span>
                <span className="w-2 h-2 rounded-full bg-red-400 animate-bounce delay-200"></span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Footer Links */}
        <div className="px-4 py-2 border-t border-white/5 flex items-center justify-center gap-4 text-gray-400 text-xs">
          <a
            href="https://github.com/codewithkamal01"
            target="_blank"
            className="flex items-center gap-1 hover:text-white transition-all"
          >
            <Github size={14} />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/kamalmanna"
            target="_blank"
            className="flex items-center gap-1 hover:text-white transition-all"
          >
            <Linkedin size={14} />
            LinkedIn
          </a>

          <a
            href="#about"
            className="flex items-center gap-1 hover:text-white transition-all"
          >
            <User size={14} />
            About
          </a>
        </div>

        {/* Input */}
        <div className="p-4 border-t border-white/10 bg-white/[0.03]">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type message..."
              className="flex-1
              bg-[#111827]
              border border-white/5
              text-white
              placeholder:text-gray-500
              px-4 py-3
              rounded-2xl
              text-sm
              outline-none
              focus:border-red-500
              focus:ring-2
              focus:ring-red-500/20
              transition-all"
            />

            <button
              onClick={() => sendMessage()}
              className="w-11 h-11
              flex items-center justify-center
              rounded-2xl
              bg-gradient-to-br from-red-500 to-orange-500
              text-white
              shadow-[0_0_25px_rgba(249,115,22,0.7)]
              hover:scale-105
              active:scale-95
              transition-all duration-300"
            >
              <Send size={17} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatWidget;
