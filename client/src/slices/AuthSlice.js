import {createSlice} from '@reduxjs/toolkit'

const AuthSlice = createSlice({
    name: 'auth',
    initialState:{
      user: null,
      isAuthticate : false
    },
    reducers:{
        loginSucces : (state, action) => {
           state.user = action.payload;
           state.isAuthticate = true;
        },
        loginFailed : (state, action) => {
              state.user = action.payload;
              state.isAuthticate = false;            
        },
        logout : (state) => {
            state.user = null;
            state.isAuthticate = false;
        }
    }
})

export const {loginSucces, loginFailed, logout} = AuthSlice.actions;
export default AuthSlice.reducer;