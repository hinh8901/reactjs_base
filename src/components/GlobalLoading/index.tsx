import React, { useState } from "react"
import { CircularProgress } from "@mui/material"

import Backdrop from "../Backdrop"

interface GlobalLoadingAction {
  show: () => void
  hide: () => void
}

export const globalLoading: GlobalLoadingAction = {
  show: () => {},
  hide: () => {}
}

const GlobalLoading = () => {
  const [isShowLoading, setIsShowLoading] = useState<boolean>(false)

  globalLoading.show = () => setIsShowLoading(true)
  globalLoading.hide = () => setIsShowLoading(false)

  return (
    isShowLoading ?
      (
        <Backdrop>
          <CircularProgress />
        </Backdrop>
      )
      :
      <></>
  )
}

export default GlobalLoading