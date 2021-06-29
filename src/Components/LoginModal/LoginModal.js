// import { useEffect, useState } from 'react';
import KakaoLogin from '../KakaoLogin/KakaoLogin';
import styled from 'styled-components';

const LoginModal = ({ isLoginActive, setIsLoginActive }) => {
  return (
    <LoginBackground>
      <LoginModalBox>
        <CloseButton onClick={() => setIsLoginActive(!isLoginActive)} />
        <LoginModalWrap>
          <Title>로그인</Title>
          <InputID />
          <InputPassword />
          <LoginSettingWrap>
            <RememberID>
              <SelectBox />
              아이디 저장
            </RememberID>
            <ResetPassword>비밀번호 재설정</ResetPassword>
          </LoginSettingWrap>
          <LoginButton>로그인</LoginButton>
          <KakaoLogin
            isLoginActive={isLoginActive}
            setIsLoginActive={setIsLoginActive}
          />
        </LoginModalWrap>
      </LoginModalBox>
    </LoginBackground>
  );
};

export default LoginModal;

const LoginBackground = styled.div`
  ${({ theme }) => theme.flexSet()};
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000b3;
  z-index: 1;
`;

const LoginModalBox = styled.div`
  position: relative;
  padding: 50px 35px 40px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 25%) 0px 15px 18px -10px;
  transition: width 200ms ease-in-out 0s;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 34px;
  right: 20px;
  width: 1.8rem;
  height: 1px;
  border-radius: 1px;
  background-color: black;
  transform: rotate(45deg);
  cursor: pointer;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    content: '';
    width: 1.8rem;
    height: 2px;
    border-radius: 1px;
    background-color: black;
    transform: rotate(90deg);
  }
`;

const LoginModalWrap = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center', 'column')};
  width: 35rem;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  color: rgb(34, 34, 34);
  font-size: 2.5rem;
  font-weight: 400;
`;

const InputID = styled.input.attrs({
  type: 'text',
  placeholder: '아이디',
})`
  width: 100%;
  height: 4.6rem;
  padding: 0 1.6rem;
  margin-bottom: 1rem;
  color: rgb(76, 76, 76);
  font-size: 1.4rem;
  border: 1px solid rgb(223, 223, 223);
  border-radius: 2px;
  background-color: rgb(255, 255, 255);

  &:focus {
    border-color: ${({ theme }) => theme.blue};
  }
`;

const InputPassword = styled(InputID).attrs({
  type: 'password',
  placeholder: '비밀번호',
})``;

const LoginSettingWrap = styled.div`
  ${({ theme }) => theme.flexSet('space-between')};
  width: 100%;
  margin: 2rem 0;
`;

const RememberID = styled.span`
  margin-left: 6px;
  color: rgb(136, 136, 136);
  font-size: 14px;
`;

const SelectBox = styled.input.attrs({
  type: 'checkbox',
})``;

const ResetPassword = styled.button`
  color: rgb(68, 68, 68);
  font-size: 14px;
  border: 0px;
  background-color: transparent;
`;

const LoginButton = styled.button`
  width: 100%;
  height: 6rem;
  margin-bottom: 1rem;
  color: rgb(255, 255, 255);
  font-size: 1.6rem;
  border: 0px;
  background-color: rgb(26, 90, 232);
  cursor: pointer;
`;
