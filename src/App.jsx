import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from './pages/HomePage';
import BusListPage from './pages/BusListPage';
import BusInfoPage from './pages/BusInfoPage';
import RouteInfoPage from './pages/RouteInfoPage';
import RouteMapPage from './pages/RouteMapPage';


function App() {

  return (
    <>
      <div id="App" className="w-full h-full">
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/bus" element={<BusListPage />} />
            <Route path="/info" element={<BusInfoPage />} />
            <Route path="/route-info" element={<RouteInfoPage />} />
            <Route path="/map" element={<RouteMapPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App
