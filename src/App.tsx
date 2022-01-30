import { Container } from "react-bootstrap";
import "./App.css";
import Payment from "./pages/Payment";
import CustomNav from "./partials/CustomNav";
import { useState } from "react";
import Reports from "./pages/Reports";
import { ITab } from "./types/tab.type";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-typeahead/css/Typeahead.css";

function App() {
  const [tabs, setTabs] = useState<ITab[]>([
    {
      title: "New Payment",
      eventKey: "Payment",
      active: true,
      component: <Payment />,
    },
    {
      title: "Reports",
      eventKey: "Reports",
      active: false,
      component: <Reports />,
    },
  ]);
  return (
    <Container style={{ height: "100vh", textAlign: "left" }}>
      <CustomNav tabs={tabs} setTabs={setTabs} />
      <br />
      {tabs.find((tab) => tab.active)?.component}
    </Container>
  );
}

export default App;
