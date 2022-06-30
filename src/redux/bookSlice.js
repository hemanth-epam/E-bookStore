import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const initialState = {
    loading: false,
    books: [],
    error: '',
}

export const fetchBooks = createAsyncThunk('book/fetchBooks', () => {
    return axios
        .get('http://localhost:8081/books')
        .then((res) => {
            //  console.log(res.data);
            return res.data
        })
})

const bookSlice = createSlice({
    name: 'book',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            state.loading = false
            state.books = action.payload
            state.error = ''
        })
        builder.addCase(fetchBooks.rejected, (state, action) => {
            state.loading = false
            state.books = []
            state.error = action.error.message
        })
    },
})

export default bookSlice.reducer