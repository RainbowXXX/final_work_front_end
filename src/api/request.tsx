import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',
  timeout: 5000,
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在请求发送之前做一些处理，例如添加请求头
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 对响应数据做一些处理，例如解析响应数据等
    return response.data;
  },
  (error) => {
    // 对响应错误做些什么
    return Promise.reject(error);
  }
);

// 导出封装后的axios实例
export default function request(config: any) {
  return instance(config);
}
