import axios from 'axios';
import { Plugin, App } from '@vue/runtime-core';
const instance = axios.create({
  baseURL: 'http://localhost:3009/lighthouse/',
  // timeout: 1000,
});

instance.interceptors.request.use((config) =>{
  return config;
}, function (error) {
  return Promise.reject(error);
});

instance.interceptors.response.use((response) => {
  if (response.data.code) {
    return response.data.result;
  } else {
    return Promise.reject(response);
  }
}, function (error) {
  return Promise.reject(error);
});

export const http = async (url: string, data: any, config: any = {}) => {
  return await instance.post(url, data, config);
}

export const httpPlugin: Plugin = {
  install: (app: App) => app.provide('http', http)
}
