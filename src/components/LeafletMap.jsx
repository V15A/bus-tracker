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
        <LayersControl position="topright">
          <LayersControl.BaseLayer name="HSLmap(default)" checked={true}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://cdn.digitransit.fi/map/v2/hsl-map-en-256/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="OpenStreetMap" checked={false}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="MapBox Streets" checked={false}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
            />
          </LayersControl.BaseLayer>
        </LayersControl>
        <VehicleMarkers />
        <StopPointMarkers />
      </MapContainer>
    </div>
  );
}
