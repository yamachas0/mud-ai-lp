"use client";

import ScrollFadeIn from "./ScrollFadeIn";

const businesses = [
  {
    number: "01",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="8" width="32" height="24" rx="2" stroke="#10B981" strokeWidth="2" />
        <rect x="8" y="14" width="10" height="3" rx="1" fill="#10B981" opacity="0.3" />
        <rect x="8" y="20" width="16" height="2" rx="1" fill="#10B981" opacity="0.2" />
        <rect x="8" y="25" width="12" height="2" rx="1" fill="#10B981" opacity="0.2" />
        <rect x="22" y="14" width="10" height="12" rx="1" fill="#10B981" opacity="0.15" />
      </svg>
    ),
    title: "スライドデザイン",
    subtitle: "Slide Design",
    description:
      "プレゼン資料の企画・デザイン・変換を一手に。モダンなデザインに一括変換し、統一フォーマットを実現します。",
  },
  {
    number: "02",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="14" stroke="#10B981" strokeWidth="2" />
        <circle cx="20" cy="20" r="6" fill="#10B981" opacity="0.2" />
        <path d="M20 6 L20 14" stroke="#10B981" strokeWidth="1.5" opacity="0.4" />
        <path d="M20 26 L20 34" stroke="#10B981" strokeWidth="1.5" opacity="0.4" />
        <path d="M6 20 L14 20" stroke="#10B981" strokeWidth="1.5" opacity="0.4" />
        <path d="M26 20 L34 20" stroke="#10B981" strokeWidth="1.5" opacity="0.4" />
      </svg>
    ),
    title: "AI開発・自動化",
    subtitle: "AI & Automation",
    description:
      "業務プロセスの自動化からAIソリューションの開発まで。本質的な業務に集中できる環境を構築します。",
  },
  {
    number: "03",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
        <circle cx="14" cy="16" r="5" stroke="#10B981" strokeWidth="1.5" />
        <circle cx="26" cy="16" r="5" stroke="#10B981" strokeWidth="1.5" />
        <path d="M20 28 C12 28 6 32 6 36" stroke="#10B981" strokeWidth="1.5" opacity="0.4" />
        <path d="M20 28 C28 28 34 32 34 36" stroke="#10B981" strokeWidth="1.5" opacity="0.4" />
        <circle cx="20" cy="26" r="5" stroke="#10B981" strokeWidth="2" fill="#10B981" opacity="0.1" />
      </svg>
    ),
    title: "コミュニティ運営",
    subtitle: "Community Ops",
    description:
      "Discordを中心としたコミュニティの立ち上げ・運営・活性化をトータルサポートします。",
  },
  {
    number: "04",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
        <rect x="6" y="6" width="12" height="12" rx="2" stroke="#10B981" strokeWidth="1.5" fill="#10B981" opacity="0.1" />
        <rect x="22" y="6" width="12" height="12" rx="2" stroke="#10B981" strokeWidth="1.5" fill="#10B981" opacity="0.1" />
        <rect x="6" y="22" width="12" height="12" rx="2" stroke="#10B981" strokeWidth="1.5" fill="#10B981" opacity="0.1" />
        <polygon points="28,23 34,35 22,35" stroke="#10B981" strokeWidth="1.5" fill="#10B981" opacity="0.15" />
      </svg>
    ),
    title: "デジタルコンテンツ制作",
    subtitle: "Digital Content",
    description:
      "Web制作からメタバース、NFTまで。最新テクノロジーを活用したコンテンツ制作を提供します。",
  },
  {
    number: "05",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
        <path d="M8 32 L20 12 L32 32 Z" stroke="#10B981" strokeWidth="2" fill="#10B981" opacity="0.1" />
        <circle cx="20" cy="24" r="4" stroke="#10B981" strokeWidth="1.5" fill="#10B981" opacity="0.15" />
        <path d="M4 34 L36 34" stroke="#10B981" strokeWidth="1.5" opacity="0.3" />
      </svg>
    ),
    title: "まちづくり & 場づくり",
    subtitle: "Urban & Space Design",
    description:
      "都市計画アドバイザリーから空間プロデュースまで。人と場所をつなぐプロジェクトを推進します。",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-mudai-gray-50 relative">
      <div className="container-mudai">
        <ScrollFadeIn>
          <div className="text-center mb-20">
            <p className="text-sm tracking-[0.3em] text-mudai-accent font-medium mb-4">
              ABOUT
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">事業内容</h2>
            <p className="text-mudai-gray-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              5つの領域を横断し、テクノロジーと創造性で
              <br className="hidden sm:block" />
              新しい価値を生み出します。
            </p>
          </div>
        </ScrollFadeIn>

        {/* 上段3カード */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {businesses.slice(0, 3).map((biz, i) => (
            <ScrollFadeIn key={biz.number} delay={i * 150}>
              <div className="group bg-white rounded-2xl p-8 md:p-10 hover:shadow-xl hover:shadow-mudai-accent/5 transition-all duration-500 border border-mudai-gray-100 hover:border-mudai-accent/20 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {biz.icon}
                  </div>
                  <span className="text-xs text-mudai-accent font-bold tracking-[0.2em]">
                    {biz.number}
                  </span>
                </div>

                <p className="text-[11px] tracking-[0.2em] text-mudai-gray-400 font-medium mb-2 uppercase">
                  {biz.subtitle}
                </p>

                <h3 className="text-xl md:text-2xl font-bold mb-4 leading-snug">
                  {biz.title}
                </h3>

                <p className="text-mudai-gray-500 text-base leading-relaxed">
                  {biz.description}
                </p>

                <div className="mt-6 w-0 h-0.5 bg-mudai-accent group-hover:w-12 transition-all duration-500 rounded-full" />
              </div>
            </ScrollFadeIn>
          ))}
        </div>

        {/* 下段2カード */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {businesses.slice(3).map((biz, i) => (
            <ScrollFadeIn key={biz.number} delay={(i + 3) * 150}>
              <div className="group bg-white rounded-2xl p-8 md:p-10 hover:shadow-xl hover:shadow-mudai-accent/5 transition-all duration-500 border border-mudai-gray-100 hover:border-mudai-accent/20 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {biz.icon}
                  </div>
                  <span className="text-xs text-mudai-accent font-bold tracking-[0.2em]">
                    {biz.number}
                  </span>
                </div>

                <p className="text-[11px] tracking-[0.2em] text-mudai-gray-400 font-medium mb-2 uppercase">
                  {biz.subtitle}
                </p>

                <h3 className="text-xl md:text-2xl font-bold mb-4 leading-snug">
                  {biz.title}
                </h3>

                <p className="text-mudai-gray-500 text-base leading-relaxed">
                  {biz.description}
                </p>

                <div className="mt-6 w-0 h-0.5 bg-mudai-accent group-hover:w-12 transition-all duration-500 rounded-full" />
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>

      {/* 下部ウェーブ */}
      <div className="absolute bottom-0 left-0 right-0 wave-divider">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path
            d="M0,40 C480,80 960,0 1440,40 L1440,80 L0,80 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  );
}
