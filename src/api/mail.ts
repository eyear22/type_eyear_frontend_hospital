import api from "./client";
import { getCookie } from "../util/cookie";

const BASE_URL = "http://localhost:3334";

export const getMailDetailAPI = (id: number) =>
  api.get(`${BASE_URL}/post/detail/${id}`, {
    headers: { Authorization: `Bearer ${getCookie("access_token")}` },
  });
