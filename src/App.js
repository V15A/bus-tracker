import "./App.css";
import OpenStreetComponent from "./components/LeafletComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Bus Tracker</h1>
        <p>
          Use this app to see live location of Tampere public transit vehicles
          (bus and tram)
        </p>
      </header>
      {<OpenStreetComponent />}
    </div>
  );
}

export default App;
