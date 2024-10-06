import {createSlice} from '@reduxjs/toolkit'

const ChatSlice = createSlice({
    name: 'chat',
    initialState:{
      chatUser: null,
      messages: [],
      chatType: undefined,
      chatData: undefined,
    },
    reducers:{
        selectUserForChat: (state, action) => {
           state.chatUser = action.payload;
        },
        clearChatUser: (state) => {
            state.chatUser = null;
        },
        selectChatType: (state, action) => {
            state.chatType = action.payload;
          },
        selectChatData: (state, action) => {
            state.chatData = action.payload;
        },
        selectChatMessages: (state, action) => {
            state.messages = action.payload;
        },
        addMessage: (state, action) => {
            state.messages = [...state.messages, action.payload];
        },
        closeChat: (state) => {
            state.chatType = undefined;
            state.chatData = undefined;
            state.messages = [];
        },
    }
})

export const {selectUserForChat, clearChatUser, selectChatType, selectChatData, selectChatMessages, addMessage, closeChat} = ChatSlice.actions;
export default ChatSlice.reducer;