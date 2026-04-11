import axios from "axios";

const devhubApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

devhubApi.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

devhubApi.interceptors.response.use((config) => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

export { devhubApi };
