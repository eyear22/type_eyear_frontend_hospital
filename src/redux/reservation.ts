import * as reservationAPI from "../api/reservation";

const GET_RESERVATION = "GET_RESERVATION";
const GET_RESERVATION_SUCCESS = "GET_RESERVATION_SUCCESS";
const GET_RESERVATION_ERROR = "GET_RESERVATION_ERROR";
const APPROVE_RESERVATION = "APPROVE_RESERVATION";
const APPROVE_RESERVATION_SUCCESS = "APPROVE_RESERVATION_SUCCESS";
const APPROVE_RESERVATION_ERROR = "APPROVE_RESERVATION_ERROR";

const initialState = {
  isLoading: null,
  data: null,
  error: null,
};

// 예약 내역
export const GetReservation = () => async (dispatch: any) => {
  dispatch({ type: GET_RESERVATION });
  try {
    const reservationList = await reservationAPI.getReservationAPI();
    dispatch({
      type: GET_RESERVATION_SUCCESS,
      reservationList: reservationList,
    });
  } catch (e) {
    dispatch({ type: GET_RESERVATION_ERROR, error: e });
  }
};

// 예약 승인 여부 결정
export const ApproveReservation =
  (id: number, state: number) => async (dispatch: any) => {
    dispatch({ type: APPROVE_RESERVATION });
    try {
      const reservation = await reservationAPI.approveReservationAPI(id, state);
      dispatch({
        type: APPROVE_RESERVATION_SUCCESS,
        reservation: reservation,
      });
    } catch (e) {
      dispatch({ type: APPROVE_RESERVATION_ERROR, error: e });
    }
  };

export default function reservation(state = initialState, action: any) {
  switch (action.type) {
    case GET_RESERVATION:
      return {
        ...state,
        isLoading: true,
        data: null,
        error: null,
      };
    case GET_RESERVATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.reservationList.data,
        action: action,
        error: null,
      };
    case GET_RESERVATION_ERROR:
      return {
        ...state,
        isLoading: false,
        data: null,
        action: action,
        error: action.error,
      };
    case APPROVE_RESERVATION:
      return {
        ...state,
        isLoading: true,
        data: null,
        error: null,
      };
    case APPROVE_RESERVATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.reservation.data,
        action: action,
        error: null,
      };
    case APPROVE_RESERVATION_ERROR:
      return {
        ...state,
        isLoading: false,
        data: null,
        action: action,
        error: action.error,
      };
    default:
      return state;
  }
}
