import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CurrencyLabels } from "../domain/CurrencyLabels";

export interface CurrencyState {
  value: CurrencyLabels;
}

const initialState: CurrencyState = {
  value: CurrencyLabels.Dinar,
};

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setActiveCurrency: (state, action: PayloadAction<CurrencyLabels>) => {
      state.value = action.payload;
    },
  },
});

export const { setActiveCurrency } = currencySlice.actions;

export default currencySlice.reducer;
