import { defineConfig } from 'vite'

export default defineConfig({
  // 서버 설정
  server: {
    port: 3000, // 서버 포트 번호
    open: true, // 서버 시작 시 브라우저 자동 열기
    watch: {
      usePolling: true,
    },
  },

  // 빌드 설정
  build: {
    outDir: 'dist', // 빌드된 파일들이 저장될 디렉토리
    sourcemap: true, // 소스맵 생성 여부
    minify: 'esbuild', // 압축 방법 (esbuild는 기본 값)
  },

  // 경로 설정
  resolve: {
    alias: {
      '@': '/src', // src 디렉토리를 @로 alias
    },
  },
})
