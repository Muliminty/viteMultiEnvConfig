
import { apiCall, axiosInstance } from '@/utils/request';

// 具体的 API 调用函数示例
export const getDemo = async (params) => {
  return apiCall({ url: '/api/page', method: 'get', params });
};

// 你可以根据需要添加更多的 API 调用函数
export const postDemo = async (data) => {
  return apiCall({ url: '/api/page', method: 'post', params: data });
};


// 直接使用 axiosInstance 发起请求，并进行特殊处理
export const specialRequest = async () => {
  try {
    const response = await axiosInstance.get('/api/special-endpoint', {
      // 特殊的配置，例如自定义 headers
      headers: {
        'X-Custom-Header': 'CustomValue',
      },
    });
    console.log('Special response:', response);
  } catch (error) {
    console.log('Special request error:', error);
  }
};