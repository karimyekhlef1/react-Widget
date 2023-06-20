// counterReducer.js
import { createSlice } from '@reduxjs/toolkit';

const Slice = createSlice({
  name: 'Slice',
  initialState: {
    OpenWidget:false,
    WidgetSize:"small",
    searchWidget:false,

    
  },
  reducers: {
    handleOpenWidget: (state) => {
      state.OpenWidget = !state.OpenWidget;
    },
    handleWidgetSize :(state) =>{
      if (state.WidgetSize=== "small"){
        state.WidgetSize= "large"
      }else{
        state.WidgetSize= "small"
      }
    },
    handelSearchWidget : (state,action) =>{
      if (action.payload){
        state.searchWidget = action.payload
      }else{
        state.searchWidget = ! state.searchWidget  
      }
    }

  },
});

export const { handelSearchWidget,handleOpenWidget , handleWidgetSize } = Slice.actions;
export default Slice.reducer;
