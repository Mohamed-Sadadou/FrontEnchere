import React, { useContext, useEffect } from "react";
import  FiltresContext  from "../FiltresContext";
import { useState, useLayoutEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Logo1 from "../../Images/logo.png";
import Logo from "../../Images/logo.png";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Link } from "react-scroll";

function getWindowDimensions() {
	const { innerWidth: width } = window;
	return width;
}

const useStyles = makeStyles((theme) => ({
	ActionBloc: {
		marginTop: "10px",
		width: "100%",
		height: "100%",
		float: "right",
		display: "flex",
	},
	blo: {
		width: "100%",
		height: "100%",
		borderRadius: "5px",
		marginRight: "1px",
		border: "1px solid #CECECE",
	},
	categorie: {
		height: "100%",
		width: "40%",
		marginLeft: "auto",
		marginTop: "8px",
		marginRight: "auto",
		color: "#002626",
		fontSize: 18,
		fontWeight: "bold",
		"&:hover": { cursor: "pointer" },
	},
	categorie2: {
		height: "100%",
		width: "65%",
		marginLeft: "auto",
		marginTop: "8px",
		marginRight: "auto",
		color: "#002626",
		fontSize: 18,
		fontWeight: "bold",
		"&:hover": { cursor: "pointer" },
	},
}));

export default function Categories(props) {
	const classes = useStyles();
	const [Categorie, setCategorie] = React.useState("");
	
	const { Filtre, setFiltre } = useContext(FiltresContext);

	const handleContexte = (Categorie) => {
		var fil = Filtre;
	
		fil.Categorie = Categorie;
		
		setFiltre(fil);
	};
	const Categories = [
		"Categorie",
		"Chalet",
		"Villa",
		"Appartement",
		"Duplex",
		"Maison",
		"Studio",
		"Isolée",
	];

	function useWindowSize() {
		const [size, setSize] = useState([0, 0]);
		useLayoutEffect(() => {
			function updateSize() {
				setSize([window.innerWidth, window.innerHeight]);
			}
			window.addEventListener("resize", updateSize);
			updateSize();
		}, []);
		return size;
	}
	useWindowSize();


	useEffect(() => {
   
	
		props.Etat.setetat(!props.Etat.etat);
	  }, [Filtre.Categorie]);
	return (
		<div style={{ height: "40px", width: "100%", marginTop: "10px" }}>
			<div
				style={{
					width: "100%",
					height: "1px",
					marginBottom: "14px",
					backgroundColor: "#CECECE",
				}}></div>
			<div className={classes.ActionBloc}>
				{Categories.map((Categ) => (
					<div className={classes.blo}>
						<Box
							className={classes.categorie}
							onClick={(e) => {
								setCategorie(Categ);
								
								handleContexte(Categ);
							}}
							value={Categ}>
							{Categ}
						</Box>
					</div>
				))}
				
			</div>
		</div>
	);
}
