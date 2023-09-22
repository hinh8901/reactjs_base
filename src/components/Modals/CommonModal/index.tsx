import React from "react"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogProps
} from "@mui/material"

import { useAppSelector } from "@/hooks/useAppSelector"
import Action from "./partials/Action"

const CommonModal = React.forwardRef(function CommonModal(_props, ref: DialogProps["ref"]) {
  const {
    open,
    title,
    children,
    action,
    okText,
    onOk,
    cancelText,
    onCancel,
    slots
  } = useAppSelector(state => state.common.globalModal)

  return (
    <Dialog
      {...slots?.dialog}
      open={open}
      slots={{ backdrop: () => <></> }}
      ref={ref}
    >
      <DialogTitle {...slots?.title}>{title}</DialogTitle>
      <DialogContent {...slots?.content}>
        {children}
      </DialogContent>
      <DialogActions {...slots?.action}>
        <Action action={action} okText={okText} cancelText={cancelText} onOk={onOk} onCancel={onCancel} />
      </DialogActions>
    </Dialog>
  )
})

export default CommonModal