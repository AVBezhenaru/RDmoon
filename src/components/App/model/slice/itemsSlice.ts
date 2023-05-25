import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item, ItemsState } from "../../types/ItemsState";

const initialState: ItemsState = {
  items: [],
};

const itemsSlice = createSlice({
  name: "itemsSlice",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      state.items = [action.payload, ...state.items];
      // state.items.unshift(action.payload);
    },
    deleteItem: (state) => {
      state.items.pop();
    },
  },
});

export const { actions: itemsActions, reducer: itemsReducer } = itemsSlice;
