import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Start from './Start';
import End from './End';
import Loading from "./Loading";  // Ensure the file name matches capitalization

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/start" element={<Start />} />
        <Route path="/end" element={<End />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
