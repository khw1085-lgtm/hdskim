/** @type {import('next').NextConfig} */
const nextConfig = {
  // 실험적 기능 비활성화로 안정성 향상
  experimental: {
    // 필요시 추가 설정
  },
  // 웹팩 설정 조정
  webpack: (config, { isServer }) => {
    // 파일 시스템 접근 문제 완화
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};

export default nextConfig;
