export default function Footer() {
  return (
    <footer className="py-16 bg-mudai-gray-50 border-t border-mudai-gray-100">
      <div className="container-mudai">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="MUD-Ai"
                className="h-7 w-auto"
              />
              <span className="text-lg font-bold tracking-wider text-mudai-gray-700">
                MUD-Ai
              </span>
            </div>
            <p className="text-sm text-mudai-gray-400">
              合同会社MUD-Ai
            </p>
            <p className="text-sm text-mudai-gray-400 mt-1">
              無駄とAIのカケザンで、まだ見ぬ社会を創造する
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 text-base text-mudai-gray-500">
            <a
              href="/portfolio"
              className="hover:text-mudai-accent transition-colors"
            >
              ポートフォリオ
            </a>
            <a
              href="/terms"
              className="hover:text-mudai-accent transition-colors"
            >
              利用規約
            </a>
            <a
              href="/privacy"
              className="hover:text-mudai-accent transition-colors"
            >
              プライバシーポリシー
            </a>
            <a
              href="/profile"
              className="hover:text-mudai-accent transition-colors"
            >
              代表プロフィール
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-12 pt-8 border-t border-mudai-gray-200">
          <p className="text-sm text-mudai-gray-400">
            &copy; 2026 合同会社MUD-Ai. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://x.com/mudai_inc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mudai-gray-400 hover:text-mudai-accent transition-colors text-sm"
            >
              X
            </a>
            <a
              href="https://www.instagram.com/mudai_inc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mudai-gray-400 hover:text-mudai-accent transition-colors text-sm"
            >
              Instagram
            </a>
            <a
              href="https://note.com/mudai_inc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mudai-gray-400 hover:text-mudai-accent transition-colors text-sm"
            >
              Note
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
