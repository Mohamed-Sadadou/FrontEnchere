import { createContext } from "react";
const FiltresContext = createContext({
	Filtre: "false",
	setFiltre: () => {}
  });
export default FiltresContext;

