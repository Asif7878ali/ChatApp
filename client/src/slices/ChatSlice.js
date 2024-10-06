import {createSlice} from '@reduxjs/toolkit'

const ChatSlice = createSlice({
    name: 'chat',
    initialState:{
      chatUser: null,
      messages: [],
      selectedChatId: null,
    },
    reducers:{
        selectUserForChat: (state, action) => {
           state.chatUser = action.payload;
        },
        clearChatUser: (state) => {
            state.chatUser = null;
        },
        addMessage : (state, action) =>{
            const { message, chatId } = action.payload;
            state.messages[chatId] = state.messages[chatId] || [];
            state.messages[chatId].push(message);
        },
        selectChat: (state, action) => {
            state.selectedChatId = action.payload;
        },
        clearMessages: (state) => {
            state.messages = {};
            state.selectedChatId = null;
        },
    }
})

export const {selectUserForChat, clearChatUser, addMessage, selectChat, clearMessages} = ChatSlice.actions;
export default ChatSlice.reducer;