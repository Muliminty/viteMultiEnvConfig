import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL; // Vite 环境变量方式获取 API 地址

function buildUrlWithParams(params) {
  const queryString = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');
  return queryString;
}

const axiosInstance = axios.create({
  baseURL,
  timeout: 5000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器：在请求发送之前执行
axiosInstance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    // 比如添加公共的请求头等
    // config.headers['Authorization'] = 'Bearer your_token_here';
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器：在响应返回之后执行
axiosInstance.interceptors.response.use(
  (response) => {
    // 对响应数据做些什么
    return response.data;
  },
  (error) => {
    // 对响应错误做些什么
    // 比如统一处理错误信息等
    return Promise.reject(error);
  }
);

// 通用的 API 调用函数
const apiCall = async ({ url, method, params }) => {
  let requestUrl = url;
  if (method === 'get') {
    const u = buildUrlWithParams(params);
    requestUrl = `${url}?${u}`;
  }

  try {
    const response = await axiosInstance({
      url: requestUrl,
      method: method,
      params: method === 'get' ? {} : params,
    });
    return response;
  } catch (error) {
    console.log('error: ', error);
    throw error; // 或者 return null;
  }
};

export { axiosInstance, apiCall };
