import { useState } from 'react';
import { Check, ExternalLink, Maximize2, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import PreviewModal from './PreviewModal';

function isComplete(value) {
  return Boolean(value && value !== 'Sẽ cập nhật sau' && value !== 'Không yêu cầu');
}

export default function EvidenceTable() {
  const { projects } = portfolioData;
  const [previewData, setPreviewData] = useState({ isOpen: false, url: '', type: '' });
  const completed = projects.filter((project) => isComplete(project.report) && isComplete(project.evidenceImg) && isComplete(project.driveLink)).length;

  const openPreview = (event, url, type) => {
    if (type === 'drive') return;
    event.preventDefault();
    setPreviewData({ isOpen: true, url, type });
  };

  const EvidenceLink = ({ value, label, type }) => {
    if (!value || value === 'Sẽ cập nhật sau') return <span className="ledger-status">Đang chờ</span>;
    if (value === 'Không yêu cầu') return <span className="ledger-status">Không yêu cầu</span>;
    const Icon = type === 'drive' ? ExternalLink : Maximize2;
    return <a href={value} target="_blank" rel="noreferrer" onClick={(event) => openPreview(event, value, type)} className="ledger-link">{label}<Icon size={13} /></a>;
  };

  const StatusBadge = ({ project }) => {
    const complete = isComplete(project.report) && isComplete(project.evidenceImg) && isComplete(project.driveLink);
    return complete ? <span className="ledger-status ledger-status-complete"><Check size={12} /> Đã nộp</span> : <span className="ledger-status">Thiếu minh chứng</span>;
  };

  return (
    <div className="scrapbook-bg min-h-screen">
      <PreviewModal previewData={previewData} onClose={() => setPreviewData({ isOpen: false, url: '', type: '' })} />
      <header className="page-intro">
        <p className="editorial-label">Submission Repository</p>
        <h1 className="page-title max-w-5xl">A curated archive of academic milestones.</h1>
        <p className="page-copy">Bảng tổng hợp giữ nguyên báo cáo, hình ảnh minh chứng, liên kết tài nguyên và trạng thái thực tế của từng bài tập.</p>
      </header>

      <section className="px-6 pb-28 sm:px-8 xl:px-16">
        <div className="editorial-card mx-auto max-w-[1200px] overflow-hidden p-5 sm:p-8">
          <div className="divide-y divide-border-light md:hidden">
            {projects.map((project) => (
              <article key={project.id} className="py-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="editorial-label">Assignment {String(project.id).padStart(2, '0')}</p>
                    <h2 className="mt-3 font-display text-xl font-semibold">{project.title}</h2>
                  </div>
                  <StatusBadge project={project} />
                </div>
                <div className="mt-6 grid grid-cols-1 gap-2 min-[420px]:grid-cols-3">
                  <EvidenceLink value={project.report} label="Report" type="pdf" />
                  <EvidenceLink value={project.evidenceImg} label="Image" type="img" />
                  <EvidenceLink value={project.driveLink} label="Drive" type="drive" />
                </div>
              </article>
            ))}
          </div>

          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[900px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/50 text-[12px] font-bold uppercase tracking-[0.12em] text-primary">
                  <th className="px-3 py-6">Assignment</th>
                  <th className="px-3 py-6 text-center">Report File</th>
                  <th className="px-3 py-6 text-center">Evidence Image</th>
                  <th className="px-3 py-6 text-center">Resource Link</th>
                  <th className="px-3 py-6 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-light/60">
                {projects.map((project) => (
                  <tr key={project.id} className="group transition-all hover:translate-x-1 hover:bg-white/35">
                    <td className="px-3 py-8">
                      <p className="font-display text-xl font-semibold group-hover:text-primary">{project.title}</p>
                      <p className="mt-2 text-xs uppercase tracking-wider text-muted-dark">{project.chapter}</p>
                    </td>
                    <td className="px-3 py-8 text-center"><EvidenceLink value={project.report} label="Xem báo cáo" type="pdf" /></td>
                    <td className="px-3 py-8 text-center"><EvidenceLink value={project.evidenceImg} label="Xem ảnh" type="img" /></td>
                    <td className="px-3 py-8 text-center"><EvidenceLink value={project.driveLink} label="Mở Drive" type="drive" /></td>
                    <td className="px-3 py-8 text-right"><StatusBadge project={project} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between border-t border-white/50 px-2 py-5">
            <p className="editorial-label">Showing {projects.length} academic records</p>
            <p className="text-sm text-muted-dark">{completed}/{projects.length} complete</p>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-[1200px] gap-6 md:grid-cols-12">
          <div className="editorial-card p-8 md:col-span-7">
            <p className="editorial-label">Archive Summary</p>
            <div className="mt-8 flex gap-12">
              <div><p className="font-display text-5xl text-primary">{projects.length * 2}</p><p className="text-sm text-muted-dark">Total Files</p></div>
              <div className="border-l border-border-light pl-12"><p className="font-display text-5xl text-primary">{completed}/{projects.length}</p><p className="text-sm text-muted-dark">Complete Records</p></div>
            </div>
            <p className="mt-10 border-t border-white/50 pt-6 text-sm italic text-muted-dark">Verifying academic integrity protocol...</p>
          </div>
          <div className="editorial-card bg-lavender/55 p-8 md:col-span-5">
            <div className="flex items-center gap-2"><Sparkles size={18} className="text-primary" /><p className="editorial-label">Integrity Check</p></div>
            <h2 className="mt-5 font-display text-3xl font-semibold text-primary">Submission Accuracy</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-muted-dark">Mỗi trạng thái được tính trực tiếp từ dữ liệu báo cáo, hình ảnh và liên kết tài nguyên hiện có.</p>
            <p className="mt-10 font-display text-6xl font-semibold text-primary">{Math.round((completed / projects.length) * 100)}%</p>
          </div>
        </div>
      </section>
    </div>
  );
}
