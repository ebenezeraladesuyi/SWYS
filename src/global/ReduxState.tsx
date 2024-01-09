/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { iSWYS } from "../types/Interface";


const initialState = {
    currentMember: {} as iSWYS | null,
};

const ReduxState = createSlice({
    name: "swys",
    initialState,
    reducers: {
        User: (state, { payload } : PayloadAction<iSWYS>) => 
        {
            state.currentMember = payload
        },
    },
});

export const { User, } = ReduxState.actions;

export default ReduxState.reducer;