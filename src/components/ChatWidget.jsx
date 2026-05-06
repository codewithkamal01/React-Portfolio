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
    if (
      msg.includes("hello") ||
      msg.includes("hi") ||
      msg.includes("hey") ||
      msg.includes("yo")
    ) {
      return "Hey there 👋 Welcome to Kamal's portfolio. I'm your virtual assistant and I can guide you through his projects, skills, technologies, experience and services. Try asking something like 'What projects have you built?' 🚀";
    }

    // About
    if (
      msg.includes("who are you") ||
      msg.includes("about") ||
      msg.includes("yourself") ||
      msg.includes("introduce")
    ) {
      return "I'm Kamal's AI-powered portfolio assistant 🤖 Built to help visitors explore his work, technical skills, learning journey and development services in an interactive way.";
    }

    // Skills & Tech Stack
    if (
      msg.includes("skill") ||
      msg.includes("tech") ||
      msg.includes("stack") ||
      msg.includes("technology") ||
      msg.includes("tools")
    ) {
      return "Kamal primarily works with React.js, Tailwind CSS and JavaScript while actively learning the MERN stack including Node.js, Express.js and MongoDB. He also focuses heavily on modern UI design, responsiveness and frontend performance.";
    }

    // MERN / Full Stack
    if (
      msg.includes("mern") ||
      msg.includes("full stack") ||
      msg.includes("backend")
    ) {
      return "Yes 🚀 Kamal is currently building and learning full stack MERN applications including authentication systems, dashboards, REST APIs, AI integrations and scalable responsive web applications.";
    }

    // React
    if (msg.includes("react") || msg.includes("frontend")) {
      return "React is one of Kamal's strongest frontend technologies ⚛️ He enjoys building smooth, responsive and visually polished interfaces using React, Tailwind CSS and modern component-based architecture.";
    }

    // Projects
    if (
      msg.includes("project") ||
      msg.includes("portfolio") ||
      msg.includes("work") ||
      msg.includes("built")
    ) {
      return "Kamal has worked on multiple frontend and MERN-based projects including portfolio websites, AI-style assistant interfaces, authentication systems, responsive dashboards and a college notes sharing platform concept.";
    }

    // Services
    if (
      msg.includes("service") ||
      msg.includes("hire") ||
      msg.includes("freelance") ||
      msg.includes("work with")
    ) {
      return "Services include modern frontend development, React applications, responsive portfolio websites, UI redesigns and MERN stack web application development tailored for modern user experiences.";
    }

    // Pricing
    if (
      msg.includes("price") ||
      msg.includes("pricing") ||
      msg.includes("cost") ||
      msg.includes("budget")
    ) {
      return "Pricing varies depending on project complexity, features and timeline 💡 You can reach out through the contact section for a custom quote and discussion.";
    }

    // Experience
    if (
      msg.includes("experience") ||
      msg.includes("internship") ||
      msg.includes("worked")
    ) {
      return "Kamal has experience building multiple React and frontend projects and has also participated in web development internships and technical learning programs.";
    }

    // Education
    if (
      msg.includes("study") ||
      msg.includes("college") ||
      msg.includes("education") ||
      msg.includes("bca")
    ) {
      return "Kamal is currently pursuing a BCA degree while continuously improving his skills in frontend engineering, MERN stack development and UI/UX design.";
    }

    // Contact
    if (
      msg.includes("contact") ||
      msg.includes("email") ||
      msg.includes("reach") ||
      msg.includes("connect")
    ) {
      return "You can connect with Kamal through the contact section of this portfolio or reach out via LinkedIn and GitHub for collaborations, internships or freelance opportunities 📩";
    }

    // GitHub
    if (msg.includes("github")) {
      return "You can explore Kamal's GitHub profile to see source code, development projects and ongoing learning experiments 💻";
    }

    // LinkedIn
    if (msg.includes("linkedin")) {
      return "LinkedIn is the best place to connect professionally with Kamal for networking, opportunities and collaborations 🤝";
    }

    // Availability
    if (
      msg.includes("available") ||
      msg.includes("open to work") ||
      msg.includes("opportunity")
    ) {
      return "Yes 👍 Kamal is currently open to internships, collaborations, freelance projects and exciting learning opportunities in web development.";
    }

    // UI / UX
    if (
      msg.includes("design") ||
      msg.includes("ui") ||
      msg.includes("ux") ||
      msg.includes("interface")
    ) {
      return "Kamal focuses strongly on modern UI/UX principles including responsive layouts, glassmorphism, smooth animations, accessibility and clean premium-looking interfaces ✨";
    }

    // APIs / Server
    if (
      msg.includes("api") ||
      msg.includes("server") ||
      msg.includes("database")
    ) {
      return "Kamal is also learning backend technologies like Express.js, REST APIs, MongoDB integration and authentication systems for full stack application development.";
    }

    // AI
    if (
      msg.includes("ai") ||
      msg.includes("assistant") ||
      msg.includes("chatbot")
    ) {
      return "This assistant itself is a custom-built AI-style portfolio chatbot created using React, Tailwind CSS and intelligent predefined response logic 🤖";
    }

    // Resume / CV
    if (msg.includes("resume") || msg.includes("cv")) {
      return "You can download Kamal's resume directly through the portfolio hero section.";
    }

    // Default
    return "Hmm 🤔 I don't have a response for that yet. You can send message through the contact section or Try asking about skills, projects, technologies, services, experience or contact details.";
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
        bg-gradient-to-br from-blue-500 to-cyan-500
        text-white
        transition-all duration-300
        hover:scale-110 active:scale-95
        ${
          !open
            ? "shadow-[0_0_25px_rgba(59,130,246,0.7)] animate-pulse"
            : "shadow-[0_0_15px_rgba(59,130,246,0.3)]"
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
                    ? "bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-br-sm"
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
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-bounce"></span>
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce delay-100"></span>
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-bounce delay-200"></span>
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
              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-500/20
              transition-all"
            />

            <button
              onClick={() => sendMessage()}
              className="w-11 h-11
              flex items-center justify-center
              rounded-2xl
              bg-gradient-to-br from-blue-500 to-cyan-500
              text-white
              shadow-[0_0_15px_rgba(59,130,246,0.35)]
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
