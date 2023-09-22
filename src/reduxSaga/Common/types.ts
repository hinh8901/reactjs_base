import { ReactNode, ComponentType } from "react"

import {
  DialogProps,
  DialogTitleProps,
  DialogContentProps,
  DialogActionsProps,
} from "@mui/material"

export enum COMPONENT_TYPE {
  DEFAULT = "DEFAULT"
}

export interface GlobalModalState {
  open: boolean
  title?: DialogTitleProps["children"]
  children: ReactNode
  action?: ComponentType | null | COMPONENT_TYPE.DEFAULT
  okText?: ReactNode
  onOk?: () => void
  cancelText?: ReactNode
  onCancel?: () => void
  slots?: {
    dialog?: Omit<DialogProps, "children">
    title?: Omit<DialogTitleProps, "children">
    content?: Omit<DialogContentProps, "children">
    action?: DialogActionsProps
  }
}
