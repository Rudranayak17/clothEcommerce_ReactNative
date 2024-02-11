import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../types/reducerType";
import { User } from "../types/types";

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
    loading: true,
    error: null
}



const authSlice = createSlice(
    {
        name: "auth",
        initialState,
        reducers: {
            loginUser: (state, action: PayloadAction<User>) => {
                state.user = action.payload;
                state.isAuthenticated = true;
                state.loading = false;
                state.error=null; // Reset error on successful login
            },
            registerUser: (state, action: PayloadAction<User>) => { 
                state.user = action.payload;
                state.isAuthenticated = true;
                state.loading = false;
                state.error=null; // Reset error on successful registion
            },
            logoutUser: (state) => {
                state.user = null;
                state.isAuthenticated = false;
                state.loading = false;
                state.error=null; //Reset error on logout
          
              },
              setError:(state,action:PayloadAction<string>)=>{
                  state.error=action.payload;
              }
        }

    }
)

export default authSlice.reducer