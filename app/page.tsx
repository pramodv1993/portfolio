import { portfolioData, publications, unifiedTimeline } from "../data/experience";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto py-20 px-6 font-sans text-white bg-black">
      
      {/* HERO SECTION */}
      <section className="mb-24">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-6xl font-extrabold mb-2 tracking-tight">{portfolioData.name}</h1>
            <h2 className="text-2xl text-blue-400 font-medium tracking-wide">{portfolioData.role}</h2>
          </div>
          <div className="p-3 bg-gray-900/50 rounded-lg border border-gray-800 text-[10px] font-mono text-green-400 uppercase tracking-widest">
            <span className="animate-pulse mr-2">●</span> Agent_Active
          </div>
        </div>
        <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
          {portfolioData.summary}
        </p>
      </section>

      {/* MINIMALIST JOURNEY */}
<section className="mb-24 px-4">
  <h3 className="text-xs uppercase tracking-[0.3em] text-gray-500 font-bold mb-12">Journey</h3>
  <div className="space-y-16">
    {unifiedTimeline.map((item, index) => (
      <div key={index} className="group">
        <div className="flex flex-col md:flex-row md:gap-12">
          {/* Side Info */}
          <div className="md:w-32 mb-2 md:mb-0 shrink-0">
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-none">
              {item.period}
            </span>
          </div>
          
          {/* Main Content */}
          <div className="flex-1 border-b border-gray-900 pb-12 group-last:border-none">
            <div className="flex flex-col mb-4">
              <h4 className="text-xl font-bold text-white tracking-tight">{item.role}</h4>
              <span className={`text-sm font-medium ${item.type === 'edu' ? 'text-purple-400/80' : 'text-blue-400/80'}`}>
                {item.company}
              </span>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-2xl">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {item.tech.map((t) => (
                <span key={t} className="text-[9px] font-mono text-gray-600 uppercase tracking-widest">
                  // {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

{/* CALL TO ACTION: AI JOB FIT */}
<section className="mb-24 px-4 pt-20 border-t border-gray-900">
  <div className="max-w-2xl">
    <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">Is there a fit?</h3>
    <p className="text-gray-400 mb-8 leading-relaxed"> 
      Paste a job description below to see how my background aligns with your requirements
    </p>
    
    <div className="space-y-4">
      <textarea 
        className="w-full bg-gray-900/30 border border-gray-800 rounded-lg p-4 text-sm text-gray-300 focus:outline-none focus:border-blue-500/50 transition-colors placeholder:text-gray-700"
        rows={4}
        placeholder="Paste job description here..."
      />
      <button className="px-8 py-3 bg-white text-black text-xs font-bold uppercase tracking-widest rounded hover:bg-blue-400 transition-colors">
        Analyze Match
      </button>
    </div>
  </div>
</section>

    </main>
  );
}