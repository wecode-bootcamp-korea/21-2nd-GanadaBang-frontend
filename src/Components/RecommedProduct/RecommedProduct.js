import { Link, useLocation, useHistory } from 'react-router-dom';
import { icons } from '../../icons';
import styled from 'styled-components/macro';

const RecommedProduct = ({ randomData }) => {
  const location = useLocation();
  const history = useHistory();

  const changeRoomType = roomType => {
    if (roomType === 'ONE_ROOM') return '원룸';

    return roomType === 'MULTI_ROOM' ? '투 · 쓰리룸' : '오피스텔';
  };

  const changeTradeType = tradeType => {
    if (tradeType === 'MONTHLY_RENT') return '월세';

    return tradeType === 'DEPOSIT' ? '전세' : '매매';
  };

  const changePrice = (deposit, monthlyRent) => {
    const numToString = deposit.toString();
    if (deposit >= 10000) {
      return ` ${numToString.substring(0, 1)}억${numToString.substring(
        1,
        numToString.length
      )}`;
    } else {
      return ` ${deposit}/${monthlyRent}`;
    }
  };

  const changeFloor = (floor, roomArea) => {
    return `${floor}층, ${roomArea}m`;
  };

  return (
    <>
      {randomData.map((data, idx) => {
        return (
          <RecommedList key={idx} to={`rooms/${data.id}`}>
            <RoomImageBox>
              <RoomImage src={data.room_image}></RoomImage>
              <Likes>
                <LikesImg src={icons.heart} />
              </Likes>
            </RoomImageBox>
            <RoomCondition>{changeRoomType(data.room_type)}</RoomCondition>
            <RoomTitle>
              {changeTradeType(data.trade_type)}
              {changePrice(data.deposit, data.monthly_rent)}
            </RoomTitle>
            <RoomContext>
              {changeFloor(data.floor, data.room_area)}
              <sup>2</sup>
            </RoomContext>
            <RoomContext>{data.title}</RoomContext>
          </RecommedList>
        );
      })}
    </>
  );
};

export default RecommedProduct;

const RecommedList = styled(Link)`
  padding-right: 2rem;
  overflow: hidden;

  &:nth-last-child(1) {
    padding: 0;
  }
`;

const RoomImageBox = styled.div`
  position: relative;
  height: 18.6rem;
  margin: 2rem 0;
`;

const RoomImage = styled.img`
  width: 100%;
  height: 100%;

  &:hover {
    filter: brightness(0.8);
  }
`;

const Likes = styled.span`
  position: absolute;
  top: 10px;
  right: 5px;
  width: 3rem;
  height: 2rem;
  filter: invert(1);
  cursor: pointer;
`;

const LikesImg = styled.img`
  width: 100%;
  height: 100%;
`;

const RoomCondition = styled.div`
  margin-bottom: 4px;
  color: rgb(34, 34, 34);
  font-size: 13px;
  line-height: 19px;
`;

const RoomTitle = styled.div`
  margin: 1rem 0;
  color: rgb(34, 34, 34);
  font-size: 20px;
  font-weight: 700;
`;

const RoomContext = styled.div`
  margin: 0.4rem 0;
  color: rgb(34, 34, 34);
  font-size: 14px;
  font-weight: 300;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
