import "./App.css";
import SpendingSection from "./Spending/components/SpendingSection";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/spending" element={<SpendingSection />} />
        {/* <Route path="/" element={<Navigate to={getDeliveriesListPath()} />} />
    <Route path="*" element={<Page404 />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
