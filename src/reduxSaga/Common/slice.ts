import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { GlobalModalState } from "./types"

interface CommonState {
  globalModal: GlobalModalState
}

const initialState: CommonState = {
  globalModal: {
    open: false,
    children: null,
  },
}

const commonReducer = createSlice({
  name: "CommonRedux",
  initialState,
  reducers: {
    openGlobalModal: (state, action) => {
      state.globalModal = {
        ...state.globalModal,
        ...action.payload,
        open: true,
      }
    },
    closeGlobalModal: (state, action) => {
      state.globalModal = {
        ...state.globalModal,
        ...action.payload,
        open: false,
      }
    },
  },
})

export const CommonActions = commonReducer.actions

export default commonReducer.reducer
