import { Marker, Popup } from "react-leaflet";
import { useState, useEffect } from "react";
import L from "leaflet";
import FetchData from "../FetchJsonData";
import StopIcon from "../assets/bus-stop.png";

/**
 *
 * @returns Markers for all the transit stop points
 */
export const StopPointMarkers = () => {
  const [markers, setMarkers] = useState([]);
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    const getStopPoints = async () => {
      try {
        const data = await FetchData(process.env.REACT_APP_STOP_POINTS_URL);
        setMarkers(data.body);
      } catch (error) {
        console.log(error);
      }
    };
    getStopPoints();
  }, [update]);

  return markers.map((marker) => (
    <Marker
      key={marker.shortName}
      icon={
        new L.Icon({
          iconUrl: StopIcon,
          iconSize: [25, 25],
          iconAnchor: [12.5, 25],
        })
      }
      position={[marker.location.split(",")[0], marker.location.split(",")[1]]}
    >
      <Popup>{marker.name}</Popup>
    </Marker>
  ));
};
