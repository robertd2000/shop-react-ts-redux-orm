import { createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "../../utils/types";

const initialState = {
  currentCategory: ""
};

const slice = createSlice({
  name: "slice",
  initialState: initialState as IInitialState,
  reducers: {
    setCategory(state, action) {
      state.currentCategory = action.payload;
    }
  }
});

export const { setCategory } = slice.actions;
export default slice.reducer;
