import {BrowserRouter,HashRouter,Link,Route,Routes, useNavigate} from "react-router-dom"
import React from "react";
import Netflix from "./pages/Netflix";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Player from "./pages/Player";
import Movies from "./pages/Movies";
import TvShow from "./pages/TvShow";
import MyList from "./pages/MyList";
import Xcription from "./pages/Xcription";
function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Netflix />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/player" element={<Player />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv" element={<TvShow />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path="/subscription" element={<Xcription />} />
      </Routes>
    </div>
  );
}

export default App;
