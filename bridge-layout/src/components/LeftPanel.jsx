import { useState } from 'react';

/* ── Mock environmental data per city ── */
const CITY_DATA = {
  Mumbai:    { windSpeed: '44 m/s',  seismicZone: 'Zone III',  temperature: '34°C' },
  Delhi:     { windSpeed: '47 m/s',  seismicZone: 'Zone IV',   temperature: '45°C' },
  Chennai:   { windSpeed: '50 m/s',  seismicZone: 'Zone II',   temperature: '38°C' },
  Bangalore: { windSpeed: '33 m/s',  seismicZone: 'Zone II',   temperature: '32°C' },
  Kolkata:   { windSpeed: '50 m/s',  seismicZone: 'Zone III',  temperature: '40°C' },
};

/* ── Reusable class strings ── */
const selectBase =
  'w-full px-3 py-2 bg-gray-50 dark:bg-[#121419] border border-gray-200 dark:border-dark-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all text-gray-900 dark:text-gray-100';
const selectDisabled =
  'w-full px-3 py-2 bg-gray-100 dark:bg-[#0d0f13] border border-gray-200 dark:border-dark-border rounded-lg text-sm text-gray-400 dark:text-gray-600 cursor-not-allowed opacity-60';
const labelBase = 'text-sm font-medium text-gray-700 dark:text-gray-300';
const labelDisabled = 'text-sm font-medium text-gray-400 dark:text-gray-600';

const LeftPanel = () => {
  const [activeTab, setActiveTab] = useState('basic');

  /* ── Controlled form state ── */
  const [structureType, setStructureType] = useState('Highway');
  const [city, setCity] = useState('');
  const [girder, setGirder] = useState('E250');
  const [crossBracing, setCrossBracing] = useState('E250');
  const [deck, setDeck] = useState('M25');

  const isOther = structureType === 'Other';
  const cityInfo = CITY_DATA[city] || null;

  return (
    <div className="w-[35%] h-full bg-white dark:bg-dark-panel border-r border-gray-200 dark:border-dark-border flex flex-col shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-10">
      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-200 dark:border-dark-border bg-gradient-to-r from-gray-50 to-white dark:from-dark-panel dark:to-[#1e222a]">
        <h1 className="text-xl font-heading font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
          <span className="w-2 h-6 bg-brand-500 rounded-sm inline-block"></span>
          Bridge Parameters
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Configure structural inputs</p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 dark:border-dark-border px-4 mt-2">
        <button
          onClick={() => setActiveTab('basic')}
          className={`px-4 py-3 text-sm font-medium transition-all relative ${
            activeTab === 'basic'
              ? 'text-brand-600 dark:text-brand-400'
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
          }`}
        >
          Basic Inputs
          {activeTab === 'basic' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-500 rounded-t-full shadow-[0_-2px_8px_rgba(139,92,246,0.5)]"></div>
          )}
        </button>
        <button
          onClick={() => setActiveTab('additional')}
          className={`px-4 py-3 text-sm font-medium transition-all relative ${
            activeTab === 'additional'
              ? 'text-brand-600 dark:text-brand-400'
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
          }`}
        >
          Additional Inputs
          {activeTab === 'additional' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-500 rounded-t-full shadow-[0_-2px_8px_rgba(139,92,246,0.5)]"></div>
          )}
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-6">
        {activeTab === 'basic' ? (
          <div className="space-y-6">

            {/* ─────────── Type of Structure ─────────── */}
            <fieldset className="space-y-1.5">
              <label className={labelBase}>Type of Structure</label>
              <select
                value={structureType}
                onChange={(e) => setStructureType(e.target.value)}
                className={selectBase}
              >
                <option value="Highway">Highway</option>
                <option value="Other">Other</option>
              </select>

              {isOther && (
                <p className="mt-2 flex items-center gap-1.5 text-sm font-medium text-red-500 dark:text-red-400 animate-[fadeIn_0.25s_ease-out]">
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Other structures not included
                </p>
              )}
            </fieldset>

            {/* ─────────── Project Location ─────────── */}
            <fieldset className="space-y-1.5">
              <label className={isOther ? labelDisabled : labelBase}>Project Location</label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                disabled={isOther}
                className={isOther ? selectDisabled : selectBase}
              >
                <option value="">— Select City —</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Chennai">Chennai</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Kolkata">Kolkata</option>
              </select>

              {/* Conditional environmental info */}
              {!isOther && cityInfo && (
                <div className="mt-3 p-3 rounded-lg bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 space-y-1 animate-[fadeIn_0.25s_ease-out]">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    <span className="text-xs font-semibold tracking-wider uppercase text-emerald-600 dark:text-emerald-400">Environmental Data — {city}</span>
                  </div>
                  <p className="text-sm text-emerald-700 dark:text-emerald-300 flex justify-between">
                    <span className="font-medium">Basic Wind Speed</span>
                    <span className="font-mono">{cityInfo.windSpeed}</span>
                  </p>
                  <p className="text-sm text-emerald-700 dark:text-emerald-300 flex justify-between">
                    <span className="font-medium">Seismic Zone</span>
                    <span className="font-mono">{cityInfo.seismicZone}</span>
                  </p>
                  <p className="text-sm text-emerald-700 dark:text-emerald-300 flex justify-between">
                    <span className="font-medium">Temperature</span>
                    <span className="font-mono">{cityInfo.temperature}</span>
                  </p>
                </div>
              )}
            </fieldset>

            {/* ─────────── Material Inputs ─────────── */}
            <fieldset className="space-y-4">
              <legend className={`text-sm font-semibold tracking-wide uppercase ${isOther ? 'text-gray-400 dark:text-gray-600' : 'text-gray-800 dark:text-gray-200'}`}>
                Material Inputs
              </legend>

              <div className="space-y-1.5">
                <label className={isOther ? labelDisabled : labelBase}>Girder</label>
                <select
                  value={girder}
                  onChange={(e) => setGirder(e.target.value)}
                  disabled={isOther}
                  className={isOther ? selectDisabled : selectBase}
                >
                  <option value="E250">E250</option>
                  <option value="E350">E350</option>
                  <option value="E450">E450</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className={isOther ? labelDisabled : labelBase}>Cross Bracing</label>
                <select
                  value={crossBracing}
                  onChange={(e) => setCrossBracing(e.target.value)}
                  disabled={isOther}
                  className={isOther ? selectDisabled : selectBase}
                >
                  <option value="E250">E250</option>
                  <option value="E350">E350</option>
                  <option value="E450">E450</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className={isOther ? labelDisabled : labelBase}>Deck</label>
                <select
                  value={deck}
                  onChange={(e) => setDeck(e.target.value)}
                  disabled={isOther}
                  className={isOther ? selectDisabled : selectBase}
                >
                  <option value="M25">M25</option>
                  <option value="M30">M30</option>
                  <option value="M35">M35</option>
                  <option value="M40">M40</option>
                  <option value="M45">M45</option>
                  <option value="M50">M50</option>
                  <option value="M55">M55</option>
                  <option value="M60">M60</option>
                </select>
              </div>
            </fieldset>

            {/* ─────────── Submit ─────────── */}
            <div className="pt-4 mt-2 border-t border-gray-100 dark:border-dark-border/50 flex justify-end">
              <button
                disabled={isOther}
                className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 w-full sm:w-auto ${
                  isOther
                    ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-500 cursor-not-allowed'
                    : 'bg-brand-600 hover:bg-brand-500 text-white shadow-[0_4px_14px_0_rgba(139,92,246,0.39)] hover:shadow-[0_6px_20px_rgba(139,92,246,0.23)] hover:-translate-y-0.5'
                }`}
              >
                Analyze Structure
              </button>
            </div>
          </div>
        ) : (
          /* ─────────── Additional Inputs (placeholder) ─────────── */
          <div className="flex flex-col items-center justify-center h-48 text-center border-2 border-dashed border-gray-200 dark:border-dark-border rounded-xl bg-gray-50/50 dark:bg-[#121419]/50">
            <div className="w-10 h-10 bg-brand-50 dark:bg-brand-900/20 rounded-full flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">Additional Inputs</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Ready for advanced configuration parameters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeftPanel;
