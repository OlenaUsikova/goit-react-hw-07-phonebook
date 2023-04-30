import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://644bb18e4bdbc0cc3a97f239.mockapi.io/contacts"

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, {rejectWithValue}) => {
    try {
        const response = await axios.get("contacts");
        return response.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
  });
