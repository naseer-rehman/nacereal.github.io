import { isMobile } from "../modules/checkScreenType";

const DeviceView = ({desktop, mobile}) => {
  return isMobile() ? mobile : desktop;
};

export default DeviceView;
