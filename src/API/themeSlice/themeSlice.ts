import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const stateFromLocalStorage = JSON.parse(localStorage.getItem('darkMode') || 'false');

const themeInitialState = { darkMode: stateFromLocalStorage };

export const themeSlice = createSlice({
  name: 'themeSlice',
  reducerPath: 'theme',
  initialState: themeInitialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
      localStorage.setItem('darkMode', JSON.stringify(action.payload));
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
