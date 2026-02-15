import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約 | 合同会社MUD-Ai",
  description: "合同会社MUD-Aiの利用規約",
};

export default function TermsPage() {
  return (
    <>
      <div className="h-20" />

      <section className="section-padding">
        <div className="container-mudai max-w-3xl">
          <p className="text-sm tracking-[0.3em] text-mudai-accent font-medium mb-4">
            TERMS OF SERVICE
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-12">利用規約</h1>

          <div className="prose-mudai space-y-10 text-base text-mudai-gray-600 leading-relaxed">
            <p className="text-mudai-gray-400 text-sm">最終更新日: 2026年2月</p>

            <div>
              <h2 className="text-xl font-bold text-mudai-black mb-4">第1条（適用）</h2>
              <p>
                本利用規約（以下「本規約」）は、合同会社MUD-Ai（以下「当社」）が提供する
                Webサイト（mud-ai.com）および各種サービス（以下「本サービス」）の利用に関する
                条件を定めるものです。利用者は、本規約に同意した上で本サービスを利用するものとします。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-mudai-black mb-4">第2条（定義）</h2>
              <p>本規約において使用する用語の定義は以下のとおりとします。</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>「利用者」とは、本サービスを利用する全ての個人および法人をいいます。</li>
                <li>「本サービス」とは、当社が提供するWebサイト、コンサルティング、制作物の納品、その他関連サービスの総称をいいます。</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-mudai-black mb-4">第3条（禁止事項）</h2>
              <p>利用者は、本サービスの利用にあたり、以下の行為を行ってはなりません。</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>法令または公序良俗に反する行為</li>
                <li>当社または第三者の知的財産権、肖像権、プライバシー権等を侵害する行為</li>
                <li>当社のサービス運営を妨害する行為</li>
                <li>不正アクセス、ウイルス送信等のセキュリティを脅かす行為</li>
                <li>当社の事前の承諾なく本サービスの内容を複製・転載・再配布する行為</li>
                <li>その他、当社が不適切と判断する行為</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-mudai-black mb-4">第4条（知的財産権）</h2>
              <p>
                本サービスに関する著作権、商標権その他の知的財産権は、当社または正当な権利者に帰属します。
                利用者は、当社の事前の書面による承諾なく、本サービスのコンテンツを複製、翻案、公衆送信等することはできません。
              </p>
              <p className="mt-3">
                個別の業務委託契約により制作した成果物の権利帰属については、各契約の定めに従うものとします。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-mudai-black mb-4">第5条（免責事項）</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>当社は、本サービスの内容の正確性、完全性、有用性について保証するものではありません。</li>
                <li>当社は、本サービスの利用に起因して利用者に生じた損害について、当社に故意または重過失がある場合を除き、責任を負いません。</li>
                <li>当社は、本サービスの中断、停止、変更、終了等により利用者に生じた損害について責任を負いません。</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-mudai-black mb-4">第6条（サービスの変更・終了）</h2>
              <p>
                当社は、利用者への事前の通知なく、本サービスの内容を変更し、または本サービスの提供を終了することができるものとします。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-mudai-black mb-4">第7条（規約の変更）</h2>
              <p>
                当社は、必要に応じて本規約を変更することがあります。変更後の規約は、
                本Webサイトに掲載した時点で効力を生じるものとします。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-mudai-black mb-4">第8条（準拠法・管轄）</h2>
              <p>
                本規約は日本法に準拠し、日本法に従って解釈されるものとします。
                本規約に関する一切の紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
              </p>
            </div>

            <div className="pt-6 border-t border-mudai-gray-200">
              <p className="text-mudai-gray-400 text-sm">
                合同会社MUD-Ai<br />
                所在地: [登記住所]<br />
                メール: info@mud-ai.com
              </p>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-mudai-gray-200">
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
