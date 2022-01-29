
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from "./components/Navbar.jsx"
import Home from "./components/Home.jsx"
import Types from "./components/Types.jsx"

function App() {
  return (
    <Router>
      <Navbar />
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/" element={<Types />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
