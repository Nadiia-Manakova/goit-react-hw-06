import { createSlice } from "@reduxjs/toolkit";

// export const setStatusFilter = createAction("filter/setStatusFilter");

const slice = createSlice({
  name: "filter",
  initialState: {
    status: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { changeFilter } = slice.actions;
export const selectNameFilter = (state) => state.filter.status;
export default slice.reducer;
