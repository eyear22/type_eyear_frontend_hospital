import * as patientAPI from "../api/patient";

const POST_PATIENT = "POST_PATIENT";
const POST_PATIENT_SUCCESS = "POST_PATIENT_SUCCESS";
const POST_PATIENT_ERROR = "POST_PATIENT_ERROR";
const GET_PATIENT = "GET_PATIENT";
const GET_PATIENT_SUCCESS = "GET_PATIENT_SUCCESS";
const GET_PATIENT_ERROR = "GET_PATIENT_ERROR";

const initialState = {
  isLoading: null,
  data: null,
  error: null,
};

// 환자 리스트
export const GetPatient = () => async (dispatch: any) => {
  dispatch({ type: GET_PATIENT });
  try {
    const patientList = await patientAPI.getPatientAPI();
    dispatch({ type: GET_PATIENT_SUCCESS, patientList: patientList });
  } catch (e) {
    dispatch({ type: GET_PATIENT_ERROR, error: e });
  }
};

// 환자 등록
export const PostPatient =
  (
    name: string,
    patNumber: string,
    birth: string,
    inDate: string,
    infoNumber: string,
    wardName: string,
    roomNumber: string
  ) =>
  async (dispatch: any) => {
    dispatch({ type: POST_PATIENT });
    try {
      const patient = await patientAPI.postPatientAPI(
        name,
        patNumber,
        birth,
        inDate,
        infoNumber,
        wardName,
        roomNumber
      );
      dispatch({ type: POST_PATIENT_SUCCESS, patient: patient });
    } catch (e) {
      dispatch({ type: POST_PATIENT_ERROR, error: e });
    }
  };

export default function room(state = initialState, action: any) {
  switch (action.type) {
    case POST_PATIENT:
      return {
        ...state,
        isLoading: true,
        data: null,
        error: null,
      };
    case POST_PATIENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.patient.data,
        action: action,
        error: null,
      };
    case POST_PATIENT_ERROR:
      return {
        ...state,
        isLoading: false,
        data: null,
        action: action,
        error: action.error,
      };
    case GET_PATIENT:
      return {
        ...state,
        isLoading: true,
        data: null,
        error: null,
      };
    case GET_PATIENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.patientList.data,
        action: action,
        error: null,
      };
    case GET_PATIENT_ERROR:
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
