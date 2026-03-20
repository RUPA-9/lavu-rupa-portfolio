import React from 'react';
import { Sparkles, Code2, BrainCircuit, Github, Linkedin, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Lavu Rupa
        </h1>
        <p className="mt-4 text-2xl text-slate-400">AI/ML & Software Engineering Student</p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="#" className="p-2 hover:text-blue-400 transition"><Github size={28} /></a>
          <a href="#" className="p-2 hover:text-blue-400 transition"><Linkedin size={28} /></a>
          <a href="#" className="p-2 hover:text-blue-400 transition"><Mail size={28} /></a>
        </div>
      </header>

      {/* Projects/Skills Section */}
      <main className="container mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-blue-500 transition">
            <BrainCircuit className="mb-4 text-blue-400" size={40} />
            <h2 className="text-2xl font-bold mb-2">AI/ML Development</h2>
            <p className="text-slate-400">Building intelligent applications using Google Gemini and advanced machine learning models.</p>
          </div>
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-purple-500 transition">
            <Code2 className="mb-4 text-purple-400" size={40} />
            <h2 className="text-2xl font-bold mb-2">Software Engineering</h2>
            <p className="text-slate-400">Creating scalable web applications with React, TypeScript, and modern backend technologies.</p>
          </div>
        </div>
      </main>

      <footer className="text-center py-10 text-slate-500 border-t border-slate-900">
        © 2024 Lavu Rupa Portfolio • Built with Google AI Studio
      </footer>
    </div>
  );
}

export default App;