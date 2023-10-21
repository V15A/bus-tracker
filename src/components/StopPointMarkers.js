import { Marker, CircleMarker, Popup, useMapEvents } from "react-leaflet";
import { useState, useEffect } from "react";
import L from "leaflet";
import FetchData from "../Util/FetchJsonData";
import StopIcon from "../assets/bus-stop_small.png";

/**
 *
 * @returns Markers for all the transit stop points
 */
export const StopPointMarkers = () => {
  const [markers, setMarkers] = useState([]);
  const [zoom, setZoom] = useState(15);
  useMapEvents({
    zoom: (zoom) => {
      setZoom(zoom.target._zoom);
    },
  });

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
  }, []);

  const chooseMarker = () => {
    if (zoom < 14) {
      return null;
    } else if (zoom < 16) {
      return markers.map((marker) => (
        <CircleMarker
          key={marker.shortName}
          radius={4}
          center={[
            marker.location.split(",")[0],
            marker.location.split(",")[1],
          ]}
        >
          <Popup>{marker.name}</Popup>
        </CircleMarker>
      ));
    } else {
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
          position={[
            marker.location.split(",")[0],
            marker.location.split(",")[1],
          ]}
        >
          <Popup>{marker.name}</Popup>
        </Marker>
      ));
    }
  };

  return chooseMarker();
};
