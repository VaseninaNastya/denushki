import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./domain/modeSlice";
import categorieReducer from "./domain/categorieSlice";
import currencyReducer from "./domain/currencySlice";

const store = configureStore({
  reducer: {
    mode: modeReducer,
    categorie: categorieReducer,
    currency: currencyReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
