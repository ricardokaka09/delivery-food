import { stat } from "fs";
import { AuthLogin } from "../action";
import { ActionType } from "../actionType";
import { Auth } from "../interface";

const initialState = {
  authencation: false,
  loading: false,
  error: "",
  user: {},
};

const Authencation = (
  state: Auth = initialState,
  { type, payload }: AuthLogin
) => {
  switch (type) {
    case ActionType.LOGIN:
      return {
        ...state,
        payload,
      };
    default:
      return state;
  }
};

export default Authencation;
