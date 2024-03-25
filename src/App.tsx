import "./App.css";
import SpendingSection from "./components/SpendingSection";
import IncomeSection from "./components/IncomeSection";
import Page from "./components/Page";
import { useSelector } from "react-redux";
import type { RootState } from "./store";
import { Mode } from "./domain/Mode";

function App() {
  const activeMode = useSelector((state: RootState) => state.mode.value);
  return (
    <Page>
      {activeMode === Mode.Spending && <SpendingSection />}
      {activeMode === Mode.Income && <IncomeSection />}
    </Page>
  );
}

export default App;
