import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CategorieLabels } from "./CategorieLabels";

export interface CategorieState {
  value: CategorieLabels;
}

const initialState: CategorieState = {
  value: CategorieLabels.Food,
};

export const categorieSlice = createSlice({
  name: "categorie",
  initialState,
  reducers: {
    setActiveCategorie: (state, action: PayloadAction<CategorieLabels>) => {
      state.value = action.payload;
    },
  },
});

export const { setActiveCategorie } = categorieSlice.actions;

export default categorieSlice.reducer;
