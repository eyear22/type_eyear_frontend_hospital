import api from "./client";
import { getCookie } from "../util/cookie";

const BASE_URL = "http://localhost:3334";

// 병실 리스트
export const getRoomAPI = () =>
  api.get(`${BASE_URL}/hospital/roomList`, {
    headers: { Authorization: `Bearer ${getCookie("access_token")}` },
  });

// 병동 등록
export const postWardAPI = (name: string) =>
  api.post(
    `${BASE_URL}/hospital/ward`,
    { name: name },
    {
      headers: { Authorization: `Bearer ${getCookie("access_token")}` },
    }
  );

// 병실 등록
export const postRoomAPI = (
  roomNumber: string,
  limit: string,
  icuCheck: boolean,
  ward: string
) =>
  api.post(
    `${BASE_URL}/hospital/room`,
    {
      roomNumber: Number(roomNumber),
      limitPatient: Number(limit),
      icuCheck: icuCheck,
      wardName: ward,
    },
    {
      headers: { Authorization: `Bearer ${getCookie("access_token")}` },
    }
  );
