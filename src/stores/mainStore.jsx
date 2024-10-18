
import { configureStore } from '@reduxjs/toolkit';
import roomsSlice from './roomsSlice.ts';

const store = configureStore({
    //user / auth
    reducer: {
        rooms: roomsSlice
    }
});

export default store;
