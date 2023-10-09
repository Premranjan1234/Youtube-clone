import { createSlice } from "@reduxjs/toolkit";

const chatSlice=createSlice({
    name:"chat",
    initialState:{
        messages:[],

    },
    reducers:{
        addMessage:(action,state)=>{
            state.messages.push(action.payload);
        },
    },

});
export const {addMessage}=chatSlice.actions;
export default chatSlice.reducer;