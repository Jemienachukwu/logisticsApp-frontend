import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { orderListReducer } from "./reducers/OrderReducer";
import {
  userLoginReducer,
  userRegisterReducer,
  HomeVerifyReducer,
  UserProfileReducer,
} from "./reducers/UserReducer";
import imageUploadReducer from "./reducers/UploadImgReducer";

const reducer = combineReducers({
  homeVerify: HomeVerifyReducer,
  orderList: orderListReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userProfile: UserProfileReducer,
  uploadImg: imageUploadReducer,
});
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};
const midddleware = [thunk];
export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...midddleware))
);
