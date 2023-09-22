import { Menu as MenuProSidebar, MenuItem as MenuItemProSidebar } from "react-pro-sidebar"
import styled from "styled-components"

import Colors from "@/themes/Colors"

export const Menu = styled(MenuProSidebar)`
  height: 100vh;
`

export const MenuItem = styled(MenuItemProSidebar)`
  & a.ps-active {
    background-color: ${Colors.primary};
    color: ${Colors.white};
    &:hover {
      background-color: ${Colors.primary};
      color: ${Colors.white};
    }
  }
`