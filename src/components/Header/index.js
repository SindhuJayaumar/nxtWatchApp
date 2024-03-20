import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {Link, withRouter} from 'react-router-dom'
import {BsMoon} from 'react-icons/bs'
import {FiSun} from 'react-icons/fi'

import CartContext from '../../Context/CartContext'

import {
  NavHeader,
  WebsiteImage,
  ProfileImage,
  ThemeButton,
  ContextListItem,
  LogoutButton,
  ModalContainer,
  ModalContent,
  ButtonCard,
  CloseButton,
  ConformButton,
  ContextListContainer,
} from './styledComponents'

const Header = props => {
  const onClickLogOut = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <CartContext.Consumer>
      {value => {
        const {darkTheme, changeThemeButton} = value
        const onClickThemeButton = () => {
          changeThemeButton()
        }

        const bgColor = darkTheme ? '#0f0f0f' : '#f9f9f9'
        const textColor = darkTheme ? '#f9f9f9' : ' #0f0f0f'
        const WebsitelogoImage = darkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        return (
          <NavHeader bgColor={bgColor}>
            <Link to="/">
              <WebsiteImage src={WebsitelogoImage} alt="website logo" />
            </Link>
            <ContextListContainer>
              <ContextListItem>
                <ThemeButton
                  data-testid="theme"
                  color={textColor}
                  onClick={onClickThemeButton}
                >
                  {darkTheme ? <FiSun /> : <BsMoon />}
                </ThemeButton>
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </ContextListItem>

              <ContextListItem>
                <Popup
                  modal
                  trigger={
                    <LogoutButton
                      data-testid="iconButton"
                      type="button"
                      color={textColor}
                    >
                      Logout
                    </LogoutButton>
                  }
                >
                  {close => (
                    <>
                      <ModalContainer>
                        <ModalContent>
                          Are you sure, you want to logout
                        </ModalContent>

                        <ButtonCard>
                          <CloseButton
                            type="button"
                            data-testid="close"
                            onClick={() => close()}
                          >
                            cancel
                          </CloseButton>

                          <ConformButton type="button" onClick={onClickLogOut}>
                            Confirm
                          </ConformButton>
                        </ButtonCard>
                      </ModalContainer>
                    </>
                  )}
                </Popup>
              </ContextListItem>
            </ContextListContainer>
          </NavHeader>
        )
      }}
    </CartContext.Consumer>
  )
}

export default withRouter(Header)
