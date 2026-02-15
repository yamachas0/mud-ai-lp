"use client";

import ScrollFadeIn from "./ScrollFadeIn";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* 有機的な背景シェイプ */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-20 animate-float-slow"
          style={{
            background:
              "radial-gradient(circle, rgba(16,185,129,0.3) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-15 animate-float"
          style={{
            background:
              "radial-gradient(circle, rgba(16,185,129,0.25) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/3 right-[15%] w-[200px] h-[200px] rounded-full opacity-10 animate-float-slow"
          style={{
            background:
              "radial-gradient(circle, rgba(5,150,105,0.4) 0%, transparent 70%)",
            animationDelay: "3s",
          }}
        />
      </div>

      <div className="w-full flex flex-col items-center justify-center text-center relative z-10 px-6">
        <ScrollFadeIn delay={200}>
          <p className="text-xs md:text-sm tracking-[0.5em] text-mudai-accent font-medium mb-8 uppercase">
            Make Unusual Dreams AI-powered
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn delay={500}>
          <div className="mb-6 flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="MUD-Ai"
              className="h-32 md:h-48 lg:h-56 w-auto drop-shadow-lg"
            />
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn delay={800}>
          <p className="text-2xl md:text-3xl text-mudai-gray-600 mb-4 font-bold tracking-widest">
            合同会社MUD-Ai
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn delay={1000}>
          <p className="text-lg md:text-2xl text-mudai-gray-500 mb-16 max-w-xl mx-auto leading-relaxed font-medium">
            無駄とAIのカケザンで、
            <br className="hidden sm:block" />
            まだ見ぬ社会を創造する
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn delay={1200}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="px-10 py-4 bg-mudai-accent text-white text-base tracking-wider rounded-full hover:bg-mudai-accent-dark transition-all duration-300 hover:shadow-lg hover:shadow-mudai-accent/20"
            >
              サービスを見る
            </a>
            <a
              href="#contact"
              className="px-10 py-4 border-2 border-mudai-accent text-mudai-accent text-base tracking-wider rounded-full hover:bg-mudai-accent hover:text-white transition-all duration-300"
            >
              お問い合わせ
            </a>
          </div>
        </ScrollFadeIn>
      </div>

      {/* スクロールインジケーター */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.3em] text-mudai-gray-400 uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-mudai-accent to-transparent animate-scroll-bounce" />
      </div>

      {/* 下部ウェーブ */}
      <div className="absolute bottom-0 left-0 right-0 wave-divider">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path
            d="M0,60 C360,100 720,20 1080,60 C1260,80 1380,50 1440,40 L1440,100 L0,100 Z"
            fill="#F9FAFB"
          />
        </svg>
      </div>
    </section>
  );
}
