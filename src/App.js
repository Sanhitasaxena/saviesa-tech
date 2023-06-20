import Features from "./pages/Feature/Features";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/> 
          <Route path="/features" element={<Features />}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
