import * as authAPI from "../api/auth";

const AUTH = "AUTH"; //로그인 요청
const AUTH_SUCCESS = "AUTH_SUCCESS";
const AUTH_ERROR = "AUTH_ERROR";

const initialState = {
  isLoading: null,
  data: null,
  error: null,
};

// 로그인
export const LoginAPI =
  (id: string, password: string) => async (dispatch: any) => {
    dispatch({ type: AUTH });
    try {
      const login = await authAPI.LoginReq(id, password);
      dispatch({ type: AUTH_SUCCESS, login: login });
    } catch (e) {
      dispatch({ type: AUTH_ERROR, error: e });
    }
  };

export default function auth(state = initialState, action: any) {
  switch (action.type) {
    case AUTH:
      return {
        ...state,
        isLoading: true,
        data: null,
        error: null,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.login.data,
        action: action,
        error: null,
      };
    case AUTH_ERROR:
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
