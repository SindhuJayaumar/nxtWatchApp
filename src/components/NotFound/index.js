import Header from '../Header'
import NavigatorBar from '../NavigatorBar'
import CartContext from '../../Context/CartContext'
import './index.css'

import {
  NotfoundContainer,
  NotFoundImage,
  Heading,
  Content,
} from './styledComponents'

const NotFound = () => (
  <CartContext.Consumer>
    {value => {
      const {darkTheme} = value
      const bgColor = darkTheme ? '#0f0f0f' : '#f9f9f9'
      const textColor = darkTheme ? '#f9f9f9' : ' #0f0f0f'
      const notFoundImageUrl = darkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
      return (
        <>
          <Header />
          <NavigatorBar />
          <NotfoundContainer bgColor={bgColor}>
            <NotFoundImage src={notFoundImageUrl} alt="not found" />
            <Heading color={textColor}>Page Not Found</Heading>
            <Content color={textColor}>
              we are sorry, the page you requested could not be found.
            </Content>
          </NotfoundContainer>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default NotFound
