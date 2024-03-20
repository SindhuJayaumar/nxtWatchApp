import styled from 'styled-components'

export const FailureView = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-y: auto;
  background-color: ${props => props.bgColor};
  margin-top: 60px;
  margin-bottom: 60px;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
    flex-direction: column;

    align-items: center;
  }
`

export const FailureImage = styled.img`
  width: 500px;
  @media screen and (max-width: 768px) {
    width: 250px;
  }
`

export const FailureContent = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.color};
`

export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 26px;
  color: ${props => props.color};
`

export const FailureButton = styled.button`
  height: 40px;
  width: 60px;
  border-radius: 10px;
  background-color: #3b82f6;
  color: #ffff;
  border: none;
  cursor: pointer;
`
