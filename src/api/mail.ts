import api from "./client";

const BASE_URL = "http://localhost:3334";

export const getMailDetailAPI = (id: number) =>
  api.get(`${BASE_URL}/post/detail/${id}`);
