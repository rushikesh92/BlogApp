import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    available: false,
    posts : []
}

const postSlice = createSlice({
    name:"post",
    initialState,
    reducers: {
        storePosts : (state,action)=>{
            state.posts=action.payload;
            state.available=true;
        }
    }
})

export const  {storePosts} = postSlice.actions;

export default postSlice.reducer;