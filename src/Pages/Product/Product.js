import React, { useState } from 'react';
import styled from 'styled-components/macro';

function Product() {
  // componentDidMount() {
  //   fetch('http://localhost:3000/data/dummy.json', {
  //     method: 'GET'
  // })
  // .then(function(res) {
  //   return res.json();
  // })
  // .then(function(res) {
  //   // data를 응답 받은 후의 로직
  // });
  //     });

  return (
    <ProductInner>
      <Container>
        <Header>
          <Detail>
            <li>
              <P>원룸</P>
              <div>
                <H3>월세 1000/55만원</H3>
              </div>
            </li>
            <FloorArea>
              <P>전용면적</P>
              <H3>
                23.14㎡
                <button>평</button>
              </H3>
            </FloorArea>
            <Lrealestate>
              <P>위코드부동산</P>
              <Call>연락처보기</Call>
            </Lrealestate>
          </Detail>
          <DetailInner></DetailInner>
        </Header>
        <Info>
          <Confirm>
            <ConfirmDetail1>매물 2021</ConfirmDetail1>
            <ConfirmDetail2>확인한 매물입니다.</ConfirmDetail2>
          </Confirm>
          <InfoDetail>
            <List>
              <Title>해당층/건물층</Title>
              <ListDetail>3층</ListDetail>
            </List>
          </InfoDetail>
        </Info>
        <Photo>
          <Number>매물 번호 20730964</Number>
          <PhotoList>
            <PhotoMain>
              <Img
                alt="방안내사진"
                src="https://lh3.googleusercontent.com/proxy/53MPqzdoYie1qcX49nwYHfyn6p-B1Levg9yWHwiwDd9-MeENbCfwEM95hRwX5BdEmqv8GHvTjRArTKNns6ePCEGALd4aH4P2ziKS9UKDkwk5uMHwEv2UP0qv4icVEtzbh3UyGOSC"
              />
            </PhotoMain>
            <PhotoSide>
              <div>
                <Img
                  alt="방사이드"
                  src="https://i1.wp.com/www.gangnamoneroom.com/wp-content/uploads/2019/08/cdpc.jpg?resize=480%2C360"
                />
              </div>
              <div>
                <Img
                  alt="방사이드"
                  src="https://i1.wp.com/www.gangnamoneroom.com/wp-content/uploads/2019/08/cdpc.jpg?resize=480%2C360"
                />
              </div>
              <div>
                <Img
                  alt="방사이드"
                  src="https://i1.wp.com/www.gangnamoneroom.com/wp-content/uploads/2019/08/cdpc.jpg?resize=480%2C360"
                />
              </div>
              <Slides>
                <SlidesPlus></SlidesPlus>
                <Img
                  alt="방안내사진"
                  src="https://lh3.googleusercontent.com/proxy/53MPqzdoYie1qcX49nwYHfyn6p-B1Levg9yWHwiwDd9-MeENbCfwEM95hRwX5BdEmqv8GHvTjRArTKNns6ePCEGALd4aH4P2ziKS9UKDkwk5uMHwEv2UP0qv4icVEtzbh3UyGOSC"
                />
              </Slides>
            </PhotoSide>
          </PhotoList>
        </Photo>
        <div>
          <TextDetail>
            <TextContent>
              서초역 도보 6분 풀옵션 원룸 위치 좋고 가격 좋은 신축급 컨디션
              깔끔한 집
            </TextContent>
            <TextContentDetail>
              -조용한 주택가에 위치한 다가구 원룸 -입구는 1층이나 창문쪽은
              지층이 있어 2층 높이 -새로 도배를 했으며 기본적인 수리는 마쳐놓은
              상태 -샤시는 이번에 새로 함 -인근에 이 동네 번화가가 위치해 있어
              생활이 편리 -롯데슈퍼가 1분거리에 있고 서초역 부근에 롯데마트가
              있음 -조금 멀리 보자면 서울 성모병원이나 고속터미널 남부터미널
              백화점등이 버스로 3~4정거장 내에 있어 이용이 편리 -반려동물은
              불가x
            </TextContentDetail>
          </TextDetail>
        </div>
      </Container>
      <ProductAdditional>
        <AdditionalInner>
          <A>가격정보</A>
          <A>옵션</A>
          <A>위치 및 기본시설</A>
          <A>추천매물</A>
        </AdditionalInner>
        <RoomDetail></RoomDetail>
      </ProductAdditional>
    </ProductInner>
  );
}

//스타일 컴포넌트
const ProductInner = styled.div`
  width: 100%;
`;

const Container = styled.div`
  width: 1200px;
  height: 100%;
  margin: 0px auto;
  padding: 0px 10em;
`;

const Header = styled.div`
  align-items: center;
  width: 100%;
  padding-top: 35px;
  margin-bottom: 25px;
`;

const Detail = styled.ul`
  margin-bottom: 35px;
  display: flex;
`;

const DetailInner = styled.div`
  display: flex;
  height: 22px;
`;

const P = styled.p`
  margin-bottom: 5px;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.gray};
`;

const FloorArea = styled.li`
  padding-left: 28px;
  margin-left: 28px;
  border-left: 1px solid #e7e7e7;
`;

const H3 = styled.h3`
  font-size: 3rem;
`;

const Lrealestate = styled.li`
  ${props => props.theme.flexSet('flex-end')}
  flex: 1 1 0%;
  padding-left: 28px;
  margin-left: 28px;
  border-left: 1px solid #e7e7e7;
`;

const Call = styled.button`
  border: 1px solid #dddddd;
  border-radius: 19px;
  background-color: ${({ theme }) => theme.white};
  width: 80px;
  height: 33px;
  margin-left: 12px;
  cursor: pointer;
`;

// const Button = styled.button`
//   border: 1pxs solid #22222;
// `;

const Info = styled.div`
  width: 100%;
`;

const Confirm = styled.div`
  display: flex;
  width: 100%;
  height: 36px;
  background-color: rgb(54, 101, 206);
  line-height: 36px;
  text-align: left;
`;

const ConfirmDetail1 = styled.p`
  padding: 0px 20px 0px 15px;
  color: ${({ theme }) => theme.white};
  font-weight: 400;
  font-size: 1.3rem;
  background-color: #0640c0;
`;
const ConfirmDetail2 = styled.p`
  padding: 0px 20px 0px 15px;
  color: ${({ theme }) => theme.white};
  font-weight: 400;
  font-size: 1.1rem;
`;

const InfoDetail = styled.ul`
  border-top: 2px solid #222222;
  display: flex;
  flex-wrap: wrap;
`;

const List = styled.li`
  ::before {
    content: '.';
    color: rgb(34, 34, 34);
    margin-right: 7px;
  }
  display: inline-flex;
  width: 25%;
  height: 50px;
  border-bottom: 1px solid #ebebeb;
  line-height: 50px;
`;

const Title = styled.p`
  width: 95px;
  color: rgb(134, 134, 134);
  font-size: 1.4rem;
`;

const ListDetail = styled.div`
  font-size: 1.4rem;
`;

const Photo = styled.div`
  position: relative;
  margin-top: 30px;
`;

const Number = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  display: inline-flex;
  align-items: center;
  height: 42px;
  padding: 0px 15px;
  border-radius: 3px;
  background-color: #545554;
  color: ${({ theme }) => theme.white};
`;

const PhotoList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const PhotoMain = styled.div`
  height: 420px;
`;

const PhotoSide = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const Slides = styled.div`
  ::after {
  }
`;

const SlidesPlus = styled.div`
  position: absolute;
  width: calc(100% / 4);
  height: 210px;
  background-color: rgba(0, 0, 0, 0.75);
  cursor: pointer;
`;

const TextDetail = styled.div`
  display: flex;
  min-height: 260px;
  margin-top: 50px;
  padding-bottom: 130px;
`;

const TextContent = styled.div`
  font-size: 2rem;
  width: 520px;
  padding-right: 150px;
`;

const TextContentDetail = styled.div`
  font-size: 16px;
  line-height: 26px;
  white-space: pre-wrap;
  width: calc(100% - 50px);
  padding-right: 20px;
`;

const ProductAdditional = styled.div`
  border: 1px solid #dddddd;
  height: 58px;
  line-height: 56px;
`;

const AdditionalInner = styled.div`
  display: flex;
  font-size: 1.7rem;
  justify-content: center;
  width: 1200px;
  margin: 0 auto;
`;

const A = styled.a`
  margin: 0 auto;
  cursor: pointer;
`;

const RoomDetail = styled.div`
  width: 1200px;
  height: 100%;
  margin: 0px auto;
  padding: 0px 10px;
`;

export default Product;
