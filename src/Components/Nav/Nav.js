import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useOutsideClick } from '../../Util/inputOutsideClick';
import MenuButtons from '../MenuButton.js/MenuButton';
import LoginModal from '../LoginModal/LoginModal';
import LogoutModal from '../LogoutModal/LogoutModal';
import styled from 'styled-components/macro';

function Nav() {
  const location = useLocation();
  const isMainPage = location.pathname === '/';
  const { isActive, setIsActive, inputEl } = useOutsideClick();

  const [isLoginActive, setIsLoginActive] = useState(false);

  return (
    <>
      <NavWrap>
        <Logo isActiveMain={isMainPage} to="/">
          가나다방
        </Logo>
        <Menu>
          <NavUl>
            <NavList>
              <MenuButtons path="/map" name="지도" />
            </NavList>
            <NavList>
              <MenuButtons path="/presale" name="분양" />
            </NavList>
            <NavList>
              <MenuButtons path="/wishlist" name="관리목록" />
            </NavList>
            <NavList>
              <MenuButtons path="/saleroom" name="방 내놓기" />
            </NavList>
            <NavList>
              <MenuButtons path="/alram" name="알람" />
            </NavList>
          </NavUl>

          {localStorage.getItem('KakaoToken') ? (
            <UserWrap ref={inputEl}>
              <UserImage src={localStorage.getItem('UserProfileImage')} />
              <UserName
                isActiveMain={isMainPage}
                onClick={() => setIsActive(!isActive)}
              >
                {localStorage.getItem('UserNickName')} 님
              </UserName>
              {isActive && (
                <LogoutModal
                  setIsActive={setIsActive}
                  isMainPage={isMainPage}
                ></LogoutModal>
              )}
            </UserWrap>
          ) : (
            <LoginSignButton
              onClick={() => setIsLoginActive(!isLoginActive)}
              isActiveMain={isMainPage}
            >
              로그인
              <span />
              회원가입
            </LoginSignButton>
          )}
        </Menu>
      </NavWrap>
      {isLoginActive && (
        <LoginModal
          isLoginActive={isLoginActive}
          setIsLoginActive={setIsLoginActive}
        />
      )}
    </>
  );
}

const NavWrap = styled.div`
  ${({ theme }) => theme.flexSet('space-between')};
  position: absolute;
  top: 0;
  width: 100%;
  height: 8.5rem;
  padding: 0 2rem 0 3rem;
`;

const Logo = styled(Link)`
  font-size: 2.8rem;
  font-family: 'Gugi', cursive;
  color: ${({ isActiveMain, theme }) => (isActiveMain ? 'white' : theme.blue)};
`;

const Menu = styled.div`
  ${({ theme }) => theme.flexSet()};
`;

const NavUl = styled.ul`
  ${({ theme }) => theme.flexSet()};
  font-size: 1.5rem;
`;

const NavList = styled.li`
  padding: 0 2rem;
`;

const UserWrap = styled.div`
  ${({ theme }) => theme.flexSet('flex-end')};
  width: 15.5rem;
  height: 4rem;
  margin-left: 2.6rem;
  padding-right: 2rem;
`;

const UserImage = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 100%;
`;

const UserName = styled.span`
  margin-left: 1rem;
  font-size: 1.3rem;
  font-weight: bold;
  color: ${({ isActiveMain }) => (isActiveMain ? '#ffffffcc' : 'black')};
  cursor: pointer;
`;

const LoginSignButton = styled.button`
  ${props => props.theme.flexSet()};
  width: 15.5rem;
  height: 4rem;
  padding: 0 2rem;
  margin-left: 2.6rem;
  font-size: 1.3rem;
  color: ${({ isActiveMain, theme }) =>
    isActiveMain ? theme.white : theme.gray};
  border: 1px solid
    ${({ isActiveMain, theme }) => (isActiveMain ? theme.white : '#dfdfdf')};
  cursor: pointer;

  &:hover {
    color: ${({ isActiveMain, theme }) =>
      isActiveMain ? 'white' : theme.blue};
  }

  span {
    width: 1px;
    height: 14px;
    margin: 0px 14px;
    background-color: ${({ isActiveMain }) =>
      isActiveMain ? 'white' : '#dfdfdf'};
  }
`;

export default Nav;
