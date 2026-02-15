/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudflare Pages用の静的エクスポート
  output: 'export',
  // 静的エクスポートでは画像最適化を無効化
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
