import * as mailAPI from "../api/mail";

const GET_MAIL_DETAIL = "GET_MAIL_DETAIL";
const GET_MAIL_DETAIL_SUCCESS = "GET_MAIL_DETAIL_SUCCESS";
const GET_MAIL_DETAIL_ERROR = "GET_MAIL_DETAIL_ERROR";

const initialState = {
  isLoading: null,
  data: null,
  error: null,
};

// 보낸 우편 상세
export const GetMailDetail = (id: number) => async (dispatch: any) => {
  dispatch({ type: GET_MAIL_DETAIL });
  try {
    const mailDetail = await mailAPI.getMailDetailAPI(id);
    dispatch({ type: GET_MAIL_DETAIL_SUCCESS, mail: mailDetail });
  } catch (e) {
    dispatch({ type: GET_MAIL_DETAIL_ERROR, error: e });
  }
};

export default function mail(state = initialState, action: any) {
  switch (action.type) {
    case GET_MAIL_DETAIL:
      return {
        ...state,
        isLoading: true,
        data: null,
        error: null,
      };
    case GET_MAIL_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.mail.data,
        action: action,
        error: null,
      };
    case GET_MAIL_DETAIL_ERROR:
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
