import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import ListBox from '../../Components/ListBox/ListBox';
// import MapBox from '../Product/MapBox/MapBox';
// import ModalBox from '../Product/Modal/ModalBox';
import { POST_ROOMS_API } from '../../config';
import CookieIcon from '../../Components/CookieIcon/CookieIcon';

import { useParams } from 'react-router-dom';

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isFixed, setIsFixed] = useState(false);
  const [modal, setModal] = useState(false);
  console.log(useParams());
  const changeRoomType = roomType => {
    if (roomType === 'ONE_ROOM') return '원룸';

    return roomType === 'MULTI_ROOM' ? '투 · 쓰리룸' : '오피스텔';
  };

  const changeTradeType = tradeType => {
    if (tradeType === 'MONTHLY_RENT') return '월세';

    return tradeType === 'DEPOSIT' ? '전세' : '매매';
  };

  const OptionList = product.normal_option?.map(option => {
    return (
      <div>
        <Optionimg alt="옵션사진" src={option.image_url} />
        <OptionName>{option.name}</OptionName>
      </div>
    );
  });

  useEffect(() => {
    const detectScroll = () => {
      // if (window.scrollY > offset) {
      if (window.scrollY > 1330) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    document.addEventListener('scroll', detectScroll);

    return () => {
      document.removeEventListener('scroll', detectScroll);
    };
  }, []);

  // const openModal = () => {
  //   setModal(true);
  // };

  // const closeModal = () => {
  //   setModal(false);
  // };

  useEffect(() => {
    fetch(`${POST_ROOMS_API}/${id}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(function (res) {
        console.log(res.message);
        setProduct(res.message);
      });
  }, []);

  return (
    <>
      <Scroll
        style={{
          ...style,
          position: isFixed ? 'block' : 'fixed',
          top: isFixed ? 0 : -100,
        }}
      >
        <ScrollBar>
          <BarPrice>
            {changeTradeType(product.trade_type)} {product.deposit}/
            {product.monthly_rent}
          </BarPrice>
          <ScrollAgent>
            <BarAgent>{product.agent}</BarAgent>
          </ScrollAgent>
          <BarPhoneNumber>연락처 보기</BarPhoneNumber>
        </ScrollBar>
      </Scroll>
      <ProductInner>
        <Container>
          <Header>
            <Detail>
              <RoomInformation>
                <RoomType>{changeRoomType(product.room_type)}</RoomType>
                <div>
                  <Price>
                    {changeTradeType(product.trade_type)}
                    {product.deposit}/{product.monthly_rent}
                  </Price>
                </div>
              </RoomInformation>
              <FloorArea>
                <RoomArea>전용면적</RoomArea>
                <Acreage>{product.room_area}</Acreage>
              </FloorArea>
              <Lrealestate>
                <Agent>{product.agent}</Agent>
                <PhoneNumber>연락처보기</PhoneNumber>
              </Lrealestate>
            </Detail>
            <DetailInner>
              <CookieIcon />
            </DetailInner>
          </Header>
          <Info>
            <Confirm>
              <ConfirmYear>매물 2021</ConfirmYear>
              <ConfirmedItem>확인된 매물입니다.</ConfirmedItem>
            </Confirm>
            <InfoDetail>
              <ListBox product={product} />
            </InfoDetail>
          </Info>
          <Photo>
            <Number>매물 번호 20730964</Number>
            <PhotoList>
              {/* <ModalBox product={product} /> */}
              <PhotoMain>
                <Img alt="방안내사진" src={product.image && product.image[0]} />
              </PhotoMain>
              <PhotoSide>
                <div>
                  <Img alt="방사이드" src={product.image && product.image[1]} />
                </div>
                <div>
                  <Img alt="방사이드" src={product.image && product.image[2]} />
                </div>
                <div>
                  <Img alt="방사이드" src={product.image && product.image[3]} />
                </div>
                <SideSlide>
                  <SlidesPlus>
                    {/* <ModalBox product={product} /> */}
                  </SlidesPlus>
                  <Img
                    alt="방안내사진"
                    src={product.image && product.image[4]}
                  />
                </SideSlide>
              </PhotoSide>
            </PhotoList>
          </Photo>
          <div>
            <TextDetail>
              <TextContent>{product.title}</TextContent>
              <TextContentDetail>{product.content}</TextContentDetail>
            </TextDetail>
          </div>
        </Container>
        <div>
          <FixScroll>
            <ProductAdditional
              style={{
                ...style,
                position: isFixed ? 'fixed' : 'sticky',
                top: isFixed ? 90 : 0,
              }}
            >
              <AdditionalInner>
                <Move href="#RoomPrice">가격정보</Move>
                <Move href="#Option">옵션</Move>
                <Move href="#Location">위치</Move>
                <Move href="#Recommendation">추천매물</Move>
              </AdditionalInner>
            </ProductAdditional>
          </FixScroll>
          <RoomDetail>
            <a name="RoomPrice" />
            <RoomPrice>
              <RoomTitle>가격정보</RoomTitle>
              <PriceTable>
                <colgroup>
                  <ColWidth></ColWidth>
                  <ColWidth></ColWidth>
                </colgroup>
                <thead>
                  <TableHead>
                    <RentContent>
                      {changeTradeType(product.trade_type)}
                    </RentContent>
                    <TopContent>관리비</TopContent>
                    <TopContent>주차비</TopContent>
                    <TopContent>단기임대</TopContent>
                  </TableHead>
                </thead>
                <tbody>
                  <tr>
                    <RentMoney>
                      <BottomContent>
                        {product.deposit}/{product.monthly_rent}
                      </BottomContent>
                    </RentMoney>
                    <Tablebody>
                      <div>
                        <BottomContent>매월 10만원</BottomContent>
                        <OtherCosts>(청소비,경비비)</OtherCosts>
                      </div>
                      <Management>
                        <BottomContent>별도 금액으로 부과</BottomContent>
                        <OtherCosts>
                          (난방비, 전기료, 수도료, 가스사용료)
                        </OtherCosts>
                      </Management>
                    </Tablebody>
                    <Tablebody>
                      <BottomContent>월 5만원</BottomContent>
                    </Tablebody>
                    <Tablebody>
                      <BottomContent>불가능</BottomContent>
                    </Tablebody>
                  </tr>
                </tbody>
              </PriceTable>
            </RoomPrice>
            <a name="Option" />
            <Option>
              <RoomTitle>옵션</RoomTitle>
              <OptionInner>{OptionList}</OptionInner>
            </Option>
            <a name="Location" />
            <Location>
              <RoomTitle>위치</RoomTitle>
              <script
                type="text/javascript"
                src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=p1azd4sg7g"
              ></script>
              <DetailLocation>
                {product.state}
                {product.city}
                {product.dong}
                {product.detail}
              </DetailLocation>
              {/* <LocationMap>
                <MapBox />
              </LocationMap> */}
            </Location>
            <a name="Recommendation" />
            <Recommendation>
              <RoomTitle>추천매물</RoomTitle>
              {/* <RecommedBox /> */}
            </Recommendation>
          </RoomDetail>
        </div>
      </ProductInner>
    </>
  );
}

//스타일 컴포넌트
const ProductInner = styled.div`
  margin-top: 85px;
  width: 100%;
`;

const Container = styled.div`
  position: relative;
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

const RoomInformation = styled.li``;

const RoomType = styled.p`
  margin-bottom: 5px;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.gray};
`;

const Price = styled.h3`
  font-size: 30px;
`;

const FloorArea = styled.li`
  padding-left: 28px;
  margin-left: 28px;
  border-left: 1px solid #e7e7e7;
`;

const Acreage = styled.h3`
  font-size: 30px;
`;

const RoomArea = styled.p`
  margin-bottom: 5px;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.gray};
`;

const Lrealestate = styled.li`
  ${props => props.theme.flexSet('flex-end')}
  flex: 1 1 0%;
  padding-left: 28px;
  margin-left: 28px;
  border-left: 1px solid #e7e7e7;
`;

const Agent = styled.p`
  margin-bottom: 5px;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.gray};
`;

const PhoneNumber = styled.button`
  border: 1px solid #dddddd;
  border-radius: 19px;
  background-color: ${({ theme }) => theme.white};
  width: 80px;
  height: 33px;
  margin-left: 12px;
  cursor: pointer;
`;

const DetailInner = styled.div`
  display: flex;
  height: 22px;
  align-items: center;
`;

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

const ConfirmYear = styled.p`
  padding: 0px 20px 0px 15px;
  color: ${({ theme }) => theme.white};
  font-weight: 400;
  font-size: 1.3rem;
  background-color: #0640c0;
`;

const ConfirmedItem = styled.p`
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

const PhotoMain = styled.div``;

const PhotoSide = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const SideSlide = styled.div`
  ::after {
  }
`;

const SlidesPlus = styled.div`
  position: absolute;
  width: calc(100% / 4);
  height: 50%;
  background-color: rgba(0, 0, 0, 0.75);
  cursor: pointer;
`;

const ModalImg = styled.div``;

const TextDetail = styled.div`
  display: flex;
  min-height: 260px;
  margin-top: 50px;
  padding-bottom: 130px;
`;

const TextContent = styled.div`
  font-size: 2rem;
  min-width: 420px;
  padding-right: 150px;
`;

const TextContentDetail = styled.div`
  font-size: 16px;
  line-height: 26px;
  white-space: pre-wrap;
  padding-right: 20px;
`;

const ProductAdditional = styled.div`
  border: 1px solid #dddddd;
  z-index: 1;
  top: 0px;
  height: 58px;
  line-height: 56px;
  background-color: #ffffff;
`;

const FixScroll = styled.div`
  display: inline-block;
  width: 100%;
  z-index: 110;
`;

const style = { width: '100%' };

const Scroll = styled.div`
  z-index: 3;
  background-color: #326cf9;
  height: 90px;
`;

const ScrollBar = styled.div`
  display: flex;
  margin: 0px auto;
  padding: 0px 10px;
  width: 1200px;
  height: 100%;
  z-index: 2;
  align-items: center;
`;

const BarPrice = styled.div`
  color: ${({ theme }) => theme.white};
  font-size: 25px;
  font-weight: 400;
`;

const ScrollAgent = styled.div`
  margin-left: auto;
`;

const BarAgent = styled.p`
  margin-right: 12px;
  color: ${({ theme }) => theme.white};
  font-size: 1.6rem;
`;

const BarPhoneNumber = styled.button`
  height: 44px;
  margin-left: 20px;
  padding: 0px 23px;
  border: 0px;
  border-radius: 3px;
  background-color: #ffffff;
  color: #326cf9;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
`;

const AdditionalInner = styled.div`
  display: flex;
  font-size: 1.7rem;
  justify-content: center;
  width: 1200px;
  margin: 0 auto;
`;

const Move = styled.a`
  margin: 0 auto;
  cursor: pointer;
  color: #888888;
`;

const RoomDetail = styled.div`
  width: 1200px;
  height: 100%;
  margin: 0px auto;
  padding: 0px 10px;
`;

const RoomPrice = styled.div`
  padding-top: 120px;
  padding-bottom: 120px;
`;

const PriceTable = styled.table`
  width: 850px;
  margin: 30px auto 0px;
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
`;

const ColWidth = styled.col`
  width: 33%;
`;

const TableHead = styled.tr`
  border-bottom: 1px solid #eeeeee;
`;

const RentContent = styled.th`
  font-size: 15px;
  font-weight: 400;
  height: 50px;
  line-height: 50px;
`;

const TopContent = styled.th`
  border-left: 1px solid #eeeeee;
  font-size: 15px;
  font-weight: 400;
  height: 50px;
  line-height: 50px;
`;

const Tablebody = styled.td`
  border-left: 1px solid #eeeeee;
  padding-top: 20px;
  padding-bottom: 27px;
  vertical-align: top;
  padding: 10px 30px;
`;

const RentMoney = styled.td`
  padding-top: 20px;
  padding-bottom: 27px;
  vertical-align: top;
  padding: 10px 30px;
`;

const BottomContent = styled.p`
  margin: 15px 0px;
  color: #656565;
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
  line-height: 22px;
`;

const OtherCosts = styled.p`
  margin: 15px 0px;
  color: #656565;
  font-size: 1.3rem;
  font-weight: 400;
  text-align: center;
  line-height: 22px;
`;

const Management = styled.div`
  padding-top: 24px;
  padding-bottom: 0px;
  border-top: 1px dashed rgb(201, 201, 201);
  font-size: 14px;
`;

const Option = styled.div`
  padding-top: 120px;
  padding-bottom: 120px;
  position: relative;
  border-top: 1px solid #dddddd;
`;

const RoomTitle = styled.p`
  font-size: 28px;
  font-weight: 400;
  text-align: center;
  line-height: 41px;
`;

const OptionInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0px 104px;
  margin-top: 32px;
`;

const Optionimg = styled.img`
  width: 162px;
  height: 70px;
  margin-top: 40px;
`;

const OptionName = styled.p`
  margin-top: 5px;
  font-size: 1.5rem;
  line-height: 25px;
  text-align: center;
`;

const Location = styled.div`
  position: relative;
  padding-top: 120px;
  padding-bottom: 120px;
  border-top: 1px solid #dddddd;
`;

const DetailLocation = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  margin: 3px 0px 29px;
  color: rgb(102, 102, 102);
  font-size: 15px;
  line-height: 22px;
  text-align: center;
`;

const LocationMap = styled.div`
  width: 850px;
  height: 400px;
  margin: 0px auto;
  position: relative;
`;

const Recommendation = styled.div`
  padding-top: 120px;
  padding-bottom: 120px;
  border-top: 1px solid #dddddd;
`;

export default Product;
