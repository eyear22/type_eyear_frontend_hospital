import api from "./client";
import { getCookie } from "../util/cookie";

const BASE_URL = "http://localhost:3334";

export const getReservationAPI = () =>
  api.get(`${BASE_URL}/hospital/allReservation`, {
    headers: { Authorization: `Bearer ${getCookie("access_token")}` },
  });

export const approveReservationAPI = (id: number, state: number) =>
  api.put(
    `${BASE_URL}/hospital/changeReservationState`,
    { reservationId: id, state: state },
    {
      headers: { Authorization: `Bearer ${getCookie("access_token")}` },
    }
  );
