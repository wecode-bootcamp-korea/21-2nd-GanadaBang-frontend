import styled from 'styled-components/macro';

const LogoutModal = ({ setIsActive }) => {
  const { Kakao } = window;

  const handleLogout = () => {
    localStorage.clear();
    // Kakao.Auth.logout();
    setIsActive(false);
  };

  return (
    <LogoutModalBox onClick={handleLogout}>
      <LogoutContextBox>
        <LogoutContext>로그아웃</LogoutContext>
        <LogoutIcon></LogoutIcon>
      </LogoutContextBox>
    </LogoutModalBox>
  );
};

export default LogoutModal;

const LogoutModalBox = styled.div`
  position: absolute;
  top: 70px;
  right: 10px;
  width: 240px;
  padding: 1.5rem 1rem;
  border: 1px solid #cdcdcd;
  border-radius: 2px;
  background-color: #ffffff;
  box-shadow: #00000040 0px 15px 18px -10px;
  cursor: pointer;
  z-index: 100;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: -9px;
    right: 38px;
    width: 10px;
    height: 10px;
    border-width: 1px;
    border-style: solid;
    border-color: #cdcdcd transparent transparent #cdcdcd;
    background-color: #ffffff;
    transform: translateY(2px) rotate(45deg);
  }
`;

const LogoutContextBox = styled.div`
  ${({ theme }) => theme.flexSet('space-between')};
`;

const LogoutContext = styled.div`
  color: #4c4c4c;
  font-size: 14px;
`;

const LogoutIcon = styled.img``;
