import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [
      { id: '0', name: "adal" },
      { id: '999', name: "tilin" }
    ],
  },
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favSlice.actions;

export default favSlice.reducer;
