import { useState } from 'react';
import styled from 'styled-components/macro';
import ListItem from './List/Item';
import Pagination from '../../../Components/Pagination/Pagination';
import { useMapContext } from '../../../Util/useMapPageContext';

export default function ListWrap({ rooms: { room_list } }) {
  const totalRecords = room_list ? `${room_list.length}개` : '';
  const [filterRooms, setFilterRooms] = useState(room_list);
  const { searchRooms } = useMapContext();

  const outputItem = data => {
    setFilterRooms(data);
  };

  return (
    <Container>
      <TabWrapper>
        <button onClick={() => searchRooms()}>전체 방 {totalRecords}</button>
      </TabWrapper>
      <MainWrapper>
        <List>
          {filterRooms?.map(room => (
            <ListItem key={room.id} room={room} />
          ))}
        </List>
        {room_list && <Pagination items={room_list} outputItem={outputItem} />}
      </MainWrapper>
    </Container>
  );
}

const Container = styled.section`
  width: 400px;
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.solidGray};
`;

const TabWrapper = styled.nav`
  ${({ theme }) => theme.flexSet('flex-start')};
  height: 56px;
  padding: 10px 15px;
  border-bottom: 1px solid ${({ theme }) => theme.solidGray};

  button {
    padding-bottom: 5px;
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.blue};
    border-bottom: 1px solid ${({ theme }) => theme.blue};
  }
`;

const MainWrapper = styled.div`
  height: calc(100% - 56px);
  overflow: auto;
`;

const List = styled.ul``;
