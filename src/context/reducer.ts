import { ActionTypes, IAction, IState, IUser, initialState } from "./state";

const isEmptyObject = (obj: any) =>
  !obj || (Object.keys(obj).length === 0 && obj.constructor === Object);

interface ISearchInArray<T> {
  objectArray: T[];
  toFind: string;
}
const searchInObjectsArray = <T>({
  objectArray,
  toFind,
}: ISearchInArray<T>): T[] => {
  const regex = new RegExp(`${toFind}`, "gi");

  return objectArray.filter((object) => {
    if (object === null || object === undefined) return false;

    if (typeof object !== "object" || isEmptyObject(object)) return false;

    return Object.values(object).some((value) => {
      if (typeof value !== "string") return false;
      return value.match(regex);
    });
  });
};

export const reducer = (
  state: IState = initialState,
  action: IAction
): IState => {
  switch (action.type) {
    case ActionTypes.SET_ALERT:
      return { ...state, alertMessage: action.payload };

    case ActionTypes.RESET_ALERT:
      return { ...state, alertMessage: "" };

    case ActionTypes.FETCH_USER_LIST:
      return { ...state, userList: action.payload };

    case ActionTypes.SEARCH_IN_USER_LIST: {
      const registrationList = state.userList.data;
      if (!registrationList?.length) return state;

      return {
        ...state,
        filteredUserList: {
          ...state.filteredUserList,
          data: searchInObjectsArray<IUser>({
            objectArray: registrationList,
            toFind: action.payload,
          }),
        },
      };
    }

    case ActionTypes.CLEAR_SEARCH_IN_USER_LIST:
      return {
        ...state,
        filteredUserList: { ...state.filteredUserList, data: null },
      };

    case ActionTypes.SET_USER: {
      const registrationList = state.userList.data;
      if (!registrationList?.length) return state;

      const selectedUser = registrationList.find(
        (user) => user.id === action.payload
      );
      if (!selectedUser) return state;

      return {
        ...state,
        selectedUser: { ...state.selectedUser, data: selectedUser },
      };
    }

    case ActionTypes.UNSET_USER:
      return {
        ...state,
        selectedUser: { ...state.selectedUser, data: null },
      };

    default:
      return state;
  }
};
