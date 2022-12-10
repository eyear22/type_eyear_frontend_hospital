import api from "./client";
import { getCookie } from "../util/cookie";

const BASE_URL = "http://localhost:3334";

// 병동 등록
export const postWardAPI = (name: string) =>
  api.post(
    `${BASE_URL}/hospital/ward`,
    { name: name },
    {
      headers: { Authorization: `Bearer ${getCookie("access_token")}` },
    }
  );
