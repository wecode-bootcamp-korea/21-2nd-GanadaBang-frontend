import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

const SearchModal = ({ filterData }) => {
  const history = useHistory();
  const goToDongMap = (e, point, title) => {
    const dong = title.slice(title.lastIndexOf(' ') + 1, title.length);
    const currentPosition = {
      lng: point.x,
      lat: point.y,
    };

    history.push({
      pathname: `/map?position=${JSON.stringify(currentPosition)}&code=${
        e.target.id
      }&dong=${dong}`,
    });
  };
  return (
    <div>
      <SearchModalBox>
        <SearchTitle>도, 시, 동 지역</SearchTitle>
        <SearchContexts>
          {filterData?.map((data, idx) => (
            <SearchContext
              onClick={e => {
                goToDongMap(e, data.point, data.title);
              }}
              key={idx}
              id={data.id}
            >
              {data.title}
            </SearchContext>
          ))}
        </SearchContexts>
      </SearchModalBox>
    </div>
  );
};

export default SearchModal;

const SearchModalBox = styled.div`
  position: absolute;
  top: 8rem;
  left: 0;
  width: 118rem;
  height: 39.2rem;
  padding: 3rem;
  border-radius: 2px;
  background-color: white;
  box-shadow: #0000001a 0px 4px 20px 0px;
  overflow-y: scroll;
  z-index: 1000;
`;

const SearchTitle = styled.div`
  height: 3.2rem;
  padding: 0 0 0.8rem 4rem;
  color: ${({ theme }) => theme.black};
  font-size: 1.6rem;
  font-weight: 700;
`;

const SearchContexts = styled.div`
  width: 30rem;
`;

const SearchContext = styled(Link)`
  display: block;
  width: 100%;
  padding: 1.4rem 4rem;
  color: #656565;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    background-color: #f3f3f3;
  }
`;
