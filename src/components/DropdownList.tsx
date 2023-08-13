import React, { useState } from 'react'
import { Fade, Menu, MenuItem, MenuProps } from '@mui/material'

interface ListProps extends MenuProps {
  // menuItemList: any[]
}

const DropdownList = ({
  anchorEl,
  open,
  // menuItemList,
  onClose,
  ...rest
}: ListProps) => {
  return (
    <Menu
      {...rest}
      open={open}
      onClose={onClose}
      anchorEl={anchorEl}
      TransitionComponent={Fade}
    >
      {/* {menuItemList} */}
    </Menu>
  )
}

export default DropdownList
