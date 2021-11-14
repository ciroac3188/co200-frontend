import "./App.scss";
import Aside from "./components/aside/Aside.jsx";
import Footer from "./components/footer/Footer.jsx";
import Routes from "./routes/Routes.js";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
      <div className="wrapper">
      <Router>
        <Aside />
        <div className="main-panel">
          <div >
            <Routes />
          </div>
          <Footer />
        </div>
      </Router>
      </div>
  );
}

export default App;