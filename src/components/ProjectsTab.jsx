import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import AssignmentCard from './AssignmentCard';
import AssignmentDetail from './AssignmentDetail';
import useScrollReveal from '../hooks/useScrollReveal';

export default function ProjectsTab() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [previewData, setPreviewData] = useState({ isOpen: false, url: '', type: '' });
  const { projects } = portfolioData;
  useScrollReveal(selectedProject?.id ?? 'grid');

  const openPreview = (event, url, type) => {
    event.preventDefault();
    setPreviewData({ isOpen: true, url, type });
  };
  const closePreview = () => setPreviewData({ isOpen: false, url: '', type: '' });

  if (selectedProject) return <AssignmentDetail project={selectedProject} onBack={() => setSelectedProject(null)} previewData={previewData} onPreview={openPreview} onClosePreview={closePreview} />;

  return (
    <div className="scrapbook-bg">
      <header className="page-intro reveal">
        <p className="editorial-label">Curated Portfolio Archive</p>
        <h1 className="page-title max-w-5xl">Applied learning, documented with care.</h1>
        <p className="page-copy">Sáu bài tập học phần được trình bày như một hồ sơ học thuật, giữ nguyên báo cáo, minh chứng và liên kết tài nguyên thực tế.</p>
      </header>
      <section className="reveal-stagger mx-auto grid max-w-[1200px] grid-cols-1 gap-6 px-5 pb-24 sm:px-8 lg:grid-cols-2 xl:grid-cols-3 xl:px-16">
        {projects.map((project) => <AssignmentCard key={project.id} project={project} onSelect={setSelectedProject} />)}
      </section>
      <section className="border-t border-border-light/50 bg-blush px-5 py-20 sm:px-8 xl:px-16">
        <div className="reveal mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-2 lg:items-center"><div><p className="editorial-label">Academic Standards</p><h2 className="mt-4 font-display text-4xl font-semibold">Evidence before decoration.</h2><p className="mt-6 max-w-xl text-base leading-8 text-muted-dark">Mỗi hồ sơ ưu tiên tính chính xác của nội dung, khả năng truy xuất tài nguyên và sự minh bạch trong quá trình thực hiện.</p></div><div className="rounded-lg border border-border-light/60 bg-mint p-10 text-charcoal shadow-[0_4px_20px_rgba(53,42,56,0.05)]"><p className="editorial-label">Archive Scope</p><p className="mt-5 font-display text-7xl font-semibold text-rose">{String(projects.length).padStart(2, '0')}</p><p className="mt-2 text-sm text-muted-dark">documented assignments</p></div></div>
      </section>
    </div>
  );
}
