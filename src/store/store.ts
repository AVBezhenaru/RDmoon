import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { itemsReducer } from "../components/App/model/slice/itemsSlice";

const rootReducer = combineReducers({
  items: itemsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

declare global {
  export type RootState = ReturnType<typeof rootReducer>;
}
