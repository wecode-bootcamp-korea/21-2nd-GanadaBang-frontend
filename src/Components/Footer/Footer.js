import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { icons } from '../../icons';

function Footer() {
  const location = useLocation();
  const isMapPage = location.pathname === '/map';

  const toTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <GrayBackground isActivate={isMapPage}>
      <FooterWrap>
        <FooterNav>
          <FooterUl>
            <FooterLi>
              <FooterLink to="/">회사소개</FooterLink>
            </FooterLi>
            <FooterLi>
              <FooterLink to="/">이용약관</FooterLink>
            </FooterLi>
            <FooterLi>
              <FooterBoldLink to="/">개인정보처리방침</FooterBoldLink>
            </FooterLi>
            <FooterLi>
              <FooterLink to="/">매물관리규정</FooterLink>
            </FooterLi>
            <FooterLi>
              <FooterLink to="/">자동저장서비스</FooterLink>
            </FooterLi>
          </FooterUl>

          <FooterNavRight>
            <ItemNumberForm>
              <ItemNumberLabel>
                <ItemNumberTitle>매물조회</ItemNumberTitle>
                <ItemNumberInput></ItemNumberInput>
                <ItemNumberButton src={icons.searchIcon} />
              </ItemNumberLabel>
            </ItemNumberForm>
            <ButtonTop onClick={toTop}>
              <TopIcon src={icons.arrowTopIcon} />
              <TopContext>TOP</TopContext>
            </ButtonTop>
          </FooterNavRight>
        </FooterNav>

        <FooterInformations>
          <FooterInformation>
            <span>
              (주)스테이션3
              <br />
              대표 : 한유순, 유형석
              <br />
              사업자 번호: 220-88-59156 통신판매업신고번호 : 제2013-서울
              강남-02884호 주소 : 서울시 서초구 서초대로 301 동익 성봉빌딩 10층
              (주)스테이션3
            </span>
            <span>
              고객센터 : 02-1899-6840 (평일 10:00 ~ 18:30 토·일요일, 공휴일
              휴무)
              <br />
              팩스 : 02-554-9774 프로모션/사업 제휴문의 : biz@station3.co.kr
              허위매물 신고 : clean@dabangapp.com
            </span>
            Inc. All rights reserved.
          </FooterInformation>
          <FooterInformationIcons>
            <p>
              다방, 2019년 한국서비스품질지수 부동산
              <br />
              중개 앱 1위 선정
            </p>
            <div>
              <SocialLink
                href="https://www.instagram.com/dabang_app/"
                target="_blank"
              >
                <SocialIcon src={icons.instaIcon} />
              </SocialLink>
              <SocialLink
                href="https://www.facebook.com/dabangapp"
                target="_blank"
              >
                <SocialIcon src={icons.facebookIcon} />
              </SocialLink>
              <SocialLink
                href="https://www.youtube.com/channel/UCAZNxUDChQXqce0N4ibllcw/featured"
                target="_blank"
              >
                <SocialIcon src={icons.youtubeIcon} />
              </SocialLink>
              <SocialLink
                href="https://blog.naver.com/station3inc"
                target="_blank"
              >
                <SocialIcon src={icons.naverBlogIcon} />
              </SocialLink>
              <SocialLink
                href="https://post.naver.com/station3inc"
                target="_blank"
              >
                <SocialIcon src={icons.naverPostIcon} />
              </SocialLink>
            </div>
          </FooterInformationIcons>
        </FooterInformations>
      </FooterWrap>
    </GrayBackground>
  );
}

export default Footer;

const GrayBackground = styled.section`
  ${({ theme }) => theme.flexSet()};
  background-color: #373737;
  font-size: 1.3rem;
  color: #aaaaaa;
  display: ${({ isActivate }) => (isActivate ? 'none' : 'flex')};
`;

const FooterWrap = styled.div`
  width: 120rem;
`;

const FooterNav = styled.nav`
  ${({ theme }) => theme.flexSet('space-between')};
  height: 7rem;
  border-bottom: 1px solid #454545;
`;

const FooterUl = styled.ul`
  ${({ theme }) => theme.flexSet()};
`;

const FooterLi = styled.li`
  margin-left: 16px;
  padding-left: 16px;
  border-left: 1px solid #666666;

  &:first-child {
    margin: 0px;
    padding: 0px;
    border: 0px;
  }
`;

const FooterLink = styled(Link)`
  font-weight: 400;
`;

const FooterBoldLink = styled(FooterLink)`
  color: white;
  font-weight: 700;
`;

const FooterNavRight = styled.div`
  ${({ theme }) => theme.flexSet()};
  height: 100%;
  border-left: 1px solid #454545;
  border-right: 1px solid #454545;
`;

const ItemNumberForm = styled.form`
  width: 28.2rem;
  padding: 2rem;
`;

const ItemNumberLabel = styled.label`
  display: flex;
`;

const ItemNumberTitle = styled.p`
  padding-right: 0.6rem;
`;

const ItemNumberInput = styled.input`
  width: 70%;
  color: white;
`;

const ItemNumberButton = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  filter: invert(0.8);
`;

const ButtonTop = styled.button`
  ${({ theme }) => theme.flexSet('center', 'center', 'column')};
  width: 7rem;
  height: 100%;
  border-left: 1px solid #454545;
`;

const TopIcon = styled.img`
  width: 1.2rem;
  filter: invert(0.8);
  transform: rotate(180deg);
`;

const TopContext = styled.button`
  font-size: 1.3rem;
  color: #aaaaaa;
`;

const FooterInformations = styled.div`
  ${({ theme }) => theme.flexSet()};
  padding: 4rem 0;
`;

const FooterInformation = styled.div`
  flex: 2;
  padding-right: 40rem;

  span {
    line-height: 2;
    margin-bottom: 2rem;
  }
`;

const FooterInformationIcons = styled.div`
  ${({ theme }) => theme.flexSet('space-between', 'center', 'column')};
  flex: 1;
  height: 16rem;
`;

const SocialLink = styled.a`
  padding-left: 0.6rem;
`;

const SocialIcon = styled.img`
  width: 4rem;
  height: 4rem;
  filter: invert(0.5);
`;
