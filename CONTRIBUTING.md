# コントリビューションガイド

合同会社MUD-Aiプロジェクトへの貢献に関するガイドラインです。

## コーディング規約

### 言語・フレームワーク

- TypeScript を使用（`any` 型の使用は最小限に）
- React コンポーネントは関数コンポーネントで記述
- Next.js の App Router パターンに従う

### 命名規則

| 対象 | 規則 | 例 |
|---|---|---|
| ファイル名（コンポーネント） | PascalCase | `Header.tsx` |
| ファイル名（ユーティリティ） | camelCase | `formatCurrency.ts` |
| 変数・関数 | camelCase | `handleClick` |
| 定数 | SCREAMING_SNAKE_CASE | `TAX_RATE` |
| 型・インターフェース | PascalCase | `LineItem` |
| CSSクラス | kebab-case（Tailwind推奨） | `container-mudai` |

### フォーマット

- インデント: スペース2つ
- セミコロン: あり
- クォート: ダブルクォート
- 行末の空白: なし
- ファイル末尾の改行: あり

### ディレクトリ構成

```
src/
├── app/           # ページ・レイアウト（App Router）
├── components/    # 再利用可能なUIコンポーネント
├── lib/           # ユーティリティ関数・定数
└── types/         # 型定義
```

## コミットメッセージ規約

### フォーマット

```
<type>: <subject>

<body>（任意）
```

### Type一覧

| Type | 説明 |
|---|---|
| `feat` | 新機能の追加 |
| `fix` | バグ修正 |
| `docs` | ドキュメントの変更 |
| `style` | コードの意味に影響しない変更（空白、フォーマット等） |
| `refactor` | リファクタリング |
| `test` | テストの追加・修正 |
| `chore` | ビルドプロセス・補助ツールの変更 |

### 例

```
feat: Hero セクションにアニメーションを追加

スクロール時にフェードインするアニメーションを
Intersection Observer APIで実装
```

## ブランチ戦略

### メインブランチ

- `main` - 本番環境（Firebase Hosting にデプロイ）

### 作業ブランチ

- `feature/<機能名>` - 新機能の開発
- `fix/<修正内容>` - バグ修正
- `docs/<ドキュメント名>` - ドキュメントの更新

### ワークフロー

1. `main` から作業ブランチを切る
2. 作業ブランチで開発
3. Pull Request を作成
4. レビュー後 `main` にマージ
5. GitHub Actions が自動デプロイ

```bash
# 例: 新機能の開発
git checkout -b feature/dark-mode
# ... 開発 ...
git add .
git commit -m "feat: ダークモード対応"
git push origin feature/dark-mode
# GitHub上でPull Requestを作成
```

## Pull Request

### PR作成時のチェックリスト

- [ ] `npm run build` が成功する
- [ ] `npm run lint` でエラーがない
- [ ] レスポンシブ対応を確認した
- [ ] 既存機能に影響がない

### PRの書き方

```markdown
## 概要
この変更の目的を簡潔に説明

## 変更内容
- 変更点1
- 変更点2

## 確認方法
動作確認の手順を記載
```

---

合同会社MUD-Ai
