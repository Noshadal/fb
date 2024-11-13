import { BrowserRouter,Route,Routes } from "react-router-dom";
import './App.css'
import Start from './Start'
import End from './End'
import Continu from './Continu'

import Loading from "./loading";

function App() {
  
  return (
    <>
   <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Loading />} />
      <Route path="/start" element={<Start />} />
      <Route path="/continu" element={<Continu />} />
      <Route path="/End" element={<End />} />
      {/* <Route path="/loading" element={<NotFound />} /> */}
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
