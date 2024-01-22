/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { iSWYS, iSubscribe } from "../types/Interface";


const initialState = {
    currentMember: {} as iSWYS | null,
    currentSubscriber: {} as iSubscribe | null,
};

const ReduxState = createSlice({
    name: "swys",
    initialState,
    reducers: {
        User: (state, { payload } : PayloadAction<iSWYS>) => 
        {
            state.currentMember = payload
        },
        
        Subscriber: (state, { payload } : PayloadAction<iSubscribe>) => 
        {
            state.currentSubscriber = payload
        },
    },
});

export const { User, Subscriber } = ReduxState.actions;

export default ReduxState.reducer;