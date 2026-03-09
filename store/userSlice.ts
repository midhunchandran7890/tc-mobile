import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/**
 * USER TYPE
 */
export type User = {
  id: number;
  name: string;
  email: string;
};

/**
 * STATE TYPE
 */
type UserState = {
  users: User[];
  loading: boolean;
  error: string | null;
};

/**
 * ASYNC THUNK (API CALL)
 */
export const fetchUsers = createAsyncThunk("userSlice/fetchUsers", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return (await response.json()) as User[];
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    loading: false,
    error: null,
  } as UserState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch users";
      });
  },
});

export default userSlice.reducer;
