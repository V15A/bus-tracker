import { Marker, Popup } from "react-leaflet";
import { useState, useEffect } from "react";
import FetchData from "../FetchData";

export const VehicleMarkers = () => {
  const [markers, setMarkers] = useState([]);
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    const some = async () => {
      try {
        const dat = await FetchData(process.env.REACT_APP_TKL_API_URL);
        setMarkers(dat.entity);
      } catch (error) {
        console.log(error);
      }
    };
    some();
    setTimeout(() => {
      setUpdate(!update);
    }, 1500);
  }, [update]);

  return markers.map((marker) => (
    <Marker
      key={marker.id}
      position={[
        marker.vehicle.position.latitude,
        marker.vehicle.position.longitude,
      ]}
    >
      <Popup>{marker.vehicle.trip.route_id}</Popup>
    </Marker>
  ));
};
