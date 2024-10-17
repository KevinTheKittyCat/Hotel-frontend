// src/slices/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const RoomsSlice = createSlice({
    name: 'rooms',
    initialState: {
        byId: {},
        allIds: [],
        all: [],
    },
    reducers: {
        addRoom: (state, action) => {
            const { document } = action.payload;
            state.byId[document.id] = document;
            state.allIds.push(document.id);
            state.all.push(document);
        },
        removeRoom: (state, action) => {
            const { document } = action.payload;
            delete state.byId[document.id];
            state.allIds = state.allIds.filter(i => i !== document.id);
            state.all.push(document);
        },
        updateRoom: (state, action) => {
            const { document } = action.payload;
            state.byId[id] = document;
            state.all = state.all.map(i => i.id === document.id ? document : i);
        },
    },
});

export const { addRoom, removeRoom, updateRoom } = RoomsSlice.actions;

export default RoomsSlice.reducer;
