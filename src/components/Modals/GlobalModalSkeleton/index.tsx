import React from "react"
import { Modal } from "@mui/material"
import styled from "styled-components"

import { useAppDispatch, useAppSelector } from "@/hooks/useAppSelector"
import Backdrop from "../../Backdrop"
import { CommonActions } from "@/reduxSaga/Common"

const GlobalModal = () => {
  const { children, open,  ...globalSetup } = useAppSelector(state => state.common.globalModal)
  const dispatch = useAppDispatch()

  return <></>

  // return (
  //   <Modal
  //     open={open}
  //     // {...globalSetup}
  //     slots={{ backdrop: BackdropStyled }}
  //     onClose={(_event, reason) => {
  //       console.log("flow: ", reason)
  //       // dispatch(CommonActions.closeGlobalModal({}))
  //       // props.setIsOpen(false)
  //     }}
  //   >
  //     {/* {children ?? <></>} */}
  //   </Modal>
  // )
}

export default GlobalModal

const BackdropStyled = styled(Backdrop)`
  z-index: -1;
`