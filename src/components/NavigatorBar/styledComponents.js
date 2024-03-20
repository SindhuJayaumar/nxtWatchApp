import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavigationCard = styled.div`
  background-color: ${props => props.bgColor};
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 240px;
  height: 92%;
  top: 60px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavigationOptions = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0px;
  margin-top: 0px;
  flex-grow: 1;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  background-color: ${props => props.activeTabBg};
  color: ${props => props.color};
  cursor: pointer;
`
export const NavText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.color};
  margin-left: 20px;
  background-color: ${props => props.activeTabBg};
`
export const ContactCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
  color: ${props => props.color};
`

export const ContactHeading = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
`

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ContactImg = styled.img`
  width: 45px;
  padding-left: 10px;
`

export const ContactContent = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 800;
  text-align: center;
`
export const NavigationSmallCard = styled.div`
  background-color: ${props => props.bgColor};
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`
