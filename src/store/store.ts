import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './slices/locationSlice.ts';

export const store = configureStore({
    reducer: {
        location: locationReducer,
    }
})

export type AppState = typeof store;

export type RootState = ReturnType<AppState["getState"]>;
export type AppDispatch = AppState["dispatch"];