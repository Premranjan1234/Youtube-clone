
import {configureStore} from "@reduxjs/toolkit";
import appSlice from "./Appslice";
import searchSlice from "./searchSlice";
const store=configureStore({
    reducer:{
        app:appSlice,
        search:searchSlice,
    },
});

export default store;