import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 250px;
    margin-right: 20px;
  }
`
export const ThumbnailImg = styled.img`
  width: 100%;
`

export const VideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 10px;
`

export const ProfileCard = styled.div``

export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  margin: 20px;
  border-radius: 50px;
`

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
`

export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  text-decoration: none;
  color: ${props => props.color};
`

export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  text-decoration: none;
  color: ${props => props.color};
`
export const ViewsCard = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 10px;
`

export const ViewCount = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  text-decoration: none;
  color: ${props => props.color};
`

export const Dot = styled.span`
  font-family: 'Roboto';
  font-size: 20px;
  text-decoration: none;
  color: ${props => props.color};
`
