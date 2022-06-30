import "./App.css";
import {  ApolloProvider } from "@apollo/client";
import GetCenters from "./Components/GetCenters";
import { client } from "./GraphQL/Settings";

function App() {
  return <ApolloProvider client={client}><GetCenters /></ApolloProvider>;
}

export default App;
