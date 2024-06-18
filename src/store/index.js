import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./productsReduser";

const rootReducer = combineReducers({
  products: productReducer
});

export const store = configureStore({ reducer: rootReducer });
