import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path'
import envConfig from './env';
export default defineConfig(({ mode }) => {
  // 加载环境变量
  const env = envConfig[mode];

  console.log(
    `
      name:${env.VITE_NAME}
      url:${env.VITE_API_BASE_URL}
      port:${env.VITE_PORT}
    `
  )

  return {
    plugins: [react()],
    server: {
      host: '0.0.0.0',
      port: parseInt(env.VITE_PORT, 10),
    },
    presets: ["@babel/preset-react"],
    define: {
      'process.env': env
    },
    resolve: {
      alias: {
        // eslint-disable-next-line no-undef
        "@": resolve(__dirname, 'src'), // 路径别名
      },
    },
  };
});