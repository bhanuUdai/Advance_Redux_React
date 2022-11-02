import { createSlice } from "@reduxjs/toolkit";


const initialQuestionState={question:false}

const questionSlice=createSlice({
    name:'question',
    initialState:initialQuestionState,
    reducers:{
        arrLengthGreater(state)
        {
            state.question=true;
        },
        arrLengthLess(state)
        {
            state.question=false
        }
    }
})


export const questionActions=questionSlice.actions;
export default questionSlice.reducer;