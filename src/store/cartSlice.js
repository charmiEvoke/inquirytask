import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{items:0},
    reducers:{
        addItems:(state,action)=>{
            console.log("state",action.payload,state.items)
            state.items = action.payload
            console.log("state",state.items)
           
        }
    } 
})
export const {addItems} = cartSlice.actions; 

export default cartSlice.reducer