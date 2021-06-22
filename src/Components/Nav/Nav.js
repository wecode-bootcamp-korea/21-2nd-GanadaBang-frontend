import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuButtons from '../MenuButton.js/MenuButton';
// import LoginModal from '../LoginModal/LoginModal';
import styled from 'styled-components';

function Nav() {
  const location = useLocation();
  const isMainPage = location.pathname === '/';

  const [isLoginModal, setIsLoginModal] = useState(false);
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
          <LoginSignButton
            onClick={() => setIsLoginModal(!isLoginModal)}
            isActiveMain={isMainPage}
          >
            로그인
            <span isActiveMain={isMainPage}></span>
            회원가입
          </LoginSignButton>
        </Menu>
      </NavWrap>
      {/* {isLoginModal && (
        <LoginModal
          isLoginModal={isLoginModal}
          setIsLoginModal={setIsLoginModal}
        />
      )} */}
    </>
  );
}

const NavWrap = styled.div`
  ${({ theme }) => theme.flexSet('space-between')};
  position: absolute;
  width: 100%;
  height: 8.5rem;
  padding: 0 2rem 0 3rem;
  background-color: gray;
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
