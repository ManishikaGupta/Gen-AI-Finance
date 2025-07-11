import React, { useState, useEffect } from 'react';
import { Database, TrendingUp, MessageSquare, Image, ArrowRight, Sparkles, Sun, Moon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  gradient: string;
  hoverGradient: string;
  isDark: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon, 
  href, 
  gradient, 
  hoverGradient,
  isDark
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${gradient} ${hoverGradient} backdrop-blur-sm border ${isDark ? 'border-white/10' : 'border-black/10'}`}
    >
      <div className="relative z-10">
        <div className={`mb-6 inline-flex items-center justify-center rounded-2xl p-4 transition-all duration-300 group-hover:scale-110 ${isDark ? 'bg-white/10' : 'bg-white/20'} backdrop-blur-md`}>
          {icon}
        </div>
        <h3 className="mb-4 text-2xl font-bold text-white leading-tight">{title}</h3>
        <p className="mb-6 text-white/90 leading-relaxed text-base">{description}</p>
        <div className="flex items-center text-white/80 group-hover:text-white transition-all duration-300">
          <span className="text-sm font-semibold tracking-wide">Launch App</span>
          <ArrowRight className="ml-3 h-5 w-5 transition-all duration-300 group-hover:translate-x-2" />
        </div>
      </div>
      
      {/* Enhanced decorative elements */}
      <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-white/5 transition-all duration-500 group-hover:scale-150 group-hover:rotate-45" />
      <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/5 transition-all duration-500 group-hover:scale-125 group-hover:-rotate-12" />
      <div className="absolute top-1/2 right-1/4 h-16 w-16 rounded-full bg-white/3 transition-all duration-700 group-hover:scale-200" />
      
      {/* Enhanced hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />
      
      {/* Subtle border glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 blur-sm" />
    </a>
  );
};

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const features = [
    {
      title: "Database Manager",
      description:
        "Intuitive interface to interact with your database. Run queries, view data, and manage your database with ease through a user-friendly GUI.",
      icon: <Database className="h-10 w-10 text-white drop-shadow-lg" />,
      href: "https://chatsql-ad95b8wfqbp6krcvmndw7i.streamlit.app/",
      gradient: isDark
        ? "bg-gradient-to-br from-blue-600/90 to-purple-700/90"
        : "bg-gradient-to-br from-blue-500/95 to-purple-600/95",
      hoverGradient: isDark
        ? "hover:from-blue-500/95 hover:to-purple-600/95"
        : "hover:from-blue-400/98 hover:to-purple-500/98",
    },
    {
      title: "AI Financial Dashboard",
      description:
        "Upload your financial data and let AI generate comprehensive dashboards with insights, charts, and intelligent summaries of your financial health.",
      icon: <TrendingUp className="h-10 w-10 text-white drop-shadow-lg" />,
      href: "https://your-dashboard-app.com",
      gradient: isDark
        ? "bg-gradient-to-br from-emerald-600/90 to-teal-700/90"
        : "bg-gradient-to-br from-emerald-500/95 to-teal-600/95",
      hoverGradient: isDark
        ? "hover:from-emerald-500/95 hover:to-teal-600/95"
        : "hover:from-emerald-400/98 hover:to-teal-500/98",
    },
    {
      title: "Goal Chatbot",
      description:
        "Your personal AI assistant for setting, tracking, and achieving goals. Get motivated with intelligent suggestions and progress tracking.",
      icon: <MessageSquare className="h-10 w-10 text-white drop-shadow-lg" />,
      href: "https://your-chatbot-app.com",
      gradient: isDark
        ? "bg-gradient-to-br from-orange-600/90 to-red-700/90"
        : "bg-gradient-to-br from-orange-500/95 to-red-600/95",
      hoverGradient: isDark
        ? "hover:from-orange-500/95 hover:to-red-600/95"
        : "hover:from-orange-400/98 hover:to-red-500/98",
    },
    {
      title: "Meme Generator",
      description:
        "Create hilarious memes with ease. Upload images or use templates, add custom text, and share your creations with the world.",
      icon: <Image className="h-10 w-10 text-white drop-shadow-lg" />,
      href: "https://your-meme-app.com",
      gradient: isDark
        ? "bg-gradient-to-br from-pink-600/90 to-rose-700/90"
        : "bg-gradient-to-br from-pink-500/95 to-rose-600/95",
      hoverGradient: isDark
        ? "hover:from-pink-500/95 hover:to-rose-600/95"
        : "hover:from-pink-400/98 hover:to-rose-500/98",
    },
  ];

  return (
    <div className={`min-h-screen transition-all duration-700 ${
      isDark 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
        : 'bg-gradient-to-br from-slate-50 via-white to-slate-100'
    }`}>
      {/* Enhanced background decoration */}
      <div className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
        isDark 
          ? 'bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.15),transparent),radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1),transparent)]' 
          : 'bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent),radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.08),transparent)]'
      }`} />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full transition-all duration-1000 ${
              isDark ? 'bg-white/5' : 'bg-slate-400/10'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Theme toggle button */}
      <button
        onClick={toggleTheme}
        className={`fixed top-6 right-6 z-50 p-4 rounded-2xl transition-all duration-300 hover:scale-110 backdrop-blur-md border ${
          isDark 
            ? 'bg-white/10 border-white/20 text-white hover:bg-white/20' 
            : 'bg-black/10 border-black/20 text-slate-800 hover:bg-black/20'
        }`}
        aria-label="Toggle theme"
      >
        <div className="relative w-6 h-6">
          <Sun className={`absolute inset-0 transition-all duration-300 ${isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`} />
          <Moon className={`absolute inset-0 transition-all duration-300 ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`} />
        </div>
      </button>
      
      {/* Header */}
      <header className="relative z-10 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center">
            <div className={`inline-flex items-center justify-center rounded-3xl p-4 mb-8 transition-all duration-500 backdrop-blur-md ${
              isDark 
                ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10' 
                : 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-black/10'
            }`}>
              <Sparkles className={`h-10 w-10 transition-colors duration-300 ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              }`} />
            </div>
            <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Your AI-Powered
              <span className={`block bg-gradient-to-r bg-clip-text text-transparent transition-all duration-300 ${
                isDark 
                  ? 'from-blue-400 via-purple-400 to-pink-400' 
                  : 'from-blue-600 via-purple-600 to-pink-600'
              }`}>
                Web Toolkit
              </span>
            </h1>
            <p className={`text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed transition-colors duration-300 ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Discover four powerful tools designed to enhance your productivity, creativity, and data management. 
              Each application is crafted with modern AI capabilities to streamline your workflow.
            </p>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                href={feature.href}
                gradient={feature.gradient}
                hoverGradient={feature.hoverGradient}
                isDark={isDark}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Enhanced Footer */}
      <footer className={`relative z-10 border-t transition-colors duration-300 ${
        isDark ? 'border-slate-800' : 'border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
          <div className="text-center">
            <div className={`inline-flex items-center justify-center rounded-2xl p-3 mb-4 transition-all duration-300 ${
              isDark ? 'bg-white/5' : 'bg-black/5'
            }`}>
              <Sparkles className={`h-6 w-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`} />
            </div>
            <p className={`text-lg transition-colors duration-300 ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              &copy; 2025 AI Web Toolkit. Built with modern web technologies and love.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;