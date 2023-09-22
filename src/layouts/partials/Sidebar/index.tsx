import React, { useMemo } from 'react'
import { Sidebar as ReactProSidebar, SubMenu, MenuItemProps } from 'react-pro-sidebar'
import { Link, useLocation } from 'react-router-dom'

import { Menu, MenuItem } from './style'

interface MenuItemConfiguration extends MenuItemProps {
  label?: string
  href: string
  subMenu?: MenuItemConfiguration[]
}

interface SidebarProps {
  options: MenuItemConfiguration[]
}

type ArrayOfConfigurationHref = MenuItemConfiguration["href"][]

const Sidebar = (props: SidebarProps) => {
  const { options } = props
  const { pathname } = useLocation()

  const flatOptionsRelationship = (options: SidebarProps['options'], parentHref: ArrayOfConfigurationHref = []) => {
    const flatResult: ArrayOfConfigurationHref[] = []
    options.forEach((option) => {
      const { subMenu, href } = option
      if (!subMenu || subMenu.length < 1) return parentHref ? flatResult.push([...parentHref, href]) : flatResult.push([href])
      flatResult.push(...flatOptionsRelationship(subMenu, [...parentHref, href]))
    })
    return flatResult
  }

  const renderMenu = (options: SidebarProps['options']) => {
    return options.map((option, index) => {
      const { subMenu, label, href = "", ...restProps } = option
      const isHrefMatched = arrayOfHrefMatched?.includes(href)
      if (!subMenu || subMenu.length < 1) return (
        <MenuItem
          {...restProps}
          component={<Link to={href} />}
          key={index}
          active={isHrefMatched}
        >
          {label}
        </MenuItem>
      )
      return (
        <SubMenu
          label={label}
          key={index}
          defaultOpen={isHrefMatched}
        >
          {renderMenu(subMenu)}
        </SubMenu>
      )
    })
  }

  const arrayOfHrefMatched = useMemo(() => {
    const flatRelationship = flatOptionsRelationship(options)
    return flatRelationship.find((path) => path[path.length - 1] === pathname)
  }, [options, pathname])

  const menuRendered = useMemo(() => renderMenu(options), [options])

  return (
    <ReactProSidebar>
      <Menu>
        {menuRendered}
      </Menu>
    </ReactProSidebar>
  )
}

export default Sidebar