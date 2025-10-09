import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    const api_url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(api_url);
    const data = await response.json();
    return data;
});

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchUsers.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const selectAllUsers = (state) => state.users.users;
export const getUsersStatus = (state) => state.users.status;
export const getUsersError = (state) => state.users.error;

export default usersSlice.reducer;
