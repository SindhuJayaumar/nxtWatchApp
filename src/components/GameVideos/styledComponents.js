import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 200px;
    margin-right: 20px;
  }
`

export const Thumbnail = styled.img`
  width: 100%;
`

export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  text-decoration: none;
  color: ${props => props.color};
`

export const Viewers = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  text-decoration: none;
  color: ${props => props.color};
`
