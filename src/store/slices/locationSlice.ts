import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { isSearchedLocationState, LocationState } from "../../types/types";
import {getLocationInfo } from "../../utils/HelperFuncs.ts";
import { RootState } from "../store";

const initialState: LocationState = await getLocationInfo();
export const userLocation: isSearchedLocationState = {...initialState ,isSearch: false};

export const locationSlice = createSlice({
    name: 'location',
    initialState,

    reducers: {
        setLocation: (state, action: PayloadAction<LocationState>) => {
            state.city = action.payload.city;
            state.country = action.payload.country;
            state.locate = action.payload.locate;
            state.region = action.payload.region;
            state.continent = action.payload.continent;
            state.activeIndex = action.payload.activeIndex;
        }
    }
});

export const { setLocation } = locationSlice.actions;
export default locationSlice.reducer;
export const selectLocation = (state: RootState) => state.location;
