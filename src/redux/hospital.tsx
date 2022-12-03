import * as hospitalAPI from "../api/hospital";

const GET_TODAY_MAIL = "GET_TODAY_MAIL";
const GET_TODAY_MAIL_SUCCESS = "GET_TODAY_MAIL_SUCCESS";
const GET_TODAY_MAIL_ERROR = "GET_TODAY_MAIL_ERROR";

const initialState = {
  isLoading: null,
  data: null,
  error: null,
};

// 오늘의 영상 우편
export const GetTodayMail = () => async (dispatch: any) => {
  dispatch({ type: GET_TODAY_MAIL });
  try {
    const mailDetail = await hospitalAPI.getTodayMailAPI();
    dispatch({ type: GET_TODAY_MAIL_SUCCESS, mail: mailDetail });
  } catch (e) {
    dispatch({ type: GET_TODAY_MAIL_ERROR, error: e });
  }
};

export default function hospital(state = initialState, action: any) {
  switch (action.type) {
    case GET_TODAY_MAIL:
      return {
        ...state,
        isLoading: true,
        data: null,
        error: null,
      };
    case GET_TODAY_MAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.mail.data,
        action: action,
        error: null,
      };
    case GET_TODAY_MAIL_ERROR:
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
