import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from './pages/HomePage';
import BustListPage from './pages/BustListPage';


function App() {

  return (
    <>
      <div id="App" className="w-full h-full">
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/bus" element={<BustListPage />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App
