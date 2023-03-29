import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    card:[],
    loading: false,
    error:""
}
const deleteCard = (id,card) =>{
    let cards = []

    cards = card.filter((card) => card._id !== id)

    return cards
}
const cardSlice = new createSlice({
    name:"Card",
    initialState,
    reducers:{
        cardRequest:(state) =>{
            state.loading = false
        },
        cardSuccess:(state,action) =>{
            state.loading = false
            state.card = action.payload.cards
        },
        addCardSuccess:(state,action) =>{
            state.loading = false
            state.card.push(action.payload.card)
        },
        cardDeleteSuccess:(state,action) =>{
            let card = deleteCard(action.payload,current(state.card))
            state.card = card
            state.loading = false

        },
        cardFail:(state,action) =>{
            state.loading = false
            state.error = action.payload.message
        }
    }
})
export const {cardRequest,cardSuccess,cardFail,addCardSuccess,cardDeleteSuccess} = cardSlice.actions

export default cardSlice.reducer