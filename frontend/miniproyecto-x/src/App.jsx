import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CustomersList from "./components/CustomerList";
import CustomerSearch from "./components/CustomerSearch";
import RegisterSale from "./components/RegisterSale";
import SalesList from "./components/SalesList";
import SalesReport from "./components/SalesReport";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/customers" element={<CustomersList />} />
        <Route path="/customers/search" element={<CustomerSearch />} />

        <Route path="/sales" element={<SalesList />} />
        <Route path="/sales/new" element={<RegisterSale />} />
        <Route path="/sales/report" element={<SalesReport />} />
      </Routes>
    </Router>
  );
}

export default App;
