import React from "react";
import { useState, useLayoutEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Back1 from "../../Images/a.jpg";
import Nav from "../Composants/NavBar";
const useStyles = makeStyles((theme) => ({
	Corp: {
		width: "100%",
		height: "100vh",
		backgroundImage: `url(${Back1})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
	},
	BlocTitre: {
		width: "45%",
		height: "200px",
		marginTop: "180px",
		position: "relative",
		float: "right",
		marginRight: "10px",
	},
	Titre: {
		color: "#002626",
		fontSize: 52,
		fontWeight: "bold",
	},
	Titre2: {
		color: "#8fe388",
		fontSize: 52,
		fontWeight: "bold",
	},
	Second: {
		display: "flex",
		flexDirection: "row",
	},
    butt:{
        width: "70%",
        marginTop:'60px',
        marginLeft:'auto',
        marginRight:'auto',
    }
}));
const ButtonSpe = styled(Button)({
	boxShadow: "none",
	textTransform: "none",
	width: "70%",
	height: "60px",
	fontSize: 18,
	padding: "6px 12px",
	lineHeight: 1.5,
	border: "solid 0.5px #8fe388",
	borderRadius: "5px",
	backgroundColor: "#8fe388",
	color: "#002626",
	fontFamily: " 'Manrope', sans-serif",
	fontWeight: "bold",
	"&:hover": {
		backgroundColor: "#8fe388",
		boxShadow: "none",
	},
});
export default function LandingPage() {
	const classes = useStyles();

	return (
		<div className={classes.Corp}>
			{/* une app barre*/}
			<Nav />
			{/* un titre*/}

			<div className={classes.BlocTitre}>
				<Box className={classes.Titre}> Acheter les meilleurs</Box>
				<div className={classes.Second}>
					<Box className={classes.Titre}> Maisons </Box>
					<div style={{ width: "15px" }}></div>
					<Box className={classes.Titre2}> Aux enchères </Box>
				</div>
				<div className={classes.butt}>
					<ButtonSpe onClick={()=>{
                        window.location="/Login";
                    }}>Encherir</ButtonSpe>
				</div>
			</div>
			{/* un bouton */}
		</div>
	);

	//******************************************** */
}
