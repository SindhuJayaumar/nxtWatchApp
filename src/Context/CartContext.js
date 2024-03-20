import React from 'react'

const CartContext = React.createContext({
  darkTheme: false,
  changeThemeButton: () => {},
  activeTab: 'Home',
  changeTab: () => {},
})

export default CartContext
