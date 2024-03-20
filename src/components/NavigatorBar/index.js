import {AiFillHome} from 'react-icons/ai'
import {FiTrendingUp} from 'react-icons/fi'
import {GiGamepad} from 'react-icons/gi'
import {HiSaveAs} from 'react-icons/hi'

import {
  NavigationCard,
  NavigationOptions,
  NavLink,
  NavContainer,
  NavText,
  ContactCard,
  ContactInfo,
  ContactImg,
  ContactContent,
  ContactHeading,
  NavigationSmallCard,
} from './styledComponents'
import CartContext from '../../Context/CartContext'

import './index.css'

const NavigatorBar = () => (
  <CartContext.Consumer>
    {value => {
      const {darkTheme, activeTab, changeTab} = value
      const bgColor = darkTheme ? '#0f0f0f' : '#f9f9f9'
      const textColor = darkTheme ? '#f9f9f9' : ' #0f0f0f'
      const activeTabBg = darkTheme ? '#94a3b8' : '#616e7c'

      const OnChangeHomeTab = () => {
        changeTab('Home')
      }
      const OnChangeTrendingTab = () => {
        changeTab('Trending')
      }

      const OnChangeGamingTab = () => {
        changeTab('Gaming')
      }

      const OnChangeSavedVideosTab = () => {
        changeTab('SavedVideos')
      }

      return (
        <NavigationCard bgColor={bgColor}>
          <NavigationOptions>
            <NavLink to="/">
              <NavContainer
                key="home"
                activeTabBg={activeTab === 'Home' ? activeTabBg : 'none'}
                onClick={OnChangeHomeTab}
              >
                <AiFillHome
                  size="25"
                  color={activeTab === 'Home' ? ' #ff0b37' : ' #616e7c'}
                />
                <NavText color={textColor}>Home</NavText>
              </NavContainer>
            </NavLink>

            <NavLink to="/trending">
              <NavContainer
                key="trending"
                activeTabBg={activeTab === 'Trending' ? activeTabBg : 'none'}
                onClick={OnChangeTrendingTab}
              >
                <FiTrendingUp
                  size="25"
                  color={activeTab === 'Trending' ? ' #ff0b37' : ' #616e7c'}
                />
                <NavText color={textColor}>Trending</NavText>
              </NavContainer>
            </NavLink>

            <NavLink to="/gaming">
              <NavContainer
                key="gaming"
                activeTabBg={activeTab === 'Gaming' ? activeTabBg : 'none'}
                onClick={OnChangeGamingTab}
              >
                <GiGamepad
                  size="25"
                  color={activeTab === 'Gaming' ? ' #ff0b37' : ' #616e7c'}
                />
                <NavText color={textColor}>Gaming</NavText>
              </NavContainer>
            </NavLink>

            <NavLink to="/savedVideos">
              <NavContainer
                key="savedVideos"
                activeTabBg={activeTab === 'SavedVideos' ? activeTabBg : 'none'}
                onClick={OnChangeSavedVideosTab}
              >
                <HiSaveAs
                  size="25"
                  color={activeTab === 'SavedVideos' ? ' #ff0b37' : ' #616e7c'}
                />
                <NavText color={textColor}>Saved Videos</NavText>
              </NavContainer>
            </NavLink>

            <ContactCard color={textColor}>
              <ContactHeading>CONTACT US</ContactHeading>
              <ContactInfo>
                <ContactImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt=" facebook logo"
                />
                <ContactImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
                  alt="twitter logo"
                />
                <ContactImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt=" linked in logo"
                />
              </ContactInfo>

              <ContactContent color={textColor}>
                Enjoy! Now to see your channels and recommendations!
              </ContactContent>
            </ContactCard>
          </NavigationOptions>

          <NavigationSmallCard>
            <NavLink to="/">
              <NavContainer key="home" color={textColor}>
                <AiFillHome size="25" />
              </NavContainer>
            </NavLink>

            <NavLink to="/trending">
              <NavContainer key="trending" color={textColor}>
                <FiTrendingUp size="25" />
              </NavContainer>
            </NavLink>

            <NavLink to="/gaming">
              <NavContainer key="gaming" color={textColor}>
                <GiGamepad size="25" />
              </NavContainer>
            </NavLink>

            <NavLink to="/savedVideos">
              <NavContainer key="savedVideos" color={textColor}>
                <HiSaveAs size="25" />
              </NavContainer>
            </NavLink>
          </NavigationSmallCard>
        </NavigationCard>
      )
    }}
  </CartContext.Consumer>
)

export default NavigatorBar
