import { BookOpen, CheckSquare, FileCheck, Home, Menu, MessageSquare, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const navItems = [
  { id: 'home', icon: Home, label: 'Overview' },
  { id: 'projects', icon: BookOpen, label: 'Assignments' },
  { id: 'evidence', icon: FileCheck, label: 'Evidence' },
  { id: 'rubric', icon: CheckSquare, label: 'Rubric' },
  { id: 'summary', icon: MessageSquare, label: 'Reflection' },
];

export default function Sidebar({ activeTab, setActiveTab, isMobileOpen, setIsMobileOpen }) {
  const { student } = portfolioData;
  const selectTab = (id) => {
    setActiveTab(id);
    setIsMobileOpen(false);
  };

  return (
    <>
      <header className="portfolio-mobile-header sticky top-0 z-[60] flex h-16 items-center justify-between border-b border-border-light/60 bg-ivory/95 px-5 backdrop-blur md:hidden">
        <div>
          <p className="font-display text-base font-semibold">{student.name}</p>
          <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.16em] text-muted-dark">{student.major}</p>
        </div>
        <button type="button" aria-label={isMobileOpen ? 'Đóng menu' : 'Mở menu'} aria-expanded={isMobileOpen} onClick={() => setIsMobileOpen(!isMobileOpen)} className="icon-button-dark">
          {isMobileOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </header>

      <aside className={`portfolio-sidebar fixed inset-y-0 left-0 z-50 flex w-[min(280px,88vw)] flex-col bg-obsidian px-4 py-8 text-muted-light transition-transform duration-200 md:w-sidebar md:translate-x-0 ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="px-2">
          <p className="font-display text-4xl font-semibold text-peach">Portfolio</p>
          <p className="mt-2 text-[12px] font-bold uppercase tracking-[0.16em] text-muted-light/55">Academic Year {student.academicYear}</p>
          <div className="mt-16 border-l-2 border-peach/20 pl-4">
            <p className="font-display text-2xl font-semibold leading-tight text-peach">{student.name}</p>
            <p className="mt-2 text-sm font-bold text-muted-light/70">{student.major}</p>
            <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.12em] text-muted-light/40">{student.shortUniversity}</p>
          </div>
        </div>

        <nav className="flex-1 py-14" aria-label="Portfolio sections">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = item.id === activeTab;
            return (
              <button type="button" key={item.id} onClick={() => selectTab(item.id)} className={`group relative flex w-full items-center gap-4 rounded px-4 py-3.5 text-left text-[12px] font-bold uppercase tracking-[0.08em] transition-all active:scale-[0.98] ${isActive ? 'bg-peach/12 text-peach' : 'text-muted-light/72 hover:bg-peach/10 hover:text-peach'}`}>
                {isActive && <span className="absolute -right-4 top-1/2 h-8 w-1 -translate-y-1/2 rounded-l bg-peach" />}
                <Icon size={17} strokeWidth={1.7} />
                <span>{String(index + 1).padStart(2, '0')} {item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="border-t border-peach/10 px-2 pt-6">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.18em] text-muted-light/35">Editorial Academic Archive</p>
        </div>
      </aside>

      {isMobileOpen && <button type="button" aria-label="Đóng menu" className="portfolio-mobile-overlay fixed inset-0 z-40 bg-black/60 md:hidden" onClick={() => setIsMobileOpen(false)} />}
    </>
  );
}
