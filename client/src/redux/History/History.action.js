import axios from 'axios'
import { historyAddSuccess, historyDeleteSuccess, historyFail, historyGetSuccess, historyRequest } from './History.reducer'

export const addUserHistory = (id) => async(dispatch) =>{
    try {
        dispatch(historyRequest)
        const history = await axios({
            method:"POST",
            url:"http://localhost:4000/history",
            data: {id}
        })
        dispatch(historyAddSuccess(history.data))
    } catch (error) {
        dispatch(historyFail(error))
    }
}
export const getAllUserHistory = () => async(dispatch) =>{
    try {
        const history = await axios({
            method:"GET",
            url:"http://localhost:4000/history"
        })
        dispatch(historyGetSuccess(history.data))
    } catch (error) {
        dispatch(historyFail(error))
    }
}
export const deleteHistory = (id) => async(dispatch) =>{
    try {
        dispatch(historyRequest())
        await axios({
            method:"DELETE",
            url:`http://localhost:4000/history/${id}`
        })
        dispatch(historyDeleteSuccess(id))
    } catch (error) {
        
    }
}