import { getCookie } from "../util/cookie";
import api from "./client";

const BASE_URL = "http://localhost:3334";

// 오늘의 우편
export const getTodayMailAPI = () =>
  api.get(`${BASE_URL}/hospital/main`, {
    headers: { Authorization: `Bearer ${getCookie("access_token")}` },
  });
