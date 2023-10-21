import { MapContainer, TileLayer } from "react-leaflet";
import { VehicleMarkers } from "./VehicleMarkers";
import { StopPointMarkers } from "./StopPointMarkers";
/**
 *
 * @returns Leaflet map component with layers and markers
 */
export default function LeafletComponent() {
  return (
    <div class="leaflet-container">
      <MapContainer center={[61.495, 23.775]} zoom={15} minZoom={10}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://dev-api.digitransit.fi/map/v2/hsl-map-en-256/{z}/{x}/{y}.png?digitransit-subscription-key=c07c7f1e3a13429d996d5aa54b91ebd8"
        />

        <VehicleMarkers />
        <StopPointMarkers />
      </MapContainer>
    </div>
  );
}
