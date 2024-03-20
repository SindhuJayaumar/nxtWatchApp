import {Component} from 'react'
import Header from '../Header'
import NavigatorBar from '../NavigatorBar'

import CartContext from '../../Context/CartContext'

import {SavedVideoContainer, Heading} from './styledComponents'

class SavedVideos extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {darkTheme} = value
          const bgColor = darkTheme ? '#0f0f0f' : '#f9f9f9'
          const textColor = darkTheme ? '#f9f9f9' : ' #0f0f0f'

          return (
            <div data-testid="savedVideos">
              <Header />
              <NavigatorBar />
              <SavedVideoContainer bgColor={bgColor}>
                <Heading color={textColor}>saved videos</Heading>
              </SavedVideoContainer>
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default SavedVideos
