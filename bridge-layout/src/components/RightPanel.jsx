const RightPanel = () => {
  return (
    <div className="flex-1 h-full bg-[#0a0a0c] relative overflow-hidden flex flex-col pt-3">
      <div className="absolute top-0 right-0 p-6 z-20 flex gap-3">
        <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg text-white text-sm font-medium transition-colors border border-white/10 shadow-[0_4px_16px_rgba(0,0,0,0.4)]">
          Export CAD
        </button>
        <button className="bg-brand-600/90 hover:bg-brand-500 backdrop-blur-md px-4 py-2 rounded-lg text-white text-sm font-medium transition-colors shadow-[0_4px_16px_rgba(139,92,246,0.3)]">
          Generate Report
        </button>
      </div>

      <div className="flex-1 w-full h-full p-8 flex items-center justify-center">
        <div className="relative w-full h-full max-w-5xl max-h-[85vh] rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm shadow-2xl overflow-hidden group">
          {/* Faint grid overlay for technical feel */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none mix-blend-overlay"></div>
          
          <img 
            src="/bridge-cross-section.png" 
            alt="Bridge Cross Section Reference" 
            className="w-full h-full object-contain p-4 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
          />
          
          {/* Overlay text */}
          <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-lg border border-white/10">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-gray-300 font-mono text-xs tracking-wider uppercase">Live Cross-Section View</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
