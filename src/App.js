import React from 'react';
import MainPage from "./elektryk/MainPage";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <div className="App">
          <BrowserRouter>
            <MainPage/>
          </BrowserRouter>
      </div>
  );
}

export default App;
