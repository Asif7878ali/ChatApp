import {createSlice} from '@reduxjs/toolkit'

const ChatSlice = createSlice({
    name: 'chat',
    initialState:{
      chatUser: null,
      messages: [],
    },
    reducers:{
        selectUserForChat: (state, action) => {
           state.chatUser = action.payload;
        },
        clearChatUser: (state) => {
            state.chatUser = null;
        },
       
        selectChatMessages: (state, action) => {
            state.messages = action.payload;
        },
        addMessage: (state, action) => {
            state.messages = [...state.messages, action.payload];
        },
        closeChat: (state) => {
            state.messages = [];
        },
    }
})

export const {selectUserForChat, clearChatUser, selectChatMessages, addMessage, closeChat } = ChatSlice.actions;
export default ChatSlice.reducer;