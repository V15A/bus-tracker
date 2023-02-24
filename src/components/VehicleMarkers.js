import { Marker, Popup, CircleMarker, Tooltip } from "react-leaflet";
import { useState, useEffect } from "react";
import FetchData from "../FetchData";

export const VehicleMarkers = () => {
  const [markers, setMarkers] = useState([]);
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    const some = async () => {
      try {
        const dat = await FetchData(
          process.env.REACT_APP_VEHICLE_POSITIONS_URL
        );
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

  const vehicleColorHelper = (route_id) => {
    if (Number(route_id) === 1 || Number(route_id) === 3) {
      return "red";
    } else {
      return "blue";
    }
  };

  return markers.map((marker) => (
    <CircleMarker
      key={marker.id}
      radius={10}
      color={vehicleColorHelper(marker.vehicle.trip.route_id)}
      fillColor="White"
      fillOpacity={1}
      center={[
        marker.vehicle.position.latitude,
        marker.vehicle.position.longitude,
      ]}
    >
      <Tooltip>{marker.vehicle.trip.route_id}</Tooltip>
    </CircleMarker>
    /*<Marker
      key={marker.id}
      position={[
        marker.vehicle.position.latitude,
        marker.vehicle.position.longitude,
      ]}
    >
      <Popup>{marker.vehicle.trip.route_id}</Popup>
    </Marker>*/
  ));
};
