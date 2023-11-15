import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Virtualized_List from "./Virtualized_List";
import BarChart from "./Components/BarChartCountry/BarChart";
import PieChart_1 from "./Components/CarModelandMaker/PieChart_1";
import Cars_and_Users from "./Components/CarListandUsers/Cars_and_Users";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BarChart />}></Route>
          <Route path="/BarChart" element={<BarChart />}></Route>
          <Route path="/PieChart_1" element={<PieChart_1 />}></Route>
          <Route
            path="/Virtualized_List"
            element={<Virtualized_List />}
          ></Route>
          <Route path="/Cars_and_Users" element={<Cars_and_Users />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
