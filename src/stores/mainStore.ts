
import { configureStore } from '@reduxjs/toolkit';
import roomsSlice from './roomsSlice.js';

const store = configureStore({
    //user / auth
    reducer: {
        rooms: roomsSlice
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;