import { useEffect, useState } from 'react';
import HomeTab from './components/HomeTab';
import ProjectsTab from './components/ProjectsTab';
import EvidenceTable from './components/EvidenceTable';
import RubricTable from './components/RubricTable';
import Summary from './components/Summary';
import { portfolioData } from './data/portfolioData';
import useScrollReveal from './hooks/useScrollReveal';

const tabTitles = {
  home: 'Overview / Tổng quan',
  projects: 'Assignments / Bài tập',
  evidence: 'Evidence / Minh chứng',
  rubric: 'Rubric / Tiêu chí',
  summary: 'Reflection / Tổng kết',
};

const navItems = [
  ['home', 'Overview'],
  ['projects', 'Assignments'],
  ['evidence', 'Evidence'],
  ['rubric', 'Rubric'],
  ['summary', 'Reflection'],
];

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  useScrollReveal(activeTab);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <HomeTab setActiveTab={setActiveTab} />;
      case 'projects': return <ProjectsTab />;
      case 'evidence': return <EvidenceTable />;
      case 'rubric': return <RubricTable />;
      case 'summary': return <Summary />;
      default: return <HomeTab setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="portfolio-app luminous-bg min-h-screen text-charcoal">
      <header className="portfolio-topbar sticky top-0 z-40 border-b border-white/40 bg-white/45 px-4 py-3 shadow-[0_18px_60px_rgba(69,54,115,0.08)] backdrop-blur-2xl sm:px-8 xl:px-16">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <button type="button" onClick={() => setActiveTab('home')} className="text-left">
            <p className="font-display text-3xl font-black tracking-tight text-primary lg:text-4xl">Portfolio</p>
            <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.22em] text-muted-dark">{tabTitles[activeTab]}</p>
          </button>

          <nav className="flex gap-2 overflow-x-auto pb-1 text-sm font-bold text-muted-dark" aria-label="Portfolio sections">
            {navItems.map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => setActiveTab(id)}
                className={`whitespace-nowrap rounded-full px-4 py-2 transition-all ${activeTab === id ? 'bg-primary text-white shadow-[0_12px_28px_rgba(69,54,115,0.18)]' : 'hover:bg-white/55 hover:text-primary'}`}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 rounded-full border border-white/50 bg-white/45 px-4 py-2 text-xs font-bold text-primary shadow-sm xl:flex">
            <span>Academic Year</span>
            <span>{portfolioData.student.academicYear}</span>
          </div>
        </div>
      </header>

      <main className="flex-1">{renderContent()}</main>

      <footer className="site-footer border-t border-white/40 bg-white/45 px-6 py-7 backdrop-blur-xl sm:px-8 xl:px-16">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="editorial-label">Luminous Academic Portfolio</p>
            <p className="mt-1 text-sm text-muted-dark">{portfolioData.student.name} · {portfolioData.student.shortUniversity}</p>
          </div>
          <p className="text-xs text-muted-dark">Academic Year {portfolioData.student.academicYear}</p>
        </div>
      </footer>
    </div>
  );
}
