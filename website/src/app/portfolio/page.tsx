import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ポートフォリオ | 合同会社MUD-Ai",
  description: "合同会社MUD-Aiの制作実績・ポートフォリオ。",
};

export default function PortfolioPage() {
  return (
    <>
      <div className="h-20" />

      <section className="section-padding">
        <div className="container-mudai max-w-3xl text-center">
          <p className="text-sm tracking-[0.3em] text-mudai-accent font-medium mb-4">
            PORTFOLIO
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            ポートフォリオ
          </h1>

          <div className="py-20 md:py-32">
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-emerald-50 flex items-center justify-center">
              <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                <rect x="4" y="8" width="32" height="24" rx="2" stroke="#10B981" strokeWidth="2" />
                <rect x="8" y="14" width="10" height="3" rx="1" fill="#10B981" opacity="0.3" />
                <rect x="8" y="20" width="16" height="2" rx="1" fill="#10B981" opacity="0.2" />
                <rect x="8" y="25" width="12" height="2" rx="1" fill="#10B981" opacity="0.2" />
                <rect x="22" y="14" width="10" height="12" rx="1" fill="#10B981" opacity="0.15" />
              </svg>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-mudai-gray-800">
              Coming Soon
            </h2>
            <p className="text-mudai-gray-500 text-base md:text-lg leading-relaxed max-w-md mx-auto">
              制作実績を準備中です。
              <br />
              公開までしばらくお待ちください。
            </p>

            <div className="mt-12">
              <a
                href="/#contact"
                className="inline-block px-10 py-4 bg-mudai-accent text-white text-base tracking-wider rounded-full hover:bg-mudai-accent-dark transition-all duration-300 hover:shadow-lg hover:shadow-mudai-accent/20"
              >
                お問い合わせはこちら
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-mudai-gray-200">
            <a
              href="/"
              className="text-mudai-accent hover:text-mudai-accent-dark transition-colors text-base"
            >
              &larr; トップへ戻る
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
