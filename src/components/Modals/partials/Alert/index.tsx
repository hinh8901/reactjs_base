import React from "react"
import { DialogContentText, DialogContentTextProps } from "@mui/material"

interface AlertProps extends DialogContentTextProps { }

const Alert = (props: AlertProps) => {
  const { ...restProps } = props

  return <DialogContentText {...restProps} />
}

export default Alert