import { useCallback } from "react";
import { ActionTypes, IUser } from "../state";
import CommonActions from "./CommonActions";

const UserActions = (
  dispatch: React.Dispatch<{ type: string; payload?: unknown }>
) => {
  const { handleRequest } = CommonActions(dispatch);

  const fetchUserList = useCallback(
    () =>
      handleRequest<IUser>({
        type: ActionTypes.FETCH_USER_LIST,
        params: {
          method: "GET",
          url: "/user/list",
        },
        isArray: true,
        isObject: false,
        showAlert: false,
      }),
    [handleRequest]
  );

  const searchInUserList = useCallback(
    (toFind: string) =>
      dispatch({
        type: ActionTypes.SEARCH_IN_USER_LIST,
        payload: toFind,
      }),
    [dispatch]
  );

  const resetSearch = useCallback(
    () => dispatch({ type: ActionTypes.CLEAR_SEARCH_IN_USER_LIST }),
    [dispatch]
  );

  interface IAddUserParams {
    name: string;
    email: string;
    dob: string;
  }
  const addNewUser = useCallback(
    async (data: IAddUserParams) => {
      await handleRequest({
        type: ActionTypes.ADD_USER,
        params: {
          method: "POST",
          url: "/user",
          data,
        },
      });
      fetchUserList();
    },
    [handleRequest, fetchUserList]
  );

  const setSelectedUser = useCallback(
    (id: string) =>
      dispatch({
        type: ActionTypes.SET_USER,
        payload: id,
      }),
    [dispatch]
  );

  const unsetSelectedUser = useCallback(
    () =>
      dispatch({
        type: ActionTypes.UNSET_USER,
      }),
    [dispatch]
  );

  interface IUserIdParams {
    id: string;
  }
  interface IEditUserParams extends IUserIdParams, IAddUserParams {}
  const updateUser = useCallback(
    async (data: IEditUserParams) => {
      await handleRequest({
        type: ActionTypes.UPDATE_USER,
        params: {
          method: "PUT",
          url: `/user`,
          data: {
            name: data.name,
            email: data.email,
            dob: data.dob,
          },
          params: {
            id: data.id,
          },
        },
      });
      unsetSelectedUser();
      fetchUserList();
    },
    [handleRequest, fetchUserList, unsetSelectedUser]
  );

  const deleteUser = useCallback(
    async (data: IUserIdParams) => {
      await handleRequest({
        type: ActionTypes.DELETE_USER,
        params: {
          method: "DELETE",
          url: "/user",
          params: {
            id: data.id,
          },
        },
      });
      unsetSelectedUser();
      fetchUserList();
    },
    [handleRequest, fetchUserList, unsetSelectedUser]
  );

  return {
    fetchUserList,
    searchInUserList,
    resetSearch,
    addNewUser,
    setSelectedUser,
    unsetSelectedUser,
    updateUser,
    deleteUser,
  };
};

export default UserActions;
