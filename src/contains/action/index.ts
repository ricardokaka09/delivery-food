import { ActionType } from "../actionType";
import { Auth } from "../interface";

export interface AuthLogin {
  type: ActionType.LOGIN;
  payload: Auth;
}
