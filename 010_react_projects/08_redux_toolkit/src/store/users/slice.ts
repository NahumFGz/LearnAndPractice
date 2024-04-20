import { createSlice } from "@reduxjs/toolkit";

export interface User {
    name: string;
    email: string;
    github: string;
}

export interface UserWithId extends User {
    id: string;
}

const initialState: UserWithId[] = [
    {
        id: "1",
        name: "Yazman Rodriguez",
        email: "yasmanito@gmail.com",
        github: "leo",
      },
      {
        id: "2",
        name: "Jhon Doe",
        email: "leo@gmail.com",
        github: "leo",
      },
      {
        id: "3",
        name: "Haakon Dahlberg",
        email: "haakom@gmail.com",
        github: "leo",
      },
]

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {}
});

export const usersReducer = usersSlice.reducer;