import axios from "axios";
import { getCookie, setCookie } from "../util/cookie";

const BASE_URL = "http://localhost:3334";

const api = axios.create({
  baseURL: `${BASE_URL}`,
});

// 요청시 accessToken 계속 보내주기
api.interceptors.request.use(function (config: any) {
  const access_token = getCookie("access_token");
  const refresh_token = getCookie("refresh_token");
  console.log(access_token);
  console.log(refresh_token);

  if (!access_token || !refresh_token) {
    config.headers["access_token"] = null;
    config.headers["refresh_token"] = null;
    return config;
  }
  if (config.headers && access_token && refresh_token) {
    config.headers["Authorization"] = `Bearer ${access_token}`;
    config.headers["refresh_token"] = `Bearer ${refresh_token}`;
    return config;
  }
});

api.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (err) {
    const originalConfig = err.config;
    if (err.response && err.response.status === 401) {
      const refresh_token = originalConfig.headers["refresh_token"];
      try {
        axios({
          url: `${BASE_URL}/auth/refresh`,
          method: "GET",
          headers: {
            Authorization: refresh_token,
          },
        }).then(async (res) => {
          setCookie("access_token", res.data.tokens.access_token);
          setCookie("refresh_token", res.data.tokens.refresh_token);
          api.defaults.headers.common.Authorization = `Bearer ${res.data.tokens.access_token}`;
          originalConfig.headers[
            "Authorization"
          ] = `Bearer ${res.data.tokens.refresh_token}`;
          console.log("original request", originalConfig);
          window.location.reload();
          return api(originalConfig);
        });
      } catch (err) {
        console.log("token 갱신 에러");
      }
    }
    return Promise.reject(err);
  }
);

export default api;
