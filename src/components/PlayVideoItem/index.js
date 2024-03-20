import ReactPlayer from 'react-player'
import CartContext from '../../Context/CartContext'
import {
  VideoPlayer,
  VideoPlayerTitle,
  Dot,
  ViewsCard,
  ViewCount,
  ProfileCard,
  ProfileImage,
  ChannelName,
  Description,
} from './styledComponents'

const PlayVideoItem = props => {
  const {videoItemDetails} = props
  return (
    <CartContext.Consumer>
      {value => {
        const {darkTheme} = value
        const bgColor = darkTheme ? '#0f0f0f' : '#f9f9f9'
        const textColor = darkTheme ? '#f9f9f9' : ' #0f0f0f'

        return (
          <VideoPlayer bgColor={bgColor}>
            <ReactPlayer
              url={videoItemDetails.videoUrl}
              controls
              width="100%"
            />
            <VideoPlayerTitle color={textColor}>
              {videoItemDetails.title}
            </VideoPlayerTitle>
            <ViewsCard>
              <ViewCount color={textColor}>
                {videoItemDetails.viewCount} viewers <Dot> . </Dot>
                {videoItemDetails.publishedAt}
              </ViewCount>
            </ViewsCard>
            <hr color={textColor} />
            <ProfileCard>
              <ProfileImage
                src={videoItemDetails.profileImageUrl}
                alt="profile Image"
              />
              <ChannelName color={textColor}>
                {videoItemDetails.name}
              </ChannelName>
            </ProfileCard>

            <Description color={textColor}>
              {videoItemDetails.description}
            </Description>
          </VideoPlayer>
        )
      }}
    </CartContext.Consumer>
  )
}

export default PlayVideoItem
