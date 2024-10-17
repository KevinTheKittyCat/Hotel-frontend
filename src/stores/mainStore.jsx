
import { configureStore } from '@reduxjs/toolkit';
import roomsSlice from './roomsSlice';

const store = configureStore({
    //user / auth
    reducer: {
        rooms: roomsSlice
    }
});

export default store;
