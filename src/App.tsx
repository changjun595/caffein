import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CampApply, CampDetail } from "./pages";
import Home from "./pages/home";

const App = () => {
  return (
    <BrowserRouter basename="caffein">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/camp/apply" element={<CampApply />} />
        <Route path="/camp/:id" element={<CampDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
