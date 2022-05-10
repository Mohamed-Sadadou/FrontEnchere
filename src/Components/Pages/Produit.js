import React from "react";
import { makeStyles } from "@material-ui/core";
import NavBar from "../Composants/NavBar";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
const useStyles = makeStyles((theme) => ({
	Content: {
		width: "95%",
		height: "80vh",
		marginTop: "30px",
		marginLeft: "auto",
		marginRight: "auto",
		padding: 0,
		display: "flex",
		gridTemplateColumns: "row",
	},
	Images: {
		width: "40%",
		//backgroundColor: "green",
		marginLeft: "auto",
		marginRight: "auto",
	},
	Desc: {
		width: "60%",
		//backgroundColor: "black",
		marginLeft: "auto",
		marginRight: "auto",
	},
	image1: {
		width: "90%",
		height: "60%",
		//backgroundColor: "red",
		marginLeft: "auto",
		marginRight: "auto",
	},
	image2: {
		width: "90%",
		height: "30%",
		//backgroundColor: "gray",
		marginLeft: "auto",
		marginRight: "auto",
		display: "flex",
		gridTemplateColumns: "row",
	},
	img1: {
		width: "30%",
		height: "80%",
		marginTop: "13px",
		//backgroundColor: "green",
		marginLeft: "auto",
		marginRight: "auto",
	},
	Titre: {
		fontSize: 36,
		marginTop: "50px",
		marginLeft: "30px",
	},
	Vendeur: {
		fontSize: 14,
		marginTop: "10px",
		marginLeft: "30px",
	},
	Vendeurval: {
		fontSize: 14,
		marginTop: "10px",
		marginLeft: "10px",
	},
	Description: {
		fontSize: 16,
		width: "75%",
		marginTop: "20px",
		marginLeft: "30px",
	},
	blocVendeur: {
		display: "flex",
		flexDirection: "row",
	},
	BlocVal: {
		width: "85%",
		display: "flex",
		flexDirection: "row",
	},
	ValeurTitre: {
		fontSize: 18,
		width: "25%",
		marginTop: "35px",
		marginLeft: "30px",
	},
	Valeur: {
		fontSize: 36,
		width: "75%",
		marginTop: "20px",
	},
	Img: {
		width: "100%",
		height: "100%",
		marginTop: "40px",

		marginLeft: "auto",
		marginRight: "auto",
		"&:hover": { cursor: "pointer" },
	},
	BlocButton: {
		width: "100%",
		//backgroundColor: "red",
		height: "30%",
		display: "flex",
		flexDirection: "row",
	},
	BlocAction: {
		width: "65%",
		height: "100%",
		//backgroundColor: "green",
		marginLeft: "auto",
		marginRight: 0,
		display: "flex",
		flexDirection: "row",
	},
}));
const ButtonSpe = styled(Button)({
	boxShadow: "none",
	textTransform: "none",
	width: "30%",
	height: "50%",
	marginTop: "50px",
	marginLeft: "30px",
	fontSize: 25,
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
const Produit = () => {
	const classes = useStyles();
	return (
		<div>
			<NavBar />
			<div className={classes.Content}>
				<div className={classes.Images}>
					<div className={classes.image1}>
						<img
							src={"/static/images/a.jpg"}
							className={classes.Img}
							alt="fireSpot"
						/>
					</div>
					<div className={classes.image2}>
						<div className={classes.img1}>
							<img
								src={"/static/images/a.jpg"}
								className={classes.Img}
								alt="fireSpot"
							/>
						</div>
						<div className={classes.img1}>
							<img
								src={"/static/images/a.jpg"}
								className={classes.Img}
								alt="fireSpot"
							/>
						</div>
						<div className={classes.img1}>
							<img
								src={"/static/images/a.jpg"}
								className={classes.Img}
								alt="fireSpot"
							/>
						</div>
					</div>
				</div>
				<div className={classes.Desc}>
					<Box className={classes.Titre}> Villa Blanche</Box>
					<div className={classes.blocVendeur}>
						<Box className={classes.Vendeur}> Vendeur :</Box>
						<Box className={classes.Vendeurval}> Zereg Assem</Box>
					</div>
					<Box className={classes.Description}>
						{" "}
						Le lorem ipsum est, en imprimerie, une suite de mots sans
						signification utilisée à titre provisoire pour calibrer une mise en
						page, le texte définitif venant remplacer le faux-texte dès qu'il
						est prêt ou que la mise en page est achevée. Généralement, on
						utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
					</Box>
					<div className={classes.BlocVal}>
						<Box className={classes.ValeurTitre}> Derniere enchere :</Box>
						<Box className={classes.Valeur}>20 000 000 DA</Box>
					</div>
					<div className={classes.BlocButton}>
						<ButtonSpe> Encherir </ButtonSpe>
						<div className={classes.BlocAction}>
							<div></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Produit;
