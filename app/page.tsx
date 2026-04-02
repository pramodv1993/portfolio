"use client";

import { useState } from "react";
import { portfolioData, publications, unifiedTimeline } from "../data/experience";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="max-w-4xl mx-auto py-24 px-8 font-sans text-white bg-black">
      
      {/* TOP NAVIGATION & LINKS */}
      <nav className="flex justify-between items-center mb-16 text-[11px] font-mono uppercase tracking-[0.3em] text-gray-500">
        <div className="flex gap-8">
          <a href="https://www.linkedin.com/in/pramod-vadiraja/" target="_blank" className="hover:text-blue-400 transition-colors">LinkedIn</a>
          <a href="https://pramodv1993.medium.com/" target="_blank" className="hover:text-blue-400 transition-colors">Blog</a>
        </div>
        <div className="p-2 bg-gray-900/50 rounded border border-gray-800 text-green-400">
          <span className="animate-pulse mr-2">●</span> System_Live
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="mb-32">
        <h1 className="text-7xl font-extrabold mb-4 tracking-tighter">{portfolioData.name}</h1>
        <h2 className="text-3xl text-blue-400 font-medium tracking-tight mb-8">{portfolioData.role}</h2>
        <p className="text-xl text-gray-400 leading-relaxed italic max-w-2xl">
          {portfolioData.summary}
        </p>
      </section>

      {/* JOURNEY SECTION */}
      <section className="mb-32">
        <div className="flex justify-between items-end mb-16">
          <h3 className="text-xs uppercase tracking-[0.4em] text-gray-600 font-bold">Journey</h3>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="text-[10px] uppercase tracking-widest text-blue-400 hover:text-white transition-colors border-b border-blue-400/30 pb-1"
          >
            View Research & Publications ({publications.length})
          </button>
        </div>

        <div className="space-y-24">
          {unifiedTimeline.map((item, index) => (
            <div key={index} className="group flex flex-col md:flex-row md:gap-16">
              <div className="md:w-40 mb-3 md:mb-0 shrink-0">
                <span className="text-sm font-mono text-gray-500 uppercase tracking-widest">{item.period}</span>
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-white mb-1">{item.role}</h4>
                <div className={`text-lg font-medium mb-4 ${item.type === 'edu' ? 'text-purple-400' : 'text-blue-400'}`}>
                  {item.company}
                </div>
                <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl">{item.description}</p>
                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  {item.tech.map((t) => (
                    <span key={t} className="text-xs font-mono text-gray-600 uppercase tracking-[0.15em]">// {t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RESEARCH MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm">
          <div className="bg-gray-900 border border-gray-800 w-full max-w-2xl rounded-2xl p-10 relative max-h-[80vh] overflow-y-auto">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-gray-500 hover:text-white font-mono"
            >
              [X]
            </button>
            
            <h3 className="text-xs uppercase tracking-[0.4em] text-gray-500 font-bold mb-10">Published Research</h3>
            
            <div className="space-y-12">
              {publications.map((pub, index) => (
                <div key={index} className="border-b border-gray-800 pb-8 last:border-none">
                  <h4 className="text-xl font-bold text-white mb-2">{pub.title}</h4>
                  <p className="text-sm text-gray-500 mb-4">{pub.publisher} — {pub.year}</p>
                  <a 
                    href={pub.link} 
                    target="_blank" 
                    className="text-xs font-mono text-blue-400 uppercase tracking-widest hover:text-white transition-colors"
                  >
                    Read Paper ↗
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* JOB FIT ANALYZER (CTA) */}
      <section className="mb-32 py-20 px-10 bg-gray-900/20 border border-gray-900 rounded-3xl">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-white mb-6 tracking-tight">Collaboration Scorer</h3>
          <p className="text-gray-400 text-lg mb-10">Paste your requirements to see how I can accelerate your roadmap.</p>
          <div className="space-y-6">
            <textarea 
              className="w-full bg-black border border-gray-800 rounded-xl p-6 text-base text-gray-300 focus:outline-none focus:border-blue-500 transition-all resize-none"
              rows={5}
              placeholder="Paste Job Description..."
            />
            <button className="px-12 py-4 bg-white text-black text-sm font-bold uppercase tracking-[0.2em] rounded-full hover:bg-blue-400 transition-all">
              Analyze Alignment
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}