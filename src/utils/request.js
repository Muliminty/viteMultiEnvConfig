import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL; // Vite 环境变量方式获取 API 地址

const axiosInstance = axios.create({
  baseURL,
  timeout: 5000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config) => {
    // 可在此处添加请求前的处理逻辑，如添加 token 等
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response) => {
    // 可在此处添加统一处理响应的逻辑
    return response.data; // 只返回响应数据部分
  },
  (error) => {
    // 处理错误响应
    return Promise.reject(error);
  }
);

export default axiosInstance;
