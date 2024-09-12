import { createSlice } from "@reduxjs/toolkit";
import data from "../data/contacts.json";

// export const addContact = createAction("contacts/addContact");

// export const deleteContact = createAction("contacts/deleteContact");

const slice = createSlice({
  name: "contacts",
  initialState: { items: data },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = slice.actions;
export const selectContacts = (state) => state.contacts.items;
export default slice.reducer;
