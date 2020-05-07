import React, { useState } from 'react'

import * as Styled from './styles'

const mainNavItems = [
  {
    title: 'Offener Brief',
    slug: '/'
  },
  {
    title: 'Mach mit!',
    slug: '/#mach-mit',
    emphasized: true
  }
]

const MainNav = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Styled.MainNav open={open}>
        {mainNavItems.map((item, index) => (
          <Styled.MainNavItem
            key={`nav-item-${index}`}
            to={item.slug}
            emphasized={item.emphasized}
            activeClassName="active"
            whileTap={{ scale: 0.9 }}
          >
            {item.title}
          </Styled.MainNavItem>
        ))}
      </Styled.MainNav>
      <Styled.ToogleMainNav open={open} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </Styled.ToogleMainNav>
    </>
  )
}

export default MainNav