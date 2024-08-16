import axios from "axios";
import { store } from "../app/store";

const baseUrl = process.env.VITE_APP_BASE_URL || 'http://159.203.142.44:4080/api/v1';

const APIService = axios.create({
  baseURL: baseUrl
});


APIService.interceptors.request.use(function (config) {
  // const token = store.getState().auth?.token;
  // config.headers.Authorization = token ? `Bearer ${token}` : null;
  return config;
});


export { APIService };
