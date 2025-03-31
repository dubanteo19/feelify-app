import { createSlice } from "@reduxjs/toolkit";
interface InitialState {
  count: number;
}
const initialState: InitialState = {
  count: 10,
};
const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increaseCount: (state, action) => {
      state.count = state.count + action.payload;
    },
    setCount: (state, action) => {
      state.count = action.payload;
    },
  },
});
export const { increaseCount,setCount } = countSlice.actions;
export default countSlice.reducer;
