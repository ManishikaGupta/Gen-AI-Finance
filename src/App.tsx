import React, { useState, useEffect } from "react";
import {
  Database,
  MessageSquare,
  BookOpen,
  ArrowRight,
  Sun,
  Moon,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  isDark: boolean;
  gradient: string;
  delay: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  href,
  isDark,
  gradient,
  delay,
}) => {
  return (
    <div
      className={`animate-fade-in-up ${delay}`}
      style={{ animationFillMode: "both" }}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative block p-8 rounded-2xl border transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
          isDark
            ? "bg-gray-900/50 border-gray-700/50 hover:border-gray-600 backdrop-blur-xl"
            : "bg-white/80 border-gray-200/50 hover:border-gray-300 backdrop-blur-xl"
        } shadow-xl hover:shadow-2xl overflow-hidden`}
      >
        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${gradient}`}
        />

        {/* Animated border glow */}
        <div
          className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${gradient} blur-xl -z-10`}
        />

        <div className="relative z-10">
          <div
            className={`mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            {icon}
          </div>

          <h3
            className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              isDark
                ? "text-white group-hover:text-blue-300"
                : "text-gray-900 group-hover:text-blue-600"
            }`}
          >
            {title}
          </h3>

          <p
            className={`mb-6 leading-relaxed text-lg ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {description}
          </p>

          <div
            className={`flex items-center text-lg font-semibold transition-all duration-300 ${
              isDark
                ? "text-blue-400 group-hover:text-blue-300"
                : "text-blue-600 group-hover:text-blue-700"
            }`}
          >
            <span>Launch App</span>
            <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
          </div>
        </div>
      </a>
    </div>
  );
};

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const apps = [
    {
      title: "NoSQL Database",
      description:
        "Powerful database management with real-time analytics and intuitive query building for modern applications.",
      icon: <Database className="h-12 w-12" />,
      href: "https://chatsql-ad95b8wfqbp6krcvmndw7i.streamlit.app/",
      gradient: "bg-gradient-to-br from-rose-200 to-pink-300",
      delay: "animation-delay-100",
    },
    {
      title: "Goals Chatbot",
      description:
        "AI-powered personal assistant that helps you set, track, and achieve your most ambitious goals.",
      icon: <MessageSquare className="h-12 w-12" />,
      href: "https://llmgoalchat-nlyztnauvubv4xmghfrorx.streamlit.app/",
      gradient: "bg-gradient-to-br from-blue-200 to-indigo-300",
      delay: "animation-delay-200",
    },
    {
      title: "Expense Story",
      description:
        "Transform your spending data into beautiful visual stories with intelligent insights and predictions.",
      icon: <BookOpen className="h-12 w-12" />,
      href: "https://financialstory-xkp82gqk8aeheris95hdn4.streamlit.app/",
      gradient: "bg-gradient-to-br from-purple-200 to-violet-300",
      delay: "animation-delay-300",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-all duration-700 relative overflow-hidden ${
        isDark
          ? "bg-gradient-to-br from-slate-900 via-purple-900 to-rose-900"
          : "bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50"
      }`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-20 left-20 w-72 h-72 rounded-full opacity-20 animate-pulse ${
            isDark ? "bg-rose-500" : "bg-rose-200"
          } blur-3xl`}
        />
        <div
          className={`absolute bottom-20 right-20 w-96 h-96 rounded-full opacity-20 animate-pulse animation-delay-1000 ${
            isDark ? "bg-purple-500" : "bg-orange-200"
          } blur-3xl`}
        />
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-10 animate-spin-slow ${
            isDark ? "bg-amber-500" : "bg-amber-200"
          } blur-3xl`}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute animate-float ${
              isDark ? "text-white/10" : "text-gray-400/20"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            {i % 3 === 0 && <Sparkles className="h-6 w-6" />}
            {i % 3 === 1 && <TrendingUp className="h-5 w-5" />}
            {i % 3 === 2 && <Zap className="h-4 w-4" />}
          </div>
        ))}
      </div>

      {/* Theme toggle */}
      <button
        onClick={toggleTheme}
        className={`fixed top-8 right-8 p-4 rounded-full transition-all duration-300 hover:scale-110 z-50 ${
          isDark
            ? "bg-white/10 text-white hover:bg-white/20 backdrop-blur-xl"
            : "bg-black/10 text-gray-800 hover:bg-black/20 backdrop-blur-xl"
        } shadow-xl border border-white/20`}
        aria-label="Toggle theme"
      >
        <div className="transition-transform duration-500 hover:rotate-180">
          {isDark ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
        </div>
      </button>

      {/* Header */}
      <header className="relative z-10 pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <div className="animate-fade-in-up">
            <h1
              className={`text-6xl md:text-7xl font-black mb-8 leading-tight ${
                isDark
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-200 to-amber-200"
                  : "text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-orange-500 to-amber-600"
              }`}
            >
              Financial App Suite
            </h1>
          </div>

          <div
            className="animate-fade-in-up animation-delay-200"
            style={{ animationFillMode: "both" }}
          >
            <p
              className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${
                isDark ? "text-rose-100" : "text-rose-700"
              }`}
            >
              Three powerful tools to revolutionize how you manage data, achieve
              goals, and track finances.
            </p>
          </div>

          <div
            className="animate-fade-in-up animation-delay-400 mt-12"
            style={{ animationFillMode: "both" }}
          >
            <div
              className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-medium ${
                isDark
                  ? "bg-rose-500/20 text-rose-100 border border-rose-300/30 backdrop-blur-xl"
                  : "bg-rose-100/80 text-rose-800 border border-rose-200/50 backdrop-blur-xl"
              }`}
            >
              <Sparkles className="h-4 w-4 mr-2" />
              Built for the modern financial professional
            </div>
          </div>
        </div>
      </header>

      {/* Apps grid */}
      <main className="relative z-10 pb-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apps.map((app, index) => (
              <FeatureCard
                key={index}
                title={app.title}
                description={app.description}
                icon={app.icon}
                href={app.href}
                isDark={isDark}
                gradient={app.gradient}
                delay={app.delay}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className={`relative z-10 border-t py-12 ${
          isDark
            ? "border-rose-300/20 backdrop-blur-xl"
            : "border-rose-200/30 backdrop-blur-xl"
        }`}
      >
        <div className="max-w-6xl mx-auto px-8 text-center">
          <p
            className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            © 2025 Financial App Suite. Empowering financial decisions through
            technology.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}

export default App;
