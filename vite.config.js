import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  console.log(`Running in ${mode} mode`);

  // 加载环境变量
  const env = loadEnv(mode, process.cwd());
  console.log('Loaded environment variables: ', env);

  return {
    plugins: [react()],
    server: {
      host: '0.0.0.0',
      port: parseInt(env.VITE_PORT, 10),
    },
    define: {
      'process.env': env
    }
  };
});