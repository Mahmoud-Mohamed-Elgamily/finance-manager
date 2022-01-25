import { Container } from "react-bootstrap";
import "./App.css";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.css";
import CustomNav from "./partials/CustomNav";
import { useState } from "react";
import { ITab } from "./types/tab.type";
import Reports from "./pages/Reports";

const renderComponent = (tabs: ITab[]) => {
  switch (tabs.find((tab) => tab.active)?.eventKey) {
    case "Home":
      return <Home />;

    case "Reports":
      return <Reports />;
  }
};

function App() {
  const [tabs, setTabs] = useState([
    {
      title: "New Payment",
      eventKey: "Home",
      active: true,
    },
    {
      title: "Reports",
      eventKey: "Reports",
      active: false,
    },
  ]);
  return (
    <Container style={{ height: "100vh", textAlign: "left" }}>
      <CustomNav tabs={tabs} setTabs={setTabs} />
      {renderComponent(tabs)}
    </Container>
  );
}

export default App;
