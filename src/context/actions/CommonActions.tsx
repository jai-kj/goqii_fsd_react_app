import axios, { AxiosRequestConfig } from "axios";
import { useCallback } from "react";
import {
  ActionTypes,
  defaultArrayState,
  defaultObjectState,
  IDefaultArrayState,
  IDefaultObjectState,
} from "../state";

axios.defaults.baseURL = "http://localhost:8000";

const CommonActions = (
  dispatch: React.Dispatch<{ type: string; payload?: unknown }>
) => {
  interface ISetAlertParams {
    message: string;
    time?: number;
  }
  const setAlert = useCallback(
    ({ message, time = 5000 }: ISetAlertParams) => {
      dispatch({ type: ActionTypes.SET_ALERT, payload: message });
      setTimeout(() => dispatch({ type: ActionTypes.RESET_ALERT }), time);
    },
    [dispatch]
  );

  interface IHandleLoadingParams<T> {
    type: string;
    payload: IDefaultObjectState<T> | IDefaultArrayState<T>;
    status: boolean;
  }
  const handleLoading = useCallback(
    <T,>({ type, payload, status }: IHandleLoadingParams<T>) =>
      dispatch({
        type,
        payload: {
          ...payload,
          loading: status,
        },
      }),
    [dispatch]
  );

  interface IHandleErrorParams<T> {
    type: string;
    payload: IDefaultObjectState<T> | IDefaultArrayState<T>;
    error: any;
  }
  const handleError = useCallback(
    <T,>({ type, payload, error }: IHandleErrorParams<T>) => {
      setAlert({ message: error });
      dispatch({ type, payload: { ...payload, error } });
    },
    [dispatch, setAlert]
  );

  interface IHandleRequestParams<T> {
    type: string;
    params: AxiosRequestConfig;
    isObject?: boolean;
    objectProps?: T;
    isArray?: boolean;
    showAlert?: boolean;
  }

  const handleRequest = useCallback(
    async <T,>({
      type,
      params,
      isObject = true,
      objectProps,
      isArray = false,
      showAlert = true,
    }: IHandleRequestParams<T>) => {
      if (!isObject && !isArray) {
        return;
      }

      const result = isObject
        ? { ...defaultObjectState<T>(objectProps) }
        : { ...defaultArrayState<T>() };
      handleLoading({ type, payload: result, status: true });
      try {
        const response = await axios.request(params);
        const { data, message } = response.data;

        result.data = data;
        if (showAlert) {
          setAlert({ message });
        }

        dispatch({ type, payload: result });
      } catch (err: any) {
        handleError({
          type,
          payload: result,
          error: axios?.isAxiosError(err)
            ? err.response?.data?.message ?? err?.request?.statusText
            : err,
        });
      } finally {
        handleLoading({ type, payload: result, status: false });
      }
    },
    [dispatch, handleLoading, handleError, setAlert]
  );

  return { setAlert, handleLoading, handleError, handleRequest };
};

export default CommonActions;
