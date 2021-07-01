import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components/macro';
import queryString from 'query-string';
import NaverMap, { Overlay, Polygon } from 'react-naver-map';
import { useMapContext } from '../../../Util/useMapPageContext';
import { YOUR_CLIENT_ID } from '../../../key';

export default function MapWrap() {
  const [initPosition, setInitPosition] = useState({});
  const [polyPath, setPolyPath] = useState([]);
  const location = useLocation();

  const {
    setPosition,
    zoom,
    setZoom,
    markers,
    searchRooms,
    searchAreaMarkers,
    naverMap,
    setNaverMap,
  } = useMapContext();

  useEffect(() => {
    const getInitPosition = async () => {
      const qs = location.search;

      if (qs) {
        const { position, code, dong } = queryString.parse(qs);

        if (!position || !code || !dong) return getCurrentPosition();

        if (naverMap) {
          naverMap.setCenter(JSON.parse(position));
        }

        handlePolyPath(code);
        return JSON.parse(position);
      } else {
        return getCurrentPosition();
      }
    };
    getInitPosition().then(res => setInitPosition(res));
  }, [location.search]);

  const getCurrentPosition = () => {
    return new Promise(resolve => {
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      };

      function success(position) {
        const { latitude, longitude } = position.coords;
        return resolve({ lat: latitude, lng: longitude });
      }

      function error(err) {
        return resolve({ lat: 37.5061144, lng: 127.0538923 });
      }

      navigator.geolocation.getCurrentPosition(success, error, options);
    });
  };

  const eventBoundHandle = bounds => {
    const currentZoom = naverMap.getZoom();
    setZoom(currentZoom);
    handleCurrentBounds();
    handlePolyPath();
  };

  const handleCurrentBounds = () => {
    const northEast = naverMap.bounds.getNE();
    const southWest = naverMap.bounds.getSW();

    setPosition([
      [southWest._lng, southWest._lat],
      [northEast._lng, northEast._lat],
    ]);
  };

  const fetchDongArea = code => {
    fetch(`https://d2pi55cyzoqmrc.cloudfront.net/geojson/region/${code}`)
      .then(res => res.json())
      .then(geojson => {
        const { coordinates } = geojson;

        const polyPaths = [
          coordinates[0][0].map(coor => {
            const [lng, lat] = coor;
            return { lat, lng };
          }),
        ];

        setPolyPath(polyPaths);
      });
  };

  const handlePolyPath = code => {
    setPolyPath([]);
    searchRooms(code);
    searchAreaMarkers();
    if (code) {
      fetchDongArea(code);
    }
  };

  if (!Object.keys(initPosition).length) {
    return <Loading>Naver Map loading...</Loading>;
  }

  return (
    <Container>
      <NaverMap
        clientId={YOUR_CLIENT_ID}
        ncp
        style={{ width: '100%', height: '100%' }}
        initialPosition={initPosition}
        initialZoom={zoom}
        onInit={(map, naver) => {
          setNaverMap(map);

          map.setOptions({
            mapTypeControl: true,
            zoomControl: true,
            zoomControlOptions: {
              style: naver.maps.ZoomControlStyle.SMALL,
              position: naver.maps.Position.RIGHT_CENTER,
            },
          });
        }}
        onMapClick={event => {
          handlePolyPath();
        }}
        onBoundChange={bounds => {
          eventBoundHandle(bounds);
        }}
        submodules={['drawing', 'geocoder']}
      >
        {markers.map((marker, index) => {
          return (
            <div
              key={index}
              onClick={e => {
                handlePolyPath(marker.code);
                e.stopPropagation();
              }}
            >
              <Overlay lat={marker.lat} lng={marker.lng} zIndex={200}>
                <AreaDiv>
                  <h1>{marker.count}</h1>
                  <p>{marker.name}</p>
                </AreaDiv>
              </Overlay>
            </div>
          );
        })}
        {polyPath.length !== 0 && (
          <Polygon
            paths={polyPath}
            fillColor={'#3798FF'}
            fillOpacity={0.5}
            strokeColor={'#4d6fd3'}
            strokeOpacity={1}
            strokeWeight={3}
          />
        )}
      </NaverMap>
    </Container>
  );
}

const Loading = styled.section`
  font-size: 2rem;
  font-family: 'Gugi', cursive;
  color: ${({ theme }) => theme.blue};
`;

const Container = styled.section`
  flex-grow: 1;
  height: 100%;
`;

const AreaDiv = styled.div`
  position: relative;
  top: 0px;
  left: -50%;
  transform: translate(0px, -50%);
  cursor: pointer;

  h1 {
    position: relative;
    min-width: 30px;
    height: 30px;
    padding: 0px 6px;
    color: ${({ theme }) => theme.white};
    font-size: 12px;
    line-height: 26px;
    text-align: center;
    border: 2px solid ${({ theme }) => theme.blue};
    border-radius: 30px;
    background-color: ${({ theme }) => theme.blue};
    z-index: 2;
  }

  p {
    position: absolute;
    height: 30px;
    padding-left: calc(100% + 4px);
    padding-right: 10px;
    font-size: 12px;
    border-radius: 30px;
    top: 50%;
    left: 0px;
    transform: translateY(-50%);
    z-index: 1;
    line-height: 28px;
    white-space: nowrap;
    color: ${({ theme }) => theme.blue};
    border: 1px solid ${({ theme }) => theme.blue};
    background-color: ${({ theme }) => theme.white};
  }
`;
