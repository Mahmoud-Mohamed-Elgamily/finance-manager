import { Nav } from "react-bootstrap";
import { ITab } from "../types/tab.type";
import "./styles.scss";
const setActiveTab = (
  tabs: ITab[],
  setTabs: React.Dispatch<React.SetStateAction<ITab[]>>,
  eventKey: string
): void => {
  setTabs(
    tabs.map((tab: ITab) => {
      tab.active = tab.eventKey == eventKey ? true : false;
      return tab;
    })
  );
};
const CustomNav = ({
  tabs,
  setTabs,
}: {
  tabs: ITab[];
  setTabs: React.Dispatch<React.SetStateAction<ITab[]>>;
}) => {
  return (
    <Nav justify variant="tabs" defaultActiveKey={tabs[0].eventKey}>
      {tabs.map((tab: any) => (
        <Nav.Item
          key={tab.eventKey}
          onClick={() => setActiveTab(tabs, setTabs, tab.eventKey)}
        >
          <Nav.Link eventKey={tab.eventKey}>{tab.title}</Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default CustomNav;
