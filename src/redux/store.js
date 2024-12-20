import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter.slice.js";

export const store=configureStore({
    reducer:{ 
      counter:counterReducer
    }

})