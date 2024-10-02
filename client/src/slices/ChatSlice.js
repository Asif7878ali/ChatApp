import {createSlice} from '@reduxjs/toolkit'

const ChatSlice = createSlice({
    name: 'chat',
    initialState:{
      chatUser: null,
    },
    reducers:{
        selectUserForChat: (state, action) => {
           state.chatUser = action.payload;
        },

        clearChatUser: (state) => {
            state.chatUser = null;
        }
    }
})

export const {selectUserForChat, clearChatUser} = ChatSlice.actions;
export default ChatSlice.reducer;