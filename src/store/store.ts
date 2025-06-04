import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './slices/locationSlice';
import weatherReducer from './slices/weatherSlice';

export const store = configureStore({
    reducer: {
        location: locationReducer,
        weather: weatherReducer,
    }
})

export type AppState = typeof store;

export type RootState = ReturnType<AppState["getState"]>;
export type AppDispatch = AppState["dispatch"];