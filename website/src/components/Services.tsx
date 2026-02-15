"use client";

import ScrollFadeIn from "./ScrollFadeIn";

const services = [
  {
    id: "slides",
    title: "スライドデザイン",
    subtitle: "Slide Design",
    description:
      "プレゼン資料の企画・デザイン・変換を効率化し、統一されたブランド体験を提供します。既存資料のリデザインから新規作成、テンプレート設計まで幅広く対応。",
    features: [
      "既存資料のデザインリニューアル",
      "ブランドガイドラインに沿った一括変換",
      "PowerPoint / Google Slides / Keynote対応",
      "オリジナルテンプレートの設計・納品",
      "プレゼン構成のコンサルティング",
    ],
    gradient: "from-emerald-50 to-teal-50",
    portfolioLink: true,
  },
  {
    id: "ai",
    title: "AI開発・自動化システム",
    subtitle: "AI & Automation",
    description:
      "最新のAI技術を活用し、業務の効率化と自動化を実現します。定型業務の自動化から、高度なAIソリューションの開発まで幅広く対応。",
    features: [
      "業務プロセス自動化（RPA）",
      "AIチャットボット・アシスタント開発",
      "データ分析・可視化ダッシュボード",
      "API連携・システムインテグレーション",
      "カスタムAIモデルの開発・運用",
    ],
    gradient: "from-emerald-50 to-cyan-50",
  },
  {
    id: "community-ops",
    title: "コミュニティ運営サポート",
    subtitle: "Community Operations",
    description:
      "オンラインコミュニティの立ち上げから運営・グロースまでをトータルサポート。Discordを中心に、メンバーが自走するコミュニティ設計を提案します。",
    features: [
      "Discordサーバー設計・構築",
      "BOT導入・カスタマイズ",
      "コミュニティマネジメント代行",
      "活性化企画・イベント運営",
      "メンバーエンゲージメント分析",
    ],
    gradient: "from-emerald-50 to-lime-50",
  },
  {
    id: "content",
    title: "デジタルコンテンツ制作",
    subtitle: "Digital Content Creation",
    description:
      "Web制作から映像・3D・ブロックチェーン領域まで、テクノロジーを活用したクリエイティブ制作をワンストップで提供します。",
    features: [
      "Webサイト制作・LP制作",
      "YouTube配信サポート・映像制作",
      "メタバースイベント企画・運営",
      "アバター制作・3Dモデリング",
      "NFTコンテンツ制作",
      "ブロックチェーン技術サポート",
    ],
    gradient: "from-violet-50 to-emerald-50",
  },
  {
    id: "machizukuri",
    title: "まちづくり & 場づくり",
    subtitle: "Urban & Space Design",
    description:
      "地域の資源と人をつなぎ、持続可能なまちづくりと空間プロデュースを支援します。都市計画から内装企画まで、一貫したサポートを提供。",
    features: [
      "都市計画に関するアドバイザリー",
      "空間内装企画・プロデュース",
      "地域活性化プロジェクトの企画・運営",
      "コミュニティスペースの企画・プロデュース",
      "自治体・地域団体との連携コーディネート",
      "エリアマネジメント・まちづくり計画策定支援",
    ],
    gradient: "from-emerald-50 to-green-50",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding relative bg-gradient-nature">
      <div className="container-mudai">
        <ScrollFadeIn>
          <div className="text-center mb-20">
            <p className="text-sm tracking-[0.3em] text-mudai-accent font-medium mb-4">
              SERVICES
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">サービス</h2>
            <p className="text-mudai-gray-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              それぞれの専門性を活かし、
              <br className="hidden sm:block" />
              クライアントの課題に最適な解決策を提供します。
            </p>
          </div>
        </ScrollFadeIn>

        <div className="space-y-16 md:space-y-24">
          {services.map((service, i) => (
            <ScrollFadeIn key={service.id} direction={i % 2 === 0 ? "left" : "right"}>
              <div
                className={`flex flex-col md:flex-row gap-8 md:gap-14 items-center ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* テキスト */}
                <div className="md:w-1/2">
                  <p className="text-xs tracking-[0.3em] text-mudai-accent font-medium mb-3 uppercase">
                    {service.subtitle}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold mb-5 whitespace-pre-line leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-mudai-gray-500 text-base md:text-lg leading-relaxed">
                    {service.description}
                  </p>
                  {"portfolioLink" in service && service.portfolioLink && (
                    <a
                      href="/portfolio"
                      className="inline-flex items-center gap-2 mt-5 text-mudai-accent hover:text-mudai-accent-dark transition-colors text-base font-medium"
                    >
                      ポートフォリオを見る
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  )}
                </div>

                {/* 機能リスト */}
                <div className="md:w-1/2">
                  <div className={`bg-gradient-to-br ${service.gradient} rounded-2xl p-8 md:p-10`}>
                    <ul className="space-y-4">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-base text-mudai-gray-600"
                        >
                          <span className="w-5 h-5 rounded-full bg-mudai-accent/15 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-mudai-accent" />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>

      {/* 下部ウェーブ */}
      <div className="absolute bottom-0 left-0 right-0 wave-divider">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path
            d="M0,30 C240,70 480,10 720,40 C960,70 1200,20 1440,50 L1440,80 L0,80 Z"
            fill="#F9FAFB"
          />
        </svg>
      </div>
    </section>
  );
}
