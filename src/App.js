import "./App.css";
import LeafletMap from "./components/LeafletMap";
import { ApolloClient } from "@apollo/client";
import { ApolloProvider, InMemoryCache } from "@apollo/client";

// TODO: disable apollo cache
const client = new ApolloClient({
  uri: "https://api.digitransit.fi/routing/v2/finland/gtfs/v1",
  headers: {
    "digitransit-subscription-key": process.env.REACT_APP_DIGITRANSIT_API_KEY,
  },
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Bus Tracker</h1>
        </header>
        <LeafletMap />
      </div>
    </ApolloProvider>
  );
}

export default App;
