import { CircleMarker, Tooltip, Pane } from "react-leaflet";
import { useState, useEffect } from "react";
import FetchData from "../FetchData";
/**
 *
 * @returns Markers for each vehicle with a tooltip showing the route_id
 */
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

  return markers.map((marker, index) => (
    <Pane
      name={"somePane" + marker.id}
      style={{ zIndex: 650 + index }}
      key={marker.id}
    >
      <CircleMarker
        key={marker.id}
        radius={12}
        pathOptions={{
          color: vehicleColorHelper(marker.vehicle.trip.route_id),
        }}
        fillColor="White"
        fillOpacity={1}
        center={[
          marker.vehicle.position.latitude,
          marker.vehicle.position.longitude,
        ]}
      >
        <Tooltip
          permanent={true}
          direction={"center"}
          className="leaflet-vehicle-tooltip"
        >
          {marker.vehicle.trip.route_id}
        </Tooltip>
      </CircleMarker>
    </Pane>
  ));
};
