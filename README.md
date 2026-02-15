# 合同会社MUD-Ai - コーポレートプロジェクト

> 無駄とAIのカケザンで、まだ見ぬ社会を創造する

合同会社MUD-Aiのコーポレートサイト、ブランディング素材、書類テンプレートを管理するモノレポです。

## ディレクトリ構成

```
mudai-corporate/
├── website/               # Next.jsコーポレートサイト
│   ├── src/
│   │   ├── app/           # App Router ページ
│   │   │   ├── profile/   # 代表プロフィール
│   │   │   ├── terms/     # 利用規約
│   │   │   └── privacy/   # プライバシーポリシー
│   │   └── components/    # UIコンポーネント
│   ├── public/            # 静的アセット
│   └── package.json
│
├── branding/              # ブランディング素材
│   ├── logo/              # ロゴ（SVG, favicon）
│   ├── business-card/     # 名刺テンプレート
│   └── email-signature/   # メール署名
│
├── templates/             # 書類テンプレート
│   ├── contracts/         # 契約書（業務委託, NDA）
│   └── invoices/          # 帳票（請求書, 見積書, 領収書）
│
├── docs/                  # 会社資料
│   ├── company-profile.md
│   ├── services.md
│   └── pitch-deck.md
│
├── .github/
│   └── workflows/
│       └── deploy.yml     # Cloudflare Pages自動デプロイ
│
├── .gitignore
├── CONTRIBUTING.md
└── README.md
```

## 技術スタック

- **フレームワーク:** Next.js 14 (App Router)
- **言語:** TypeScript
- **スタイリング:** Tailwind CSS
- **フォント:** Noto Sans JP
- **ホスティング:** Cloudflare Pages
- **メール:** Google Workspace (info@mudaisuki.com)
- **CI/CD:** GitHub Actions

## カラーパレット

| 用途 | コード |
|---|---|
| ブラック | `#0A0A0A` |
| ホワイト | `#FFFFFF` |
| グレー | `#6B7280` |
| アクセント（エメラルドグリーン） | `#10B981` |

## セットアップ

### 前提条件

- Node.js 20以上
- npm 10以上

### ローカル開発

```bash
cd website
npm install
cp .env.example .env.local
npm run dev
```

ブラウザで http://localhost:3000 を開いて確認。

### ビルド

```bash
cd website
npm run build
npx serve out
```

## デプロイ

### Cloudflare Pages（自動デプロイ）

`main` ブランチへのpushで自動的にCloudflare Pagesへデプロイされます。

**GitHub Secrets の設定:**

1. Cloudflare Dashboard > My Profile > API Tokens
2. 「Create Token」>「Cloudflare Pages: Edit」テンプレートでトークン生成
3. GitHub > Settings > Secrets and variables > Actions に以下を登録:
   - `CLOUDFLARE_API_TOKEN`: APIトークン
   - `CLOUDFLARE_ACCOUNT_ID`: アカウントID（Cloudflare Dashboard左下）

### 手動デプロイ

```bash
cd website
npm run build
npx wrangler pages deploy out --project-name=mudai-corporate
```

### Google Workspace メール設定

1. Google Workspace で mudaisuki.com ドメインを認証
2. DNS に Google Workspace 用 MX レコードを追加
3. info@mudaisuki.com アカウントを作成

## 開発コマンド一覧

| コマンド | 説明 |
|---|---|
| `npm run dev` | 開発サーバー起動 (http://localhost:3000) |
| `npm run build` | 本番ビルド（静的エクスポート） |
| `npm run start` | 本番サーバー起動 |
| `npm run lint` | ESLintによるコード検査 |

## 書類テンプレートの使い方

### 契約書

`templates/contracts/` 内のMarkdownファイルを編集。`[クライアント名]` 等のプレースホルダーを置換。

### 帳票（請求書・見積書・領収書）

`templates/invoices/` 内のReactコンポーネントをNext.jsプロジェクトに組み込んで使用。
ブラウザの印刷機能（Ctrl+P / Cmd+P）でPDF出力。

### 名刺

`branding/business-card/card-template.html` をブラウザで開き、印刷でPDF出力。

## ライセンス

MIT License

---

合同会社MUD-Ai | mudaisuki.com
