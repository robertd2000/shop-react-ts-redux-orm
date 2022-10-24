import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { ORM, createReducer } from "redux-orm";
import { api } from "../services/sionic.api";
import reducer from "./reducers";
const orm = new ORM();

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  orm: createReducer(orm),
  reducer
});

const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
