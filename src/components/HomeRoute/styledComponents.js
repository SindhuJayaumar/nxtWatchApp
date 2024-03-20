import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  overflow-y: auto;
  margin-top: 60px;
  margin-bottom: 60px;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  width: 100%;
  height: 200px;
  background-size: cover;
  display: ${props => props.display};
  justify-content: space-between;
  padding-bottom: 60px;
`
export const BannerLeftContainer = styled.div`
  width: 50%;
`

export const BannerRightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const WebsiteImage = styled.img`
  height: 40px;
`

export const BannerContent = styled.p``

export const BannerButton = styled.button`
  height: 40px;
  width: 100px;
  cursor: pointer;
`
export const SearchCard = styled.div`
  display: flex;
  margin-left: 20px;
  margin-top: 20px;
`

export const SearchInput = styled.input`
  width: 300px;
`

export const SearchContainer = styled.button`
  width: 50px;
  height: 30px;
`

export const VideoCardList = styled.div`
  list-style-type: none;
  background-color: ${props => props.bgColor};
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 0px;
  margin-top: 20px;
  margin-left: 20px;
`
export const CloseButton = styled.button`
  cursor: pointer;
`

export const NoJobsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
`

export const NoJobHead = styled.h1`
  font-size: 25px;
  font-weight: bold;
  font-family: 'Roboto';
  color: ${props => props.color};
`

export const NoJobImg = styled.img`
  width: 250px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const NoJobContent = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  color: ${props => props.color};
`
export const NoJobButton = styled.button`
  height: 40px;
  width: 60px;
  border-radius: 10px;
  background-color: #3b82f6;
  color: #ffff;
  border: none;
  cursor: pointer;
`
