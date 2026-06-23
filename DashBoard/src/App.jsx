import { Routes, Route } from "react-router-dom";

import LeftandRightHome from "./HomeSection/LeftandRightHome";
import Summary from "./HomeSection/Summary";
import Order from "./HomeSection/Order";
import Holdings from "./HomeSection/Holdings";
import Position from "./HomeSection/Position";
import Funds from "./HomeSection/Funds";
import AppsSystem from "./HomeSection/AppsSystem";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LeftandRightHome />}>
        <Route index element={<Summary />} />
        <Route path="orders" element={<Order />} />
        <Route path="holdings" element={<Holdings />} />
        <Route path="positions" element={<Position />} />
        <Route path="funds" element={<Funds />} />
        <Route path="apps" element={<AppsSystem />} />
      </Route>
    </Routes>
  );
}

export default App;