
import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
        darkMode:false,
        results:false
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen;

        },
        
        closeMenu:(state)=>{
            state.isMenuOpen=false;
        },
        openMenu:(state)=>{
            state.isMenuOpen=true;
        },
        toggleDarkMode:(state)=>{
            state.darkMode=!state.darkMode;
        },
        setResults:(state,action)=>{
            state.results=action.payload;
        }
        

    },
})
export const {toggleMenu,closeMenu,toggleDarkMode,setResults,openMenu}=appSlice.actions;
export default appSlice.reducer;