import api from "./client";
import { getCookie } from "../util/cookie";

const BASE_URL = "http://localhost:3334";

// 환자 리스트
export const getPatientAPI = () =>
  api.get(`${BASE_URL}/hospital/patient`, {
    headers: { Authorization: `Bearer ${getCookie("access_token")}` },
  });

// 환자 등록
export const postPatientAPI = (
  name: string,
  patNumber: string,
  birth: string,
  inDate: string,
  infoNumber: string,
  wardName: string,
  roomNumber: string
) =>
  api.post(
    `${BASE_URL}/hospital/patient`,
    {
      name: name,
      patNumber: patNumber,
      birth: birth,
      inDate: inDate,
      infoNumber: infoNumber,
      wardName: wardName,
      roomNumber: Number(roomNumber),
    },
    {
      headers: { Authorization: `Bearer ${getCookie("access_token")}` },
    }
  );
