import { createSlice } from "@reduxjs/toolkit";

const fetchSlice=createSlice({
    name:"fetching",
    initialState:{
        fetchedVideos:null,

    },
    reducers:{
        setFetchedVideos:(state,action)=>{
            state.fetchedVideos=action.payload;
        }
    },

});
export const {setFetchedVideos}=fetchSlice.actions;
export default fetchSlice.reducer;