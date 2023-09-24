import React from 'react'
import Send from '@mui/icons-material/Send'

import { useAppDispatch, useAppSelector } from '@/hooks/useAppSelector'
import { AuthActions } from '@/reduxSaga/Auth'
import Sidebar from '@/layouts/partials/Sidebar'
import { globalLoading } from '@/components/GlobalLoading'
import { globalModal } from '@/components/Modals/GlobalModal'
import { DialogContentText } from '@mui/material'

const Home = () => {
  const { isSignedIn } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()
  const handleItemClick = () => { }

  const LIST_ITEM = isSignedIn ? [
    { label: "Item 4", href: "/item-04", onClick: handleItemClick, icon: <Send /> },
    { label: "Item 5", href: "/item-05", onClick: handleItemClick, icon: <Send /> },
    {
      label: "Item 6",
      href: "/link-6",
      subMenu: [
        { label: "Item 6.1", href: "/item-61", onClick: handleItemClick, icon: <Send /> },
        {
          label: "Item 6.2", key: "6.2", subMenu: [
            { label: "Item 6.2.1", href: "/item-621", onClick: handleItemClick, icon: <Send /> },
            { label: "Item 6.2.2", href: "/item-622", onClick: handleItemClick, icon: <Send /> },
            {
              label: "Item 6.2.3", href: "/item-623", icon: <Send />, subMenu: [
                { label: "Item 6.2.3.1", href: "/item-6231", onClick: handleItemClick, icon: <Send /> }
              ]
            }
          ],
          href: "/link-62"
        },
        { label: "Item 6.3", href: "/item-63", onClick: handleItemClick, icon: <Send /> },
      ]
    },
    {
      label: "Logout", href: "/login", onClick: () => {
        dispatch(AuthActions.logoutSuccess())
      }
    }
  ] : [
    { label: "Item 1", href: "/item-01", onClick: handleItemClick, icon: <Send /> },
    { label: "Item 2", href: "/item-02", onClick: handleItemClick, icon: <Send /> },
    {
      label: "Item 3",
      href: "/link-3",
      subMenu: [
        { label: "Item 3.1", href: "/item-31", onClick: handleItemClick, icon: <Send /> },
        { label: "Item 3.2", href: "/item-32", onClick: handleItemClick, icon: <Send /> },
        {
          label: "Item 3.3", href: "/item-33", icon: <Send />, subMenu: [
            { label: "Item 3.3.1", href: "/item-331", onClick: handleItemClick, icon: <Send /> },
          ]
        },
      ]
    },
    {
      label: "Login", href: "/signed-in", onClick: () => {
        dispatch(AuthActions.loginSuccess())
      }
    },
  ]

  const openGlobalLoading = () => {
    globalLoading.show()
    setTimeout(() => {
      globalLoading.hide()
    }, 3000)
  }

  const openGlobalModal = () => {
    globalModal.open({
      title: "ThisKw's Modal",
      children: (
        <div
          style={{ height: "100%", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div>
            <h1 onClick={() => console.log("flow: click")}>GlobalModal: Click to Close</h1>
          </div>
        </div>
      )
    })
  }

  const openAlert = () => {
    globalModal.open({
      title: "Use Google's location service?",
      okText: "Đồng ý",
      cancelText: "Hủy bỏ",
      footer: null,
      closable: false,
      children: (
        <DialogContentText>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</DialogContentText>
      )
    })
  }

  return <div style={{ display: "flex" }}>
    <Sidebar options={LIST_ITEM} />
    <div>
      <h1>ReactJs's Base 2023 - {isSignedIn ? "Signed In" : "Logout!!!"}</h1>
      <button onClick={openGlobalLoading}>Open Global Loading In 3s</button>
      <button onClick={openGlobalModal}>Open Global Modal</button>
      <button onClick={openAlert}>Open Alert</button>
    </div>
  </div>
}

export default Home