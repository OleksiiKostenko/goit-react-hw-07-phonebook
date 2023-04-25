import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = { filter: '' };

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter: {
      reducer(state, action) {
        state.filter = action.payload;
      },
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
export const getFilter = state => state.filter.filter;
