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
      <MapContainer center={[61.495, 23.775]} zoom={14}>
        <LayersControl position="topright">
          <LayersControl.BaseLayer name="OpenStreetMap" checked={false}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="MapBox Streets" checked={true}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
            />
          </LayersControl.BaseLayer>
          <LayersControl.Overlay name="OpenTopoMap" checked={false}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
              opacity={0.5}
            />
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Transit" checked={false}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/layers=T/{z}/{x}/{y}.png"
            />
          </LayersControl.Overlay>
        </LayersControl>
        <VehicleMarkers />
        <StopPointMarkers />
      </MapContainer>
    </div>
  );
}
