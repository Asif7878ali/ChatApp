import {configureStore} from '@reduxjs/toolkit';
import AuthSlice from '../slices/AuthSlice.js';
import ChatSlice from '../slices/ChatSlice.js'

const Store = configureStore({
    reducer:{
        auth: AuthSlice,
        chat: ChatSlice
    }
})
export default Store;