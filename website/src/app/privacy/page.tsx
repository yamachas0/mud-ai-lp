import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | 合同会社MUD-Ai",
  description: "合同会社MUD-Aiのプライバシーポリシー",
};

export default function PrivacyPage() {
  return (
    <>
      <div className="h-20" />

      <section className="section-padding">
        <div className="container-mudai max-w-3xl">
          <p className="text-sm tracking-[0.3em] text-mudai-accent font-medium mb-4">
            PRIVACY POLICY
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-12">
            プライバシーポリシー
          </h1>

          <div className="space-y-10 text-base text-mudai-gray-600 leading-relaxed">
            <p className="text-mudai-gray-400 text-sm">最終更新日: 2026年2月</p>

            <p>
              合同会社MUD-Ai（以下「当社」）は、利用者の個人情報の保護を重要な責務と認識し、
              以下のとおりプライバシーポリシー（以下「本ポリシー」）を定め、
              個人情報の適切な取扱いと保護に努めます。
            </p>

            <div>
              <h2 className="text-xl font-bold text-mudai-black mb-4">1. 収集する情報</h2>
              <p>当社は、以下の情報を収集する場合があります。</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  <strong>お問い合わせ情報:</strong> お名前、メールアドレス、電話番号、
                  会社名、お問い合わせ内容（お問い合わせフォームから送信された場合）
                </li>
                <li>
                  <strong>契約関連情報:</strong> 業務委託契約に必要な会社情報、
                  担当者情報、請求先情報
                </li>
                <li>
                  <strong>アクセス情報:</strong> IPアドレス、ブラウザの種類、
                  アクセス日時、閲覧ページ等（アクセス解析ツールを通じて自動的に収集）
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-mudai-black mb-4">2. 利用目的</h2>
              <p>収集した個人情報は、以下の目的で利用します。</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>お問い合わせへの回答・対応</li>
                <li>サービスの提供・改善</li>
                <li>契約の履行および関連する連絡</li>
                <li>請求書・見積書等の書類の作成・送付</li>
                <li>当社サービスに関するご案内（利用者の同意がある場合）</li>
                <li>Webサイトの利用状況の分析・改善</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-mudai-black mb-4">3. 第三者への提供</h2>
              <p>
                当社は、以下の場合を除き、利用者の個人情報を第三者に提供することはありません。
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>利用者の同意がある場合</li>
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要な場合</li>
                <li>業務委託先に対して、業務の遂行に必要な範囲で提供する場合（この場合、委託先に対して適切な監督を行います）</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-mudai-black mb-4">4. 安全管理措置</h2>
              <p>
                当社は、個人情報の漏洩、滅失、毀損の防止その他の安全管理のために、
                必要かつ適切な措置を講じます。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-mudai-black mb-4">5. Cookieの使用</h2>
              <p>
                当社Webサイトでは、利用者の利便性向上およびアクセス解析のために
                Cookieを使用する場合があります。利用者はブラウザの設定により
                Cookieの受取を拒否することができますが、その場合、
                Webサイトの一部機能が利用できなくなる可能性があります。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-mudai-black mb-4">6. 個人情報の開示・訂正・削除</h2>
              <p>
                利用者は、当社が保有する自己の個人情報について、開示・訂正・削除を
                請求することができます。ご希望の場合は、下記の連絡先までお問い合わせください。
                ご本人であることを確認の上、合理的な期間内に対応いたします。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-mudai-black mb-4">7. 本ポリシーの変更</h2>
              <p>
                当社は、必要に応じて本ポリシーを変更することがあります。
                変更後のポリシーは、当社Webサイトに掲載した時点で効力を生じるものとします。
                重要な変更がある場合は、Webサイト上でお知らせいたします。
              </p>
            </div>

            <div className="pt-6 border-t border-mudai-gray-200">
              <h2 className="text-xl font-bold text-mudai-black mb-4">お問い合わせ窓口</h2>
              <p className="text-mudai-gray-500">
                個人情報の取扱いに関するお問い合わせは、下記までご連絡ください。
              </p>
              <div className="mt-4 text-mudai-gray-500">
                合同会社MUD-Ai<br />
                所在地: [登記住所]<br />
                メール: info@mudaisuki.com
              </div>
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
