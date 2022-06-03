import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

const App = () =>{
  return (
    <BrowserRouter  basename="/caffein">
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;
