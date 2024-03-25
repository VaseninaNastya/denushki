import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Mode } from "../domain/Mode";

export interface ModeState {
  value: Mode;
}

const initialState: ModeState = {
  value: Mode.Spending,
};

export const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setActiveMode: (state, action: PayloadAction<Mode>) => {
      state.value = action.payload;
    },
  },
});

export const { setActiveMode } = modeSlice.actions;

export default modeSlice.reducer;
