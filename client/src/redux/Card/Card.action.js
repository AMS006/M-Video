import axios from 'axios'
import { addCardSuccess, cardDeleteSuccess, cardFail, cardRequest, cardSuccess } from './Card.reducer';

export const createCard = (card)=> async(dispatch) =>{
    try {
        dispatch(cardRequest())
        const cardData = await axios({
            method:"POST",
            url:"http://localhost:4000/card/create",
            data: card
        })
        return dispatch(addCardSuccess(cardData.data))
    } catch (error) {
        return dispatch(cardFail(error.response.data.message));
    }
}
export const deleteCard = (id) => async(dispatch) =>{
    try {
        dispatch(cardRequest())
        await axios({
            method:"DELETE",
            url:`http://localhost:4000/card/${id}`
        })
        dispatch(cardDeleteSuccess(id))
    } catch (error) {
        return dispatch(cardFail(error.response.data.message));
    }
}
export const getAllCard = (id)=> async(dispatch) =>{
    try {
        dispatch(cardRequest())
        const cardData = await axios({
            method:"GET",
            url:`http://localhost:4000/card/${id}`
        })
        return dispatch(cardSuccess(cardData.data))
    } catch (error) {
        return dispatch(cardFail(error.response.data.message));
    }
}