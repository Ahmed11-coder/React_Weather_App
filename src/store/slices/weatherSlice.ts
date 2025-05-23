import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { WeatherInfo } from "../../types/types";
import { getWeatherInfo } from "../../utils/HelperFuncs.ts";
import { RootState } from "../store";

const initialState: WeatherInfo = await getWeatherInfo();

export const weatherSlice = createSlice({
    name: "weather",
    initialState,

    reducers: {
        setWeatherInfo: (state, action: PayloadAction<WeatherInfo>) => {
            state.air_quality = action.payload.air_quality;
            state.condition = action.payload.condition;
            state.current_temp = action.payload.current_temp;
            state.feelslike_temp = action.payload.feelslike_temp;
            state.gust_kph = action.payload.gust_kph;
            state.humidity = action.payload.humidity;
            state.nextDays = action.payload.nextDays;
            state.precip_mm = action.payload.precip_mm;
            state.previousDays = action.payload.previousDays;
            state.uv = action.payload.uv;
            state.vis_km = action.payload.vis_km;
            state.wind_chill = action.payload.wind_chill;
            state.wind_kph = action.payload.wind_kph;
        }
    }
})

export const { setWeatherInfo } = weatherSlice.actions;
export default weatherSlice.reducer;
export const selectWeather = (state: RootState) => state.weather;