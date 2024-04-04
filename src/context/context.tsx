import { createContext, useContext, useMemo, useReducer } from "react";
import CommonActions from "./actions/CommonActions";
import { reducer } from "./reducer";
import { initialState } from "./state";
import UserActions from "./actions/UserActions";

const StateContext = createContext(initialState);
const DispatchContext = createContext<
  React.Dispatch<{ type: string; payload?: unknown }> | undefined
>(undefined);

export const ContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export const useUIState = () => useContext(StateContext);

export const useUIDispatch = () => {
  const dispatch = useContext(DispatchContext);

  if (!dispatch) throw new Error("Use dispatch within a Dispatch Provider");
  const { setAlert } = CommonActions(dispatch);
  const {
    fetchUserList,
    searchInUserList,
    resetSearch,
    addNewUser,
    setSelectedUser,
    unsetSelectedUser,
    updateUser,
    deleteUser,
  } = UserActions(dispatch);

  return useMemo(
    () => ({
      setAlert,
      fetchUserList,
      searchInUserList,
      resetSearch,
      addNewUser,
      setSelectedUser,
      unsetSelectedUser,
      updateUser,
      deleteUser,
    }),
    [
      setAlert,
      fetchUserList,
      searchInUserList,
      resetSearch,
      addNewUser,
      setSelectedUser,
      unsetSelectedUser,
      updateUser,
      deleteUser,
    ]
  );
};
