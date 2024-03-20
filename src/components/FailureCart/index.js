import CartContext from '../../Context/CartContext'
import {
  FailureView,
  FailureHeading,
  FailureImage,
  FailureContent,
  FailureButton,
} from './styledComponents'

const FailureCart = props => {
  const {RetryButton} = props

  const onRetryBtn = () => {
    RetryButton()
  }
  return (
    <CartContext.Consumer>
      {value => {
        const {darkTheme} = value
        const bgColor = darkTheme ? '#0f0f0f' : '#f9f9f9'
        const textColor = darkTheme ? '#f9f9f9' : ' #0f0f0f'
        const failureImageURL = darkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        return (
          <FailureView bgColor={bgColor}>
            <FailureImage src={failureImageURL} alt="failure view" />
            <FailureHeading color={textColor}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureContent color={textColor}>
              We are having some trouble to complete your request <br />
              Please try again.
            </FailureContent>
            <FailureButton type="button" onClick={onRetryBtn}>
              Retry
            </FailureButton>
          </FailureView>
        )
      }}
    </CartContext.Consumer>
  )
}

export default FailureCart
