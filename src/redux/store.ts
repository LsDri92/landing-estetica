import { configureStore } from "@reduxjs/toolkit";
// import your reducers here

export const store = configureStore({
  reducer: {
    // yourSlice: yourReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
