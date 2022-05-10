import * as React from "react";
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
        marginTop:'10px',
		width: "100%",
		height: "100%",
		float: "right",
		display: "flex",
	},
	blo: {
		width: "100%",
		height: "100%",
        borderRadius:'5px',
        marginRight:'1px',
		border: "1px solid #CECECE",
	},
    categorie:{
		height: "100%",
        width:'40%',
        marginLeft:'auto',
        marginTop:'8px',
        marginRight:'auto',
        color: "#002626",
		fontSize: 18,
		fontWeight: "bold",
        "&:hover": { cursor: "pointer" },
    },
	categorie2:{
		height: "100%",
        width:'65%',
        marginLeft:'auto',
        marginTop:'8px',
        marginRight:'auto',
        color: "#002626",
		fontSize: 18,
		fontWeight: "bold",
        "&:hover": { cursor: "pointer" },
    },
}));


export default function MenuAppBar(props) {
	const classes = useStyles();

	var color;

	if (props.id === "1") color = { color: "black" };
	else color = { color: "#002626" };
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
	return (
		<div style={{ height: "40px",width:'100%', marginTop:'10px'}}>
            <div style={{width:'100%', height:'1px',marginBottom:'14px', backgroundColor:'#CECECE'}}></div>
			<div className={classes.ActionBloc}>
				<div className={classes.blo}>
                    <Box className={classes.categorie}> Chalais </Box>
                </div>
                <div className={classes.blo}>
                    <Box className={classes.categorie}> Maisons </Box>
                </div>
                <div className={classes.blo}>
                    <Box className={classes.categorie}> Villa </Box>
                </div>
                <div className={classes.blo}>
                    <Box className={classes.categorie2}> Appartement </Box>
                </div>
                <div className={classes.blo}>
                    <Box className={classes.categorie}>  Duplex </Box>
                </div>
                <div className={classes.blo}>
                    <Box className={classes.categorie}> Maison</Box>
                </div>
                <div className={classes.blo}>
                    <Box className={classes.categorie}>Studio</Box>
                </div>
                <div className={classes.blo}>
                    <Box className={classes.categorie}>Isolée</Box>
                </div>
                
			</div>
		</div>
	);
}
