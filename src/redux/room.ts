import * as roomAPI from "../api/room";

const POST_WARD = "POST_WARD";
const POST_WARD_SUCCESS = "POST_WARD_SUCCESS";
const POST_WARD_ERROR = "POST_WARD_ERROR";
const POST_ROOM = "POST_ROOM";
const POST_ROOM_SUCCESS = "POST_ROOM_SUCCESS";
const POST_ROOM_ERROR = "POST_ROOM_ERROR";
const GET_ROOM = "GET_ROOM";
const GET_ROOM_SUCCESS = "GET_ROOM_SUCCESS";
const GET_ROOM_ERROR = "GET_ROOM_ERROR";

const initialState = {
  isLoading: null,
  data: null,
  error: null,
};

// 병실 리스트
export const GetRoom = () => async (dispatch: any) => {
  dispatch({ type: GET_ROOM });
  try {
    const roomList = await roomAPI.getRoomAPI();
    dispatch({ type: GET_ROOM_SUCCESS, roomList: roomList });
  } catch (e) {
    dispatch({ type: GET_ROOM_ERROR, error: e });
  }
};

// 병동 등록
export const PostWard = (name: string) => async (dispatch: any) => {
  dispatch({ type: POST_WARD });
  try {
    const mailDetail = await roomAPI.postWardAPI(name);
    dispatch({ type: POST_WARD_SUCCESS, room: mailDetail });
  } catch (e) {
    dispatch({ type: POST_WARD_ERROR, error: e });
  }
};

// 병싫 등록
export const PostRoom =
  (roomNumber: string, limit: string, icuCheck: boolean, ward: string) =>
  async (dispatch: any) => {
    dispatch({ type: POST_ROOM });
    try {
      const mailDetail = await roomAPI.postRoomAPI(
        roomNumber,
        limit,
        icuCheck,
        ward
      );
      dispatch({ type: POST_ROOM_SUCCESS, room: mailDetail });
    } catch (e) {
      dispatch({ type: POST_ROOM_ERROR, error: e });
    }
  };

export default function room(state = initialState, action: any) {
  switch (action.type) {
    case POST_WARD:
      return {
        ...state,
        isLoading: true,
        data: null,
        error: null,
      };
    case POST_WARD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.room.data,
        action: action,
        error: null,
      };
    case POST_WARD_ERROR:
      return {
        ...state,
        isLoading: false,
        data: null,
        action: action,
        error: action.error,
      };
    case POST_ROOM:
      return {
        ...state,
        isLoading: true,
        data: null,
        error: null,
      };
    case POST_ROOM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.room.data,
        action: action,
        error: null,
      };
    case POST_ROOM_ERROR:
      return {
        ...state,
        isLoading: false,
        data: null,
        action: action,
        error: action.error,
      };
    case GET_ROOM:
      return {
        ...state,
        isLoading: true,
        data: null,
        error: null,
      };
    case GET_ROOM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.roomList.data,
        action: action,
        error: null,
      };
    case GET_ROOM_ERROR:
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
