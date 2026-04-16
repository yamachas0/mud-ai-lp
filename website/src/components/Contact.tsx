"use client";

import ScrollFadeIn from "./ScrollFadeIn";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-mudai-gray-50 relative">
      <div className="container-mudai max-w-2xl">
        <ScrollFadeIn>
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] text-mudai-accent font-medium mb-4">
              CONTACT
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">お問い合わせ</h2>
            <p className="text-mudai-gray-500 text-base md:text-lg leading-relaxed">
              プロジェクトのご相談、お見積もりなど、
              <br className="hidden sm:block" />
              お気軽にお問い合わせください。
              <br />
              通常2営業日以内にご返信いたします。
            </p>
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn delay={200}>
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-mudai-gray-100 shadow-sm">
            <div className="text-center">
              <p className="text-base text-mudai-gray-400 mb-3">
                メールにてお問い合わせください
              </p>
              <a
                href="mailto:kenta.y@mud-ai.com"
                className="text-mudai-accent hover:text-mudai-accent-dark transition-colors text-lg font-medium"
              >
                kenta.y@mud-ai.com
              </a>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
