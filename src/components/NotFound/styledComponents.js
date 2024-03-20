import styled from 'styled-components'

export const NotfoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow-y: auto;
  margin-top: 60px;
  margin-bottom: 60px;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`
export const Heading = styled.h1`
  color: ${props => props.color};
`
export const Content = styled.p`
  color: ${props => props.color};
`

export const NotFoundImage = styled.img`
  width: 500px;
  @media screen and (max-width: 768px) {
    width: 250px;
  }
`
