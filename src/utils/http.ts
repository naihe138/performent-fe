import axios from 'axios';
import { Plugin, App } from '@vue/runtime-core';
const instance = axios.create({
  baseURL: 'http://localhost:3009/lighthouse/',
  // timeout: 1000,
});

axios.interceptors.request.use((config) =>{
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
  return response;
}, function (error) {
  return Promise.reject(error);
});

export const http = async (url: string, data: any, config: any = {}) => {
  return await instance.post(url, data, config);
}

export const httpPlugin: Plugin = {
  install: (app: App) => app.provide('http', http)
}
