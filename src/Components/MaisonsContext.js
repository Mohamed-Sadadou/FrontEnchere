import { createContext } from "react";
const MaisonsContext = createContext({
	Maisons: [],
	setMaisons: (Maisons) => {},
});
export default MaisonsContext;

