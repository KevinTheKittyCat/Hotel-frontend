// src/slices/counterSlice.js
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RoomType, RoomsState } from '../types/roomTypes';

const initialState: RoomsState = {
    byId: {},
    allIds: [],
    all: [],
};

type RoomPayload = PayloadAction<{ document: RoomType }>;

export const RoomsSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {
        addRoom: (state, action: RoomPayload) => {
            const { document } = action.payload;
            state.byId[document.id] = document;
            state.allIds.push(document.id);
            state.all.push(document);
        },
        removeRoom: (state, action: RoomPayload) => {
            const { document } = action.payload;
            delete state.byId[document.id];
            state.allIds = state.allIds.filter(i => i !== document.id);
            state.all.push(document);
        },
        updateRoom: (state, action: RoomPayload) => {
            const { document } = action.payload;
            state.byId[document.id] = document;
            state.all = state.all.map(i => i.id === document.id ? document : i);
        },
    },
});

export const { addRoom, removeRoom, updateRoom } = RoomsSlice.actions;

export default RoomsSlice.reducer;
