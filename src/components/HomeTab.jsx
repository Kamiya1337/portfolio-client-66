import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Hero from './Hero';

const modules = [
  { number: '01', title: 'Coursework', copy: 'Assignments and applied academic work.', tab: 'projects' },
  { number: '02', title: 'Evidence', copy: 'Reports, media, and linked learning artifacts.', tab: 'evidence' },
  { number: '03', title: 'Rubric', copy: 'Evaluation criteria and portfolio readiness.', tab: 'rubric' },
  { number: '04', title: 'Reflection', copy: 'Personal insight, challenges, and next steps.', tab: 'summary' },
];

export default function HomeTab({ setActiveTab }) {
  const { student } = portfolioData;
  return (
    <div className="scrapbook-bg">
      <Hero student={student} setActiveTab={setActiveTab} />
      <section className="px-5 pb-16 sm:px-8 xl:px-16 xl:pb-20">
        <div className="reveal mx-auto max-w-[1200px] border-l-4 border-rose bg-blush p-8 md:p-10">
          <div>
            <p className="editorial-label">ĐỊNH VỊ CÁ NHÂN</p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-charcoal sm:text-5xl">Digital Catalyst</h2>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.12em] text-muted-dark">Data-driven Thinking × Digital Creativity</p>
          </div>
          <div className="mt-8 border-t border-border-light pt-7">
            <p className="max-w-3xl text-base leading-8 text-charcoal">Em là một người đam mê khám phá những tiềm năng của công nghệ và thế giới số. Định vị của em nằm ở sự kết hợp giữa tư duy logic dựa trên thực tế và sự sáng tạo không giới hạn. Em thích học hỏi cách các công cụ số vận hành, từ đó tìm cách tối ưu hóa chúng để tạo ra những sản phẩm sáng tạo, có thể chạm tới và mang lại giá trị cho người sử dụng.

Portfolio này chính là cuốn nhật ký ghi lại hành trình em thử nghiệm, làm chủ các công cụ trong bộ môn Công nghệ số và AI, từng bước biến những kiến thức trên giảng đường thành sản phẩm thực tế.</p>
            <p className="mt-6 max-w-3xl text-base leading-8 text-charcoal">Portfolio này không chỉ là tập hợp các bài tập bộ môn Công nghệ số và AI, mà còn là cuốn nhật ký ghi lại hành trình em khám phá, làm chủ công nghệ và từng bước chuyển hóa lý thuyết thành những sản phẩm mang tới cho công chúng.</p>
          </div>
        </div>
      </section>
      <section className="border-t border-border-light/50 px-5 py-16 sm:px-8 xl:px-16 xl:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7"><p className="editorial-label">Portfolio Navigation</p><h2 className="mt-4 font-display text-4xl font-semibold text-rose sm:text-5xl">Module Explorer</h2></div>
            <p className="max-w-md text-sm leading-7 text-muted-dark lg:col-span-5 lg:justify-self-end">Navigate the academic journey through coursework, supporting evidence, assessment criteria, and reflection.</p>
          </div>
          <div className="reveal-stagger mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {modules.map((item) => (
              <button type="button" key={item.number} onClick={() => setActiveTab(item.tab)} className="reveal hover-lift group min-h-64 rounded-lg border border-border-light/70 bg-blush p-7 text-left">
                <div className="mb-10 flex items-start justify-between"><span className="font-display text-6xl font-semibold text-rose/10">{item.number}</span><ArrowUpRight size={19} className="mt-2 text-rose transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div>
                <h3 className="font-display text-2xl font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-muted-dark">{item.copy}</p>
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 pb-24 pt-8 sm:px-8 xl:px-16 xl:pb-28 xl:pt-14">
        <div className="reveal mx-auto flex min-h-64 max-w-[1200px] items-center justify-center rounded-lg border border-border-light bg-mint p-10 text-center text-charcoal shadow-[0_4px_20px_rgba(53,42,56,0.05)]">
          <div><p className="editorial-label">Academic Framework</p><p className="mt-6 max-w-4xl font-display text-3xl font-semibold italic leading-tight text-muted-dark sm:text-4xl">Strategy becomes credible when it is documented, reviewed, and reflected upon.</p><div className="mx-auto mt-8 h-px w-24 bg-border-light" /></div>
        </div>
      </section>
    </div>
  );
}
