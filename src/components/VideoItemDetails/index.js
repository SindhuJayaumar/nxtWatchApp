import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import NavigatorBar from '../NavigatorBar'
import FailureCart from '../FailureCart'
import PlayVideoItem from '../PlayVideoItem'

import {VideoDetailContainer} from './styledComponents'

import CartContext from '../../Context/CartContext'

const ApiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    videoItemDetails: [],
    apiStatus: ApiConstants.initial,
  }

  componentDidMount = () => {
    this.getVideoDetails()
  }

  formattedData = eachData => ({
    id: eachData.video_details.id,
    description: eachData.video_details.description,
    publishedAt: eachData.video_details.published_at,
    thumbnailUrl: eachData.video_details.thumbnail_url,
    title: eachData.video_details.title,
    videoUrl: eachData.video_details.video_url,
    viewCount: eachData.video_details.view_count,
    name: eachData.video_details.channel.name,
    profileImageUrl: eachData.video_details.channel.profile_image_url,
  })

  getVideoDetails = async () => {
    this.setState({apiStatus: ApiConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    console.log(response)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedFetchedData = this.formattedData(fetchedData)
      console.log(updatedFetchedData)
      this.setState({
        videoItemDetails: updatedFetchedData,
        apiStatus: ApiConstants.success,
      })
    } else {
      this.setState({apiStatus: ApiConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {videoItemDetails} = this.state
    return <PlayVideoItem videoItemDetails={videoItemDetails} />
  }

  renderFailureView = () => <FailureCart RetryButton={this.RetryButton} />

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </div>
  )

  renderVideoItemDetailsView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case ApiConstants.inProgress:
        return this.renderLoadingView()
      case ApiConstants.failure:
        return this.renderFailureView()
      case ApiConstants.success:
        return this.renderSuccessView()
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
            <>
              <Header />
              <NavigatorBar />
              <VideoDetailContainer bgColor={bgColor} color={textColor}>
                <div>{this.renderVideoItemDetailsView()}</div>
              </VideoDetailContainer>
            </>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default VideoItemDetails
