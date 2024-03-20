import styled from 'styled-components'

export const NavHeader = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 60px;
  width: 100%;
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 767px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`
export const WebsiteImage = styled.img`
  height: 40px;
`

export const ProfileImage = styled.img`
  height: 50px;
  width: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const ContextListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 15%;
`
export const ContextListItem = styled.li`
  list-style-type: none;
  display: flex;
`

export const ThemeButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  color: ${props => props.color};
  font-size: 36px;
`

export const LogoutButton = styled.button`
  font-family: 'Roboto';
  background-color: transparent;
  color: ${props => props.color};
  width: 60px;
  border-radius: 4px;
  cursor: pointer;
  border: 0.2px solid ${props => props.color};
  outline: none;
  margin-right: 30px;
  margin-left: 7px;
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 200px;
  width: 400px;
  background-color: #212121;
  border-radius: 10px;
`

export const ModalContent = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #f1f1f1;
  text-align: center;
`
export const ButtonCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CloseButton = styled.button`
  font-family: 'Roboto';
  background-color: transparent;
  color: #ffff;
  height: 30px;
  width: 60px;
  border-radius: 4px;
  cursor: pointer;
  border: 0.2px solid #ffff;
  outline: none;
`

export const ConformButton = styled.button`
  font-family: 'Roboto';
  background-color: #3b82f6;
  color: #ffff;
  height: 30px;
  width: 60px;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  outline: none;
  margin-left: 20px;
`
