import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import RouteViews from "./components/RouteViews";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <RouteViews />
      </Router>
    </>
  );
}

export default App;
