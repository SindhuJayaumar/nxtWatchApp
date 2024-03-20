import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {FiTrendingUp} from 'react-icons/fi'
import Header from '../Header'
import NavigatorBar from '../NavigatorBar'

import FailureCart from '../FailureCart'
import VideoCard from '../VideoCard'

import CartContext from '../../Context/CartContext'

import './index.css'

import {
  Heading,
  TrendingContainer,
  NoJobsCard,
  NoJobHead,
  NoJobImg,
  NoJobContent,
  NoJobButton,
  TrendingVideoCard,
} from './styledComponents'

const apiVideosConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class TrendingRoute extends Component {
  state = {
    trendingVideos: [],
    apiStatus: apiVideosConstant.initial,
  }

  componentDidMount = () => {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiVideosConstant.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedFetchedData = fetchedData.videos.map(eachTrendVideo => ({
        id: eachTrendVideo.id,
        publishedAt: eachTrendVideo.published_at,
        thumbnailUrl: eachTrendVideo.thumbnail_url,
        title: eachTrendVideo.title,
        viewCount: eachTrendVideo.view_count,
        name: eachTrendVideo.channel.name,
        profileImageUrl: eachTrendVideo.channel.profile_image_url,
      }))
      console.log(updatedFetchedData)

      this.setState({
        trendingVideos: updatedFetchedData,
        apiStatus: apiVideosConstant.success,
      })
    } else {
      this.setState({apiStatus: apiVideosConstant.failure})
    }
  }

  RetryButton = () => {
    this.getTrendingVideos()
  }

  renderFailureTrendingVideos = () => (
    <FailureCart RetryButton={this.RetryButton} />
  )

  renderLoaderTrendVideos = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </div>
  )

  renderTrendingView = () => {
    const {trendingVideos} = this.state
    const VideoCount = trendingVideos.length
    return (
      <CartContext.Consumer>
        {value => {
          const {darkTheme} = value
          const bgColor = darkTheme ? '#0f0f0f' : '#f9f9f9'
          const textColor = darkTheme ? '#f9f9f9' : ' #0f0f0f'
          return VideoCount > 0 ? (
            <TrendingVideoCard>
              {trendingVideos.map(eachVideo => (
                <VideoCard trending={eachVideo} key={eachVideo.id} />
              ))}
            </TrendingVideoCard>
          ) : (
            <NoJobsCard bgColor={bgColor}>
              <NoJobImg
                src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
                alt="no jobs"
              />
              <NoJobHead color={textColor}>No Jobs Found</NoJobHead>
              <NoJobContent color={textColor}>
                We could not find any jobs.Try other filters
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

  renderTrendingVideosView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiVideosConstant.failure:
        return this.renderFailureTrendingVideos()
      case apiVideosConstant.inProgress:
        return this.renderLoaderTrendVideos()
      case apiVideosConstant.success:
        return this.renderTrendingView()

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
              <TrendingContainer data-testid="trending" bgColor={bgColor}>
                <Heading color={textColor}>
                  <FiTrendingUp size="25" />
                  Trending
                </Heading>
                {this.renderTrendingVideosView()}
              </TrendingContainer>
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default TrendingRoute
