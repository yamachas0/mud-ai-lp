import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プロフィール | 合同会社MUD-Ai",
  description: "合同会社MUD-Aiの会社概要および代表プロフィール。",
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
            プロフィール
          </h1>

          {/* 会社概要 */}
          <div className="mb-20">
            <h2 className="text-xl font-bold mb-6">会社概要</h2>
            <table className="w-full text-base text-mudai-gray-600 leading-relaxed border-collapse">
              <tbody>
                {[
                  ["会社名", "合同会社MUD-Ai（マッドエーアイ）"],
                  ["所在地", "千葉県八千代市"],
                  ["代表社員", "山川 健太（Kenta Yamakawa）"],
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

          {/* 代表プロフィール */}
          <div>
            <h2 className="text-xl font-bold mb-8">代表プロフィール</h2>

            <div className="mb-8">
              <p className="text-sm text-mudai-accent font-medium mb-2">
                CEO / Founder
              </p>
              <h3 className="text-2xl md:text-3xl font-bold mb-1">
                山川 健太（Kenta Yamakawa）
              </h3>
              <p className="text-base text-mudai-gray-500">
                合同会社MUD-Ai 代表社員
              </p>
            </div>

            <div className="w-12 h-0.5 bg-mudai-accent mb-8" />

            {/* 略歴 */}
            <div className="mb-8">
              <p className="text-sm font-medium text-mudai-gray-500 mb-4">略歴</p>
              <table className="w-full text-base text-mudai-gray-600 leading-relaxed border-collapse">
                <tbody>
                  {[
                    ["1988", "福島県福島市出身"],
                    ["2012", "京都大学工学部建築学科卒業"],
                    ["2014", "同大学院工学研究科建築学専攻修了"],
                    ["2014〜", "株式会社日建設計"],
                    ["2023〜", "トヨタ自動車株式会社"],
                    ["2026", "合同会社MUD-Ai 設立"],
                  ].map(([year, desc]) => (
                    <tr key={year} className="border-t border-mudai-gray-200">
                      <td className="py-3 pr-6 text-sm font-medium text-mudai-gray-500 whitespace-nowrap align-top w-20">
                        {year}
                      </td>
                      <td className="py-3">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="space-y-6 text-base text-mudai-gray-600 leading-relaxed">
              <p>
                建築・都市・モビリティをバックグラウンドに、テクノロジーを駆使しつつ、無駄や余白から生まれる価値の最大化を目指す。
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
