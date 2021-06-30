import React from 'react';
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps'; // 패키지 불러오기

function NaverMapAPI({ product }) {
  const navermaps = window.naver.maps;
  return (
    <NaverMap
      mapDivId={'maps-getting-started-uncontrolled'}
      style={{
        width: '850px',
        height: '400px',
      }}
      defaultCenter={{ lat: 37.50637292, lng: 127.0536407 }}
      defaultZoom={20}
    >
      <Marker
        key={1}
        position={new navermaps.LatLng(37.50637292, 127.0536407)}
        animation={2}
        onClick={() => {
          alert('가나다방입니다');
        }}
      />
    </NaverMap>
  );
}

function LocationMap() {
  return (
    <RenderAfterNavermapsLoaded
      ncpClientId={'YOUR_NCP_CLIENT_ID'}
      error={<p>Maps Load Error</p>}
      loading={<p>Maps Loading...</p>}
    >
      <NaverMapAPI />
    </RenderAfterNavermapsLoaded>
  );
}

export default LocationMap;
