import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {GiGamepad} from 'react-icons/gi'
import Header from '../Header'
import NavigatorBar from '../NavigatorBar'
import FailureCart from '../FailureCart'
import GameVideos from '../GameVideos'
import CartContext from '../../Context/CartContext'

import './index.css'

import {
  GamingContainer,
  Heading,
  GamingVideoCard,
  NoJobsCard,
  NoJobHead,
  NoJobImg,
  NoJobContent,
  NoJobButton,
} from './styledComponents'

const ApiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class GamingRoute extends Component {
  state = {
    gamingVideos: [],
    apiStatus: ApiConstants.initial,
  }

  componentDidMount = () => {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: ApiConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedFetchedData = fetchedData.videos.map(eachGameData => ({
        id: eachGameData.id,
        thumbnailUrl: eachGameData.thumbnail_url,
        title: eachGameData.title,
        viewCount: eachGameData.view_count,
      }))
      console.log(fetchedData)
      console.log(updatedFetchedData)
      this.setState({
        gamingVideos: updatedFetchedData,
        apiStatus: ApiConstants.success,
      })
    } else {
      this.setState({apiStatus: ApiConstants.failure})
    }
  }

  RetryButton = () => {
    this.getGamingVideos()
  }

  renderFailureView = () => <FailureCart RetryButton={this.RetryButton} />

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </div>
  )

  renderGamingView = () => {
    const {gamingVideos} = this.state
    const videoCount = gamingVideos.length
    return (
      <CartContext.Consumer>
        {value => {
          const {darkTheme} = value
          const bgColor = darkTheme ? '#0f0f0f' : '#f9f9f9'
          const textColor = darkTheme ? '#f9f9f9' : ' #0f0f0f'
          return videoCount > 0 ? (
            <GamingVideoCard>
              {gamingVideos.map(eachVideo => (
                <GameVideos gameVideo={eachVideo} key={eachVideo.id} />
              ))}
            </GamingVideoCard>
          ) : (
            <NoJobsCard bgColor={bgColor}>
              <NoJobImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <NoJobHead color={textColor}>No Search results found</NoJobHead>
              <NoJobContent color={textColor}>
                Try different key words or remove search filter
              </NoJobContent>
              <NoJobButton type="button" onClick={this.RetryButton}>
                Retry
              </NoJobButton>
            </NoJobsCard>
          )
        }}
      </CartContext.Consumer>
    )
  }

  renderGamingVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case ApiConstants.failure:
        return this.renderFailureView()
      case ApiConstants.inProgress:
        return this.renderLoadingView()
      case ApiConstants.success:
        return this.renderGamingView()

      default:
        return 'null'
    }
  }

  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {darkTheme} = value
          const bgColor = darkTheme ? '#0f0f0f' : '#f9f9f9'
          const textColor = darkTheme ? '#f9f9f9' : ' #0f0f0f'

          return (
            <div>
              <Header />
              <NavigatorBar />
              <GamingContainer data-testid="gaming" bgColor={bgColor}>
                <Heading color={textColor}>
                  <GiGamepad size="25" className="game-icons" /> Gaming
                </Heading>
                {this.renderGamingVideos()}
              </GamingContainer>
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default GamingRoute
