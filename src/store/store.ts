import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './slices/locationSlice.ts';
import weatherReducer from './slices/weatherSlice.ts';

export const store = configureStore({
    reducer: {
        location: locationReducer,
        weather: weatherReducer,
    }
})

export type AppState = typeof store;

export type RootState = ReturnType<AppState["getState"]>;
export type AppDispatch = AppState["dispatch"];