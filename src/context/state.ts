export interface IDefaultObjectState<T> {
  loading: boolean;
  data: T | null;
  error?: any;
}
export const defaultObjectState = <T>(
  objectProps?: T
): IDefaultObjectState<T> => ({
  loading: false,
  data: objectProps ? ({ ...objectProps } as T) : null,
  error: null,
});

export interface IDefaultArrayState<T> {
  loading: boolean;
  data: T[] | null;
  error?: any;
}
export const defaultArrayState = <T>(
  defaultData?: T[]
): IDefaultArrayState<T> => ({
  loading: false,
  data: defaultData ?? null,
  error: null,
});

export interface IUser {
  id: string;
  name: string;
  email: string;
  dob: string;
  created_at: string;
  updated_at: string;
}

export interface IState {
  alertMessage: string;
  userList: IDefaultArrayState<IUser>;
  selectedUser: IDefaultObjectState<IUser>;
  filteredUserList: IDefaultArrayState<IUser>;
}

export const initialState: IState = {
  alertMessage: "",
  userList: { ...defaultArrayState<IUser>() },
  selectedUser: { ...defaultObjectState<IUser>() },
  filteredUserList: { ...defaultArrayState<IUser>() },
};

export interface IAction {
  type: string;
  payload?: any;
}

export const ActionTypes = {
  SET_ALERT: "SET_ALERT",
  RESET_ALERT: "RESET_ALERT",
  FETCH_USER_LIST: "FETCH_USER_LIST",
  SET_USER: "SET_USER",
  UNSET_USER: "UNSET_USER",
  ADD_USER: "ADD_USER",
  UPDATE_USER: "UPDATE_USER",
  DELETE_USER: "DELETE_USER",
  SEARCH_IN_USER_LIST: "SEARCH_IN_USER_LIST",
  CLEAR_SEARCH_IN_USER_LIST: "CLEAR_SEARCH_IN_USER_LIST",
};
