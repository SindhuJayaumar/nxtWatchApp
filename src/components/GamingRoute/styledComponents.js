import styled from 'styled-components'

export const GamingContainer = styled.div`
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
  text-align: start;
  color: ${props => props.color};
  margin-left: 10px;
`
export const GamingVideoCard = styled.div`
  list-style-type: none;
  background-color: ${props => props.bgColor};
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 0px;
  margin-top: 20px;
  margin-left: 20px;
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
