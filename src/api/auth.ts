import api from "./client";

const BASE_URL = "http://localhost:3334";

export const LoginReq = (id: string, password: string) =>
  api.post(`${BASE_URL}/auth/login`, {
    hospitalId: id,
    password: password,
  });
