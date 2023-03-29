import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    user:undefined,
    loading:false,
    error:""
}
const userSlice = createSlice({
    name:"User",
    initialState,
    reducers:{
        userRequest:(state) =>{
            state.loading = true
        },
        userSuccess:(state,action) =>{
            state.loading = false
            state.user = action.payload.user
        },
        userLogout:(state) =>{
            state.loading = false
            state.user = undefined
        },
        userFail:(state,action) =>{
            state.loading = false
            state.error = action.payload.message
        }
    }
})
export const {userRequest,userSuccess,userFail,userLogout} = userSlice.actions

export default userSlice.reducer