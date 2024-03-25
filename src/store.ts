import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./reducers/modeSlice";
import categorieReducer from "./reducers/categorieSlice";
import currencyReducer from "./reducers/currencySlice";

const store = configureStore({
  reducer: {
    mode: modeReducer,
    categorie: categorieReducer,
    currency: currencyReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
