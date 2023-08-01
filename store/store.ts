import {configureStore} from "@reduxjs/toolkit";
import changeReducer from './changeSlice'
export const store = configureStore({
    reducer:{
        changeReducer
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;