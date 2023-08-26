import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./page/Home";
import Complete from "./page/Complete-task";
import Edit from "./page/Edit";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/complete" element={<Complete />} />
          <Route exact path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
