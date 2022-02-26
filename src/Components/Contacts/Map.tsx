import React, { useState } from 'react';
import Branches from './Branches';
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from '@react-google-maps/api';

const center = {
  lat: 55.744,
  lng: 37.61,
};

const containerStyle = {
  width: '100%',
  height: '400px',
};

function Map() {
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker: any) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDVnFA8gRaGwjISvlDMRVXKifeqp1ycTiI',
  });

  return isLoaded ? (
    <GoogleMap
      onClick={() => setActiveMarker(null)}
      center={center}
      zoom={13}
      mapContainerStyle={containerStyle}
    >
      {Branches.map(({ idFilial, filialTitle, adress, lat, lon, phone }) => (
        <Marker
          key={idFilial}
          position={{ lat: Number(lat), lng: Number(lon) }}
          onClick={() => handleActiveMarker(idFilial)}
        >
          {activeMarker === idFilial ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>
                <p>
                  <b>{filialTitle}</b>
                </p>
                <p>{adress}</p>
                <p>{phone}</p>
              </div>
            </InfoWindow>
          ) : null}
        </Marker>
      ))}
    </GoogleMap>
  ) : (
    <div>Map cannot be loaded right now, sorry.</div>
  );
}

export default Map;
