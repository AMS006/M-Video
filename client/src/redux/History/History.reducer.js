import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userHistory : [],
    loading:"false",
    error:""
}
const historySlice = new createSlice({
    name:"history",
    initialState,
    reducers:{
        historyRequest:(state) =>{
            state.userHistory = []
            state.loading = true
        },
        historyAddSuccess:(state,action) =>{
            state.userHistory.push(action.payload.history)
            state.loading = false
        },
        historyGetSuccess:(state,action) =>{
            state.userHistory = action.payload.history
            state.loading = false
        },
        historyFail: (state,action) =>{
            state.loading = false
            state.error = action.payload.message
        }
    }
})

export const {historyRequest,historyAddSuccess,historyGetSuccess,historyFail} = historySlice.actions

export default historySlice.reducer