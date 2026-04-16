import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "代表プロフィール | 合同会社MUD-Ai",
  description: "合同会社MUD-Ai 代表社員のプロフィール。",
};

export default function ProfilePage() {
  return (
    <>
      <div className="h-20" />

      <section className="section-padding">
        <div className="container-mudai max-w-3xl">
          <p className="text-sm tracking-[0.3em] text-mudai-accent font-medium mb-4">
            PROFILE
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-16">
            代表プロフィール
          </h1>

          <div className="mb-16">
            <h2 className="text-xl font-bold mb-6">会社概要</h2>
            <table className="w-full text-base text-mudai-gray-600 leading-relaxed border-collapse">
              <tbody>
                {[
                  ["会社名", "合同会社MUD-Ai（マッドエーアイ）"],
                  ["所在地", "千葉県八千代市"],
                  ["代表社員", "山川健太"],
                  ["設立", "2026年3月4日"],
                  ["法人番号", "1040003029635"],
                  ["事業内容", "AIを活用した業務自動化支援、スライドデザイン、コミュニティ運営、システム開発、コンサルティング"],
                  ["連絡先", "kenta.y@mud-ai.com"],
                ].map(([label, value]) => (
                  <tr key={label} className="border-t border-mudai-gray-200">
                    <td className="py-3 pr-6 text-sm font-medium text-mudai-gray-500 whitespace-nowrap align-top w-32">
                      {label}
                    </td>
                    <td className="py-3">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <div className="mb-8">
              <p className="text-sm text-mudai-accent font-medium mb-2">
                CEO / Founder
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mb-1">
                Kenta Yamakawa
              </h2>
              <p className="text-base text-mudai-gray-500">
                合同会社MUD-Ai 代表社員
              </p>
            </div>

            <div className="w-12 h-0.5 bg-mudai-accent mb-8" />

            <div className="space-y-6 text-base text-mudai-gray-600 leading-relaxed">
              <p>
                建築とテクノロジー、そして「無駄」を愛する起業家。
                「本当に価値あるものは、一見"無駄"に見える余白や遊びから生まれる」
                という信念のもと、2026年に合同会社MUD-Aiを設立。
              </p>
              <p>
                スライドデザイン、AI開発、デジタルコンテンツ制作、
                コミュニティ運営、まちづくりの領域を横断し、
                クライアントの課題解決とイノベーション創出に取り組む。
              </p>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-mudai-gray-200">
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
