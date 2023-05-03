import { configureStore } from '@reduxjs/toolkit'
import weasepanelSlice from './weasepanel/weasepanelSlice'


export const store = configureStore({
    reducer: {
        weasepanel: weasepanelSlice
    }
})