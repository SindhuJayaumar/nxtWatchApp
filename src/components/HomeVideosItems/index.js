import {Link} from 'react-router-dom'
import CartContext from '../../Context/CartContext'
import {
  ListItem,
  ThumbnailImg,
  VideoDetails,
  ProfileCard,
  ProfileImage,
  ContentSection,
  Title,
  ChannelName,
  ViewCount,
  ViewsCard,
  Dot,
} from './styledComponents'

const HomeVideosItems = props => {
  const {video} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = video

  return (
    <CartContext.Consumer>
      {value => {
        const {darkTheme} = value
        const bgColor = darkTheme ? '#0f0f0f' : '#f9f9f9'
        const textColor = darkTheme ? '#f9f9f9' : ' #0f0f0f'
        return (
          <Link to={`/videos/${id}`}>
            <ListItem bgColor={bgColor}>
              <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetails>
                <ProfileCard>
                  <ProfileImage src={profileImageUrl} alt="channel logo" />
                </ProfileCard>
                <ContentSection>
                  <Title color={textColor}>{title}</Title>
                  <ChannelName color={textColor}>{name}</ChannelName>
                  <ViewsCard>
                    <ViewCount color={textColor}>
                      {viewCount} <Dot> . </Dot> {publishedAt}
                    </ViewCount>
                  </ViewsCard>
                </ContentSection>
              </VideoDetails>
            </ListItem>
          </Link>
        )
      }}
    </CartContext.Consumer>
  )
}

export default HomeVideosItems
