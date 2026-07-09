import { ArrowRight, ExternalLink, FileText, Image as ImageIcon } from 'lucide-react';

const isAvailable = (value) => Boolean(value && value !== 'Sẽ cập nhật sau' && value !== 'Không yêu cầu');

export default function AssignmentCard({ project, onSelect }) {
  return (
    <article className="reveal hover-lift group flex min-h-[560px] flex-col rounded-lg border border-border-light bg-mint p-6 shadow-[0_4px_20px_rgba(53,42,56,0.05)]">
      <div className="mb-6 flex items-start justify-between gap-4">
        <span className="dark-label-box">Assignment {String(project.id).padStart(2, '0')}</span>
        <span className="text-right text-[11px] font-bold italic text-muted-dark/70">{project.status}</span>
      </div>
      <div className="mb-8 overflow-hidden rounded border border-border-light bg-paper shadow-sm">
        <div className="flex items-center gap-2 border-b border-border-light bg-blush px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-coral/50" />
          <span className="h-2 w-2 rounded-full bg-muted-dark/20" />
          <span className="h-2 w-2 rounded-full bg-rose/25" />
          <span className="ml-3 max-w-[150px] truncate rounded-sm bg-ivory px-4 py-0.5 text-[10px] text-muted-dark">Drive / Assignment {String(project.id).padStart(2, '0')}</span>
        </div>
        <div className="h-52 bg-white p-4">
          {isAvailable(project.evidenceImg) ? <img src={project.evidenceImg} alt={`Minh chứng ${project.title}`} className="h-full w-full border border-border-light/40 object-cover object-top transition duration-500 group-hover:scale-[1.03]" /> : <div className="flex h-full items-center justify-center text-muted-dark"><ImageIcon size={30} /></div>}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded bg-rose/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-rose">{project.chapter}</span>
      </div>
      <h2 className="mt-6 font-display text-2xl font-semibold leading-8 transition-colors group-hover:text-rose">{project.title}</h2>
      <p className="mt-4 text-sm leading-7 text-muted-dark">{project.shortDesc}</p>
      <div className="mt-5 flex flex-wrap gap-2">{project.skills?.slice(0, 3).map((skill) => <span key={skill} className="rounded-sm border border-border-light/60 bg-blush px-3 py-1 text-[9px] font-bold uppercase tracking-[0.08em] text-muted-dark">{skill}</span>)}</div>
      <div className="mt-auto grid grid-cols-2 gap-2 pt-7">
        {isAvailable(project.report) ? <a href={project.report} target="_blank" rel="noreferrer" className="card-resource-link"><FileText size={13} /> Report</a> : <span className="card-resource-link opacity-50">Report pending</span>}
        {isAvailable(project.driveLink) ? <a href={project.driveLink} target="_blank" rel="noreferrer" className="card-resource-link"><ExternalLink size={13} /> Drive</a> : <span className="card-resource-link opacity-50">Drive pending</span>}
      </div>
      <button type="button" onClick={() => onSelect(project)} className="button-primary mt-3 w-full">View Case Study <ArrowRight size={16} /></button>
      </div>
    </article>
  );
}
