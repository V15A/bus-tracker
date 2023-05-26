import { MapContainer, TileLayer, LayersControl } from "react-leaflet";
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
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" //"https://cdn.digitransit.fi/map/v2/hsl-map-en-256/{z}/{x}/{y}.png"
        />

        <VehicleMarkers />
        <StopPointMarkers />
      </MapContainer>
    </div>
  );
}
