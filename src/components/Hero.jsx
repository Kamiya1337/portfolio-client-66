import { ArrowRight, FileCheck2, Sparkles } from 'lucide-react';

export default function Hero({ student, setActiveTab }) {
  return (
    <section className="section-anchor overflow-hidden px-5 pb-20 pt-16 sm:px-8 md:pt-20 xl:px-16 xl:pb-28">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid min-h-[760px] gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="reveal min-w-0 lg:col-span-8">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/55 bg-white/45 px-4 py-2 shadow-sm backdrop-blur-xl">
              <Sparkles size={16} className="text-primary" />
              <p className="editorial-label">Overview / Tổng quan</p>
            </div>
            <h1 className="max-w-full break-words font-display text-[clamp(3.5rem,10vw,6.7rem)] font-black leading-[0.98] tracking-tight text-primary lg:max-w-5xl">
              Arabic Language &amp; Culture Learning Portfolio
            </h1>
            <div className="my-10 flex items-center gap-4">
              <span className="h-px flex-1 bg-primary/20" />
              <Sparkles size={22} className="shrink-0 text-primary" />
              <span className="h-px w-24 bg-primary/20" />
            </div>
            <div className="paper-texture w-full max-w-[calc(100vw-2.5rem)] rounded-[2rem] border border-white/45 bg-white/45 p-8 shadow-[0_28px_90px_rgba(69,54,115,0.12)] backdrop-blur-2xl sm:max-w-3xl sm:p-10">
              <p className="max-w-[17rem] break-words [overflow-wrap:anywhere] font-display text-lg font-semibold leading-relaxed text-primary sm:max-w-full sm:text-3xl">
                Portfolio môn Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button type="button" onClick={() => setActiveTab('projects')} className="button-light w-full sm:w-auto">
                  Mục bài tập <ArrowRight size={16} />
                </button>
                <button type="button" onClick={() => setActiveTab('evidence')} className="button-secondary min-h-12 w-full sm:w-auto">
                  Minh chứng <FileCheck2 size={16} />
                </button>
              </div>
            </div>
          </div>

          <aside className="editorial-card soft-peach-glow reveal min-w-0 max-w-full p-5 lg:sticky lg:top-28 lg:col-span-4 lg:mt-8">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-mint/70 blur-2xl" />
            <img
              src="/avatar-dinh-thai-son.jpg"
              alt={`${student.name} portfolio owner`}
              className="aspect-[4/5] w-full max-w-full rounded-[1.6rem] border-[10px] border-white/40 object-cover object-center shadow-[0_18px_60px_rgba(69,54,115,0.13)] transition duration-700 hover:-rotate-1"
            />
            <p className="editorial-label mt-8">Portfolio Owner</p>
            <h2 className="mt-2 font-display text-4xl font-semibold leading-tight text-charcoal">{student.name}</h2>
            <dl className="mt-8 space-y-6">
              <div>
                <dt className="editorial-label">Major</dt>
                <dd className="mt-2 text-sm font-bold leading-6">{student.major}</dd>
              </div>
              <div>
                <dt className="editorial-label">Institution</dt>
                <dd className="mt-2 text-sm font-bold">{student.shortUniversity}</dd>
                <dd className="mt-1 text-xs leading-5 text-muted-dark">{student.university}</dd>
              </div>
              <div className="border-t border-white/50 pt-5">
                <span className="rounded-full bg-lavender/70 px-3 py-1 text-xs font-bold text-primary">Batch {student.academicYear}</span>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
