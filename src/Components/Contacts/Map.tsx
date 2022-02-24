import React, { useState } from 'react';
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from '@react-google-maps/api';

const center = {
  lat: 55.72647,
  lng: 37.5796,
};

const marker = [
  {
    id: 1,
    name: 'Шаурма № 1 на Комсомольской',
    address: 'Комсомольский проспект, 28',
    phone: '+ 996 705 188 955',
    position: { lat: 55.72637, lng: 37.5796 },
  },
];

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
      zoom={18}
      mapContainerStyle={containerStyle}
    >
      {marker.map(({ id, name, address, position, phone }) => (
        <Marker
          key={id}
          position={position}
          onClick={() => handleActiveMarker(id)}
        >
          {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>
                <p>
                  <b>{name}</b>
                </p>
                <p>{address}</p>
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
