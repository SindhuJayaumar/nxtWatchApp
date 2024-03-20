import styled from 'styled-components'

export const SavedVideoContainer = styled.div`
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

export const Heading = styled.h1`
  font-size: 25px;
  text-align: center;
  color: ${props => props.color};
`
