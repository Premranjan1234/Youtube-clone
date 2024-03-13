
import {configureStore} from "@reduxjs/toolkit";
import appSlice from "./Appslice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import fetchSlice from "./fetchSlice";
const store=configureStore({
    reducer:{
        app:appSlice,
        search:searchSlice,
        chat:chatSlice,
        fetching:fetchSlice
    },
});

export default store;