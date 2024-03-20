import {Link} from 'react-router-dom'

import CartContext from '../../Context/CartContext'
import {
  ListItem,
  Thumbnail,
  ProfileCard,
  ProfileImage,
  ContentSection,
  Title,
  ChannelName,
  ViewCount,
  ViewsCard,
  Dot,
} from './styledComponents'

const VideoCard = props => {
  const {trending} = props
  const {
    id,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
    name,
    profileImageUrl,
  } = trending
  return (
    <CartContext.Consumer>
      {value => {
        const {darkTheme} = value

        const textColor = darkTheme ? '#f9f9f9' : ' #0f0f0f'

        return (
          <Link to={`/Videos/${id}`}>
            <ListItem>
              <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
              <ContentSection>
                <Title color={textColor}>{title}</Title>
                <ProfileCard>
                  <ChannelName color={textColor}>{name}</ChannelName>
                  <ProfileImage src={profileImageUrl} alt="profile Image" />
                </ProfileCard>
                <ViewsCard>
                  <ViewCount color={textColor}>
                    {viewCount} <Dot> . </Dot> {publishedAt}
                  </ViewCount>
                </ViewsCard>
              </ContentSection>
            </ListItem>
          </Link>
        )
      }}
    </CartContext.Consumer>
  )
}

export default VideoCard
