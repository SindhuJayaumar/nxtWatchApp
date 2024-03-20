import {Link} from 'react-router-dom'
import CartContext from '../../Context/CartContext'
import {ListItem, Thumbnail, Title, Viewers} from './styledComponents'

const GameVideos = props => {
  const {gameVideo} = props
  const {id, thumbnailUrl, title, viewCount} = gameVideo
  return (
    <CartContext.Consumer>
      {value => {
        const {darkTheme} = value

        const textColor = darkTheme ? '#f9f9f9' : ' #0f0f0f'
        return (
          <Link to={`/videos/${id}`}>
            <ListItem>
              <Thumbnail src={thumbnailUrl} alt="video Thumbnail" />
              <Title color={textColor}>{title}</Title>
              <Viewers color={textColor}>{viewCount}</Viewers>
            </ListItem>
          </Link>
        )
      }}
    </CartContext.Consumer>
  )
}

export default GameVideos
