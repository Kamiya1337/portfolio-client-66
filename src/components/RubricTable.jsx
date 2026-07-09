import { Check, TriangleAlert } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const valid = (value) => Boolean(value && value !== 'Sẽ cập nhật sau' && value !== 'Không yêu cầu');

export default function RubricTable() {
  const { projects, rubric } = portfolioData;
  const totalMilestones = projects.length * 2;
  const completedMilestones = projects.reduce((count, project) => count + Number(valid(project.report)) + Number(valid(project.evidenceImg)), 0);
  const progressPercent = Math.round(50 + (completedMilestones / totalMilestones) * 50);
  const projectRows = projects.map((project) => {
    const reportDone = valid(project.report);
    const imageDone = valid(project.evidenceImg);
    return { id: project.id, title: `${project.title.split(':')[0]}: Minh chứng thực hiện`, standard: 'Đầy đủ file báo cáo chi tiết nội dung học tập và hình ảnh screenshot thực tế.', complete: reportDone && imageDone, action: reportDone && imageDone ? 'Đã đồng bộ' : `Cần bổ sung: ${!reportDone ? 'File báo cáo PDF' : ''}${!reportDone && !imageDone ? ' & ' : ''}${!imageDone ? 'Ảnh screenshot' : ''}` };
  });

  return (
    <div className="scrapbook-bg min-h-screen">
      <header className="page-intro"><p className="editorial-label">Quality Standards</p><h1 className="page-title">Assessment Matrix</h1><p className="page-copy">Tiêu chí và trạng thái được giữ nguyên từ dữ liệu Portfolio; điểm sẵn sàng được tính trực tiếp từ báo cáo và minh chứng hiện có.</p></header>
      <section className="px-5 pb-20 sm:px-8 xl:px-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="editorial-card flex flex-col gap-8 p-8 lg:flex-row lg:items-center lg:justify-between lg:p-12"><div><p className="editorial-label">Rubric Criteria</p><h2 className="mt-4 font-display text-4xl font-semibold text-primary">Academic evaluation ledger</h2><div className="mt-6 h-1 w-20 rounded-full bg-primary/25" /></div><div className="rounded-[1.5rem] border border-white/50 bg-white/45 p-8 text-center backdrop-blur-xl"><p className="editorial-label">Current Readiness</p><p className="mt-2 font-display text-6xl font-semibold text-primary">{progressPercent}%</p></div></div>
          <div className="mt-12 overflow-hidden rounded-lg border border-border-light bg-paper shadow-[0_4px_20px_rgba(53,42,56,0.05)]">
            <div className="hidden grid-cols-12 gap-6 border-b border-border-light bg-blush px-8 py-6 text-[12px] font-bold uppercase tracking-[0.12em] text-muted-dark lg:grid"><div className="col-span-4">Criterion Details</div><div className="col-span-3">Status Notes</div><div className="col-span-2 text-center">Progress</div><div className="col-span-3">Observations</div></div>
            {rubric.map((row, index) => <article key={row.criteria} className="group grid gap-5 border-b border-border-light/60 px-6 py-8 last:border-b-0 hover:bg-blush/70 lg:grid-cols-12 lg:items-center lg:gap-6 lg:px-8 lg:py-10"><div className="lg:col-span-4"><p className="text-[11px] font-bold uppercase tracking-[0.18em] text-rose">Criterion {String(index + 1).padStart(2, '0')}</p><h3 className="mt-3 font-display text-2xl font-semibold leading-tight group-hover:text-rose">{row.criteria}</h3></div><p className="text-sm leading-7 text-muted-dark lg:col-span-3">{row.excellent}</p><div className="lg:col-span-2 lg:text-center"><span className="ledger-status bg-peach/35 text-rose">{row.status}</span></div><p className="text-sm italic leading-7 text-muted-dark lg:col-span-3">{row.action}</p></article>)}
          </div>
        </div>
      </section>
      <section className="bg-blush px-6 py-20 sm:px-8 xl:px-16">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[1fr_320px] lg:items-center"><div><p className="editorial-label">Portfolio Readiness</p><h2 className="mt-4 font-display text-4xl font-semibold">Tiến độ minh chứng thực tế</h2><p className="mt-6 max-w-2xl text-base leading-8 text-muted-dark">Đã tích hợp <strong className="text-charcoal">{completedMilestones}/{totalMilestones}</strong> mục báo cáo và hình ảnh. Điểm số phản ánh đúng dữ liệu hiện có và không sử dụng điểm giả từ bản thiết kế tham chiếu.</p></div><div className="rounded-lg border border-border-light bg-mint p-10 text-charcoal"><p className="font-display text-7xl font-semibold text-rose">{progressPercent}%</p><p className="editorial-label mt-3">Calculated Score</p><div className="mt-8 border-t border-border-light pt-6 text-sm text-muted-dark">Dynamic portfolio readiness</div></div></div>
      </section>
      <section className="px-5 py-20 sm:px-8 xl:px-16"><div className="mx-auto max-w-[1200px]"><p className="editorial-label">Evidence Completion</p><div className="mt-8 grid gap-5 md:grid-cols-2">{projectRows.map((row) => <article key={row.id} className="editorial-card p-7 transition-all hover:-translate-y-1 hover:border-rose"><div className="flex items-start justify-between gap-4"><h3 className="font-display text-lg font-semibold">{row.title}</h3>{row.complete ? <Check size={18} className="text-rose" /> : <TriangleAlert size={18} className="text-rose" />}</div><p className="mt-4 text-sm leading-7 text-muted-dark">{row.standard}</p><p className={`mt-5 text-xs font-bold uppercase tracking-wider ${row.complete ? 'text-muted-dark' : 'text-charcoal'}`}>{row.action}</p></article>)}</div></div></section>
    </div>
  );
}
