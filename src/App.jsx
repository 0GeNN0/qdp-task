import './app.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Details from './Details';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='shows/:id' element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
