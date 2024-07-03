import { createContext } from "react";
import isUserOnMobile from "../modules/checkMobile";

const IsMobileContext = createContext(false);

export default IsMobileContext;