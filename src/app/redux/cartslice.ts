"use client";
import { createSlice , PayloadAction} from "@reduxjs/toolkit";

interface CartItem{
    _id:number;
    title:string;
    description:string;
    image:string;
    price:number;

}

const cartSlice = createSlice({
    name:"Cart",
    initialState: [] as CartItem[],
    reducers:{
        add(state,action:PayloadAction<CartItem>){
            state.push(action.payload);
        },
        remove(state, action:PayloadAction<number>){
            return state.filter((item)=> item._id !== action.payload);
        },
    },    

});

export const { add , remove}= cartSlice.actions;
export default cartSlice.reducer;