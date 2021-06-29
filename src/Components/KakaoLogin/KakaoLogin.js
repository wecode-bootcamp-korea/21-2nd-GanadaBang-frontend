import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { POST_KAKAOLOGIN_API } from '../../config';

const { Kakao } = window;

const KakaoLogin = ({ isLoginActive, setIsLoginActive }) => {
  const history = useHistory();

  const handleKakaoLogin = () => {
    try {
      Kakao.Auth.login({
        success: auth => {
          console.log(auth.access_token);
          fetch(`${POST_KAKAOLOGIN_API}`, {
            method: 'POST',
            headers: {
              Authorization: auth.access_token,
            },
          })
            .then(res => res.json())
            .then(res => {
              console.log(res.data);
              if (res.token) {
                localStorage.setItem('KakaoToken', res.token);
                localStorage.setItem(
                  'UserProfileImage',
                  res.data.profile_image
                );
                localStorage.setItem('UserNickName', res.data.nick_name);
                setIsLoginActive(!isLoginActive);
                history.push('/');
              }
            });
        },
        fail: err => {
          console.error(err, 'fail');
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <KakaoButton onClick={handleKakaoLogin}>카카오톡으로 시작</KakaoButton>
  );
};

export default KakaoLogin;

const KakaoButton = styled.button`
  width: 100%;
  height: 6rem;
  margin-bottom: 1rem;
  font-size: 1.6rem;
  color: rgb(34, 34, 34);
  border: 0px;
  background-color: rgb(247, 229, 6);
  cursor: pointer;
`;
