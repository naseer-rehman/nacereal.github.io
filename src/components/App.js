import './styles/App.scss';
import DesktopApp from "./DesktopApp";
import MobileApp from "./MobileApp";
import DeviceView from "./DeviceView";

const App = () => {
  return (
    <DeviceView 
    desktop={
      <DesktopApp />
    }
    mobile={
      <MobileApp />
    }
    />
  );
}

export default App;
