import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "合同会社MUD-Ai | 無駄とAIのカケザンで、まだ見ぬ社会を創造する",
  description:
    "スライドデザイン、AI開発・自動化、デジタルコンテンツ制作、コミュニティ運営、まちづくり＆場づくり。無駄とAIのカケザンで、まだ見ぬ社会を創造する。",
  keywords: ["MUD-Ai", "スライドデザイン", "AI", "自動化", "コンテンツ制作", "コミュニティ", "まちづくり", "合同会社"],
  openGraph: {
    title: "合同会社MUD-Ai",
    description: "無駄とAIのカケザンで、まだ見ぬ社会を創造する",
    url: "https://mudaisuki.com",
    siteName: "合同会社MUD-Ai",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "合同会社MUD-Ai",
    description: "無駄とAIのカケザンで、まだ見ぬ社会を創造する",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className="font-sans antialiased text-mudai-black bg-white text-base">
        {children}
      </body>
    </html>
  );
}
