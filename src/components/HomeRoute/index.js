import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiFillCloseCircle} from 'react-icons/ai'
import {BiSearchAlt2} from 'react-icons/bi'

import Header from '../Header'
import NavigatorBar from '../NavigatorBar'
import FailureCart from '../FailureCart'
import HomeVideosItems from '../HomeVideosItems'

import CartContext from '../../Context/CartContext'

import './index.css'

import {
  HomeContainer,
  BannerContainer,
  BannerLeftContainer,
  BannerRightContainer,
  WebsiteImage,
  BannerContent,
  BannerButton,
  CloseButton,
  SearchCard,
  SearchInput,
  SearchContainer,
  VideoCardList,
  NoJobsCard,
  NoJobHead,
  NoJobImg,
  NoJobContent,
  NoJobButton,
} from './styledComponents'

const ApiVideosConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'Failure',
  inProgress: 'INPROGRESS',
}

class HomeRoute extends Component {
  state = {
    homeVideos: [],
    searchInput: '',
    bannerDisplay: 'flex',
    ApiVideoStatus: ApiVideosConstants.initial,
  }

  componentDidMount = () => {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({ApiVideoStatus: ApiVideosConstants.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedFetchedData = fetchedData.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))
      console.log(updatedFetchedData)

      this.setState({
        homeVideos: updatedFetchedData,
        ApiVideoStatus: ApiVideosConstants.success,
      })
    } else {
      this.setState({
        ApiVideoStatus: ApiVideosConstants.failure,
      })
    }
  }

  onCloseButton = () => {
    this.setState({bannerDisplay: 'none'})
  }

  RetryButton = () => {
    this.setState({searchInput: ''}, this.getVideos)
  }

  onSearchButton = event => {
    this.setState({searchInput: event.target.value})
  }

  getSearchResults = () => {
    this.getVideos()
  }

  renderFailureView = () => <FailureCart RetryButton={this.RetryButton} />

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </div>
  )

  renderVideoView = () => {
    const {homeVideos} = this.state
    const VideoCount = homeVideos.length
    return (
      <CartContext.Consumer>
        {value => {
          const {darkTheme} = value
          const bgColor = darkTheme ? '#0f0f0f' : '#f9f9f9'
          const textColor = darkTheme ? '#f9f9f9' : ' #0f0f0f'
          return VideoCount > 0 ? (
            <VideoCardList bgColor={bgColor}>
              {homeVideos.map(eachVideo => (
                <HomeVideosItems video={eachVideo} key={eachVideo.id} />
              ))}
            </VideoCardList>
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

  renderHomeVideos = () => {
    const {ApiVideoStatus} = this.state

    switch (ApiVideoStatus) {
      case ApiVideosConstants.success:
        return this.renderVideoView()
      case ApiVideosConstants.inProgress:
        return this.renderLoadingView()
      case ApiVideosConstants.failure:
        return this.renderFailureView()
      default:
        return 'null'
    }
  }

  render() {
    const {searchInput, bannerDisplay} = this.state
    return (
      <CartContext.Consumer>
        {value => {
          const {darkTheme} = value
          const bgColor = darkTheme ? '#0f0f0f' : '#f9f9f9'
          const textColor = darkTheme ? '#f9f9f9' : ' #0f0f0f'
          const display = bannerDisplay === 'flex' ? 'display' : 'none'

          return (
            <>
              <Header />
              <NavigatorBar />
              <HomeContainer
                data-testid="home"
                bgColor={bgColor}
                textColor={textColor}
              >
                <BannerContainer data-testid="banner" display={display}>
                  <BannerLeftContainer>
                    <WebsiteImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="nxt watch logo"
                    />
                    <BannerContent>
                      Buy Nxt Watch Premium prepaid plans with <br />
                      UPI
                    </BannerContent>
                    <BannerButton type="button">GET IT NOW</BannerButton>
                  </BannerLeftContainer>

                  <BannerRightContainer>
                    <CloseButton
                      data-testid="close"
                      onClick={this.onCloseButton}
                    >
                      <AiFillCloseCircle size="26" />
                    </CloseButton>
                    <AiFillCloseCircle
                      size="26"
                      className="close"
                      data-testid="close"
                      onClick={this.onCloseButton}
                    />
                  </BannerRightContainer>
                </BannerContainer>
                <SearchCard>
                  <SearchInput
                    type="search"
                    placeholder="search"
                    data-testid="searchButton"
                    value={searchInput}
                    onChange={this.onSearchButton}
                  />

                  <SearchContainer
                    data-testid="searchButton"
                    onClick={this.getSearchResults}
                  >
                    <BiSearchAlt2 size="20" />
                  </SearchContainer>
                </SearchCard>
                {this.renderHomeVideos()}
              </HomeContainer>
            </>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default HomeRoute
