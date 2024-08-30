import {createSlice} from '@reduxjs/toolkit'

const AuthSlice = createSlice({
    name: 'auth',
    initialState:{
      user: null,
      isAuthticate : false
    },
    reducers:{
        loginSucces : () => {

        },
        loginFailed : () => {
            
        },
        logout : () => {
            
        }
    }
})

export const {loginSucces, loginFailed, logout} = AuthSlice.actions;
export default AuthSlice.reducer;