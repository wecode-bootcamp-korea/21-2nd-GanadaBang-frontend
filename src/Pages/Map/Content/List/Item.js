import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getRoomTypeName } from '../../../../Util/getTypeName';

export default function ListItem({
  room: { id, room_image, title, room_type, content, state, city, dong },
}) {
  return (
    <Container>
      <Link to={`rooms/${id}`}>
        <ImgWrapper>
          <img src={room_image} alt="방이미지" />
        </ImgWrapper>
        <Content>
          <Title>{title}</Title>
          <RoomType>{getRoomTypeName(room_type)}</RoomType>
          <Desc>{content}</Desc>
          <Desc>
            {state} {city} {dong}
          </Desc>
        </Content>
      </Link>
    </Container>
  );
}

const Container = styled.li`
  ${props => props.theme.flexSet('center', 'flex-start')}
  width: 100%;
  padding: 16px 15px;
  cursor: pointer;
  border-bottom: 1px solid ${props => props.theme.solidGray};

  &:hover {
    opacity: 0.8;
    background-color: rgb(240, 244, 250);
  }

  a {
    ${props => props.theme.flexSet('center', 'center')}
  }
`;

const ImgWrapper = styled.div`
  flex: 1;
  width: 140px;
  height: 140px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Content = styled.div`
  flex: 1;
  max-width: 200px;
  padding-left: 20px;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 700;
  height: 20px;
  margin-bottom: 4px;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const RoomType = styled.p`
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 8px;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Desc = styled.p`
  font-size: 14px;
  font-weight: 300;
  height: 30px;
  text-overflow: ellipsis;
  overflow: hidden;
`;
