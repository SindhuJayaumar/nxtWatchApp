import styled from 'styled-components'
import './index.css'

export const VideoPlayer = styled.div`
  overflow-y: auto;
  min-height: 100vh;
  padding: 20px;
  margin-top: 60px;
  margin-bottom: 60px;
  background-color: ${props => props.bgColor};
  margin-left: 10px;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`
export const VideoPlayerTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.color};
`

export const Dot = styled.p``

export const ViewsCard = styled.div`
  display: flex;
  flex-direction: row;
`

export const ViewCount = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  text-decoration: none;
  color: ${props => props.color};
`
export const ProfileCard = styled.div`
  display: flex;
  flex-direction: row;
`

export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  margin: 10px;
  border-radius: 50px;
  background-color: ${props => props.bgColor};
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  text-decoration: none;
  color: ${props => props.color};
`
export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  text-decoration: none;
  color: ${props => props.color};
`
