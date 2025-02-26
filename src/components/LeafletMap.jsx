import { MapContainer, TileLayer } from "react-leaflet";
import { VehicleMarkers } from "./VehicleMarkers";
import { StopPointMarkers } from "./StopPointMarkers";
/**
 *
 * @returns Leaflet map component with layers and markers
 */
export default function LeafletComponent() {
  return (
    <div className="leaflet-container">
      <MapContainer center={[61.495, 23.775]} zoom={15} minZoom={10}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={`https://cdn.digitransit.fi/map/v3/hsl-map-en-256/{z}/{x}/{y}.png?digitransit-subscription-key=${process.env.REACT_APP_DIGITRANSIT_API_KEY}`}
        />

        <VehicleMarkers />
        <StopPointMarkers />
      </MapContainer>
    </div>
  );
}
