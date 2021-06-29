import { useState, useEffect, useReducer } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components/macro';
import queryString from 'query-string';
import SearchWrap from './SubHeader/SearchWrap';
import FilterWrap from './SubHeader/FilterWrap';
import ListWrap from './Content/ListWrap';
import MapWrap from './Content/MapWrap';
import {
  useFilterReducer,
  FilterProvider,
  MapProvider,
} from '../../Util/useMapPageContext';
import { filterDataSet } from '../../Util/filterDataSet';
import { MAX_NUMBER } from '../../Util/getTypeName';
import { GET_ROOMS_API, GET_AREA_ROOMS_API } from '../../config';

function MapPage() {
  const location = useLocation();
  const [rooms, setRooms] = useState([]);
  const [filterList, dispatch] = useReducer(useFilterReducer, filterDataSet);
  const [markers, setMarkers] = useState([]);
  const [position, setPosition] = useState([]);
  const [zoom, setZoom] = useState(14);
  const [naverMap, setNaverMap] = useState();

  const queryToString = (code = '') => {
    const [roomTypes, dealTypes] = filterList.map(item => item.list);
    const [deposit, monthlyRent, sale] = filterList.find(item => item.range)
      .range.list;

    const makeRange = ({ range, unit }) => {
      const [min, max] = range;
      return [min * unit, max === 100 ? MAX_NUMBER : max * unit];
    };

    const filter = {
      roomType: roomTypes.filter(room => room.checked).map(room => room.id),
      tradeType: dealTypes.filter(deal => deal.checked).map(deal => deal.id),
      deposit: makeRange(deposit),
      monthlyRent: makeRange(monthlyRent),
      sale: makeRange(sale),
    };

    return `${JSON.stringify(filter)}&location=${JSON.stringify(
      position
    )}&zoom=${zoom}&code=${code}`;
  };

  const searchRooms = code => {
    fetch(`${GET_ROOMS_API}?filter=${queryToString(code)}`)
      .then(res => res.json())
      .then(rooms => setRooms(rooms));
  };

  const searchAreaMarkers = () => {
    fetch(`${GET_AREA_ROOMS_API}?filter=${queryToString()}`)
      .then(res => res.json())
      .then(data => {
        const { markers } = data;
        setMarkers(markers);
      });
  };

  useEffect(() => {
    if (!naverMap) return;

    const qs = location.search;

    if (qs) {
      const { position, code, dong } = queryString.parse(qs);

      if (!position || !code || !dong) return;

      searchRooms(code);
      searchAreaMarkers();
      location.search = '';
    } else {
      searchRooms();
      searchAreaMarkers();
    }
  }, [naverMap, filterList, position]);

  const map = {
    position,
    setPosition,
    zoom,
    setZoom,
    markers,
    setMarkers,
    searchRooms,
    naverMap,
    setNaverMap,
    searchAreaMarkers,
  };

  return (
    <Container>
      <FilterProvider value={dispatch}>
        <MapProvider value={map}>
          <SubHeader>
            <SearchWrap />
            <FilterWrap filterList={filterList} />
          </SubHeader>
          <Content>
            <ListWrap rooms={rooms} />
            <MapWrap />
          </Content>
        </MapProvider>
      </FilterProvider>
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  top: 8.5rem;
  width: 100vw;
  height: calc(100vh - 8.5rem);
`;

const SubHeader = styled.section`
  ${({ theme }) => theme.flexSet('flex-start', 'center')}
  width: 100%;
  height: 64px;
  border: 1px solid ${({ theme }) => theme.solidGray};
`;

const Content = styled.section`
  position: relative;
  ${({ theme }) => theme.flexSet('flex-start', 'flex-start')};
  width: 100%;
  height: calc(100% - 64px);
`;

export default MapPage;
