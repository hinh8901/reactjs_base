import styled, { keyframes } from "styled-components"
import { Box } from "@mui/material"
import Colors from "@/themes/Colors"

const opacity = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`

const Backdrop = styled(Box)`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: ${Colors.backdrop};
  backdrop-filter: blur(3px);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${opacity} 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`

export default Backdrop