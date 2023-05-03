import { createSlice} from '@reduxjs/toolkit'

const initialState = {
    notificationCard:false
}


const weasepanelSlice = createSlice({
    name: 'weasepanel',
    initialState,
    reducers: {
        setNotification: (state, action) => {
         state.notificationCard = action.payload
        },
    }

})


export const { setNotification } = weasepanelSlice.actions;

export default weasepanelSlice.reducer


// Selectors
export const selectNotificationCard = (state) => state.weasepanel.notificationCard



