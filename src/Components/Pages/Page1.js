import React from "react";
import { useState, useLayoutEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Back1 from "../../Images/a.jpg";
import Nav from "../Composants/NavBar";
import Card from "../Composants/Card";
import Categories from "../Composants/Categories";
import Filters from "../Composants/Filters";

const useStyles = makeStyles((theme) => ({
	Corp: {
		width: "100%",
		backgroundColor: "#e2dadb",
	},
	Content: {
		width: "70%",
		minHeight: "475px",
		marginLeft: "auto",
		marginRight: "20px",
		marginTop: "20px",
		display: "grid",
		gridTemplateColumns: "repeat(3, 1fr)",
	},
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
	const Cards = [
		{
			Titre: "Villa blanche",
			Vendeur: "Sadadou mohamed",
			PrixDeReserve: "20 000 000 DA",
			link: "/static/images/a.jpg",
		},
		{
			Titre: "Villa LED",
			Vendeur: "Sadoudi brahim",
			PrixDeReserve: "-",
			link: "/static/images/b.jpg",
		},
		{
			Titre: "Maison de compagne",
			Vendeur: "Zereg assem",
			PrixDeReserve: "17 000 000 DA",
			link: "/static/images/c.jpg",
		},
		{
			Titre: "Maison moderne",
			Vendeur: "Chegui wassim",
			PrixDeReserve: "2000DA",
			link: "/static/images/d.jpg",
		},
		{
			Titre: "Villa de vacances",
			Vendeur: "vendeur",
			PrixDeReserve: "2000DA",
			link: "/static/images/e.jpg",
		},
		{
			Titre: "Maison moderne",
			Vendeur: "vendeur",
			PrixDeReserve: "2000DA",
			link: "/static/images/f.jpg",
		},
		{
			Titre: "Produit 1",
			Vendeur: "vendeur",
			PrixDeReserve: "2000DA",
			link: "/static/images/g.jpg",
		},
		{
			Titre: "Produit 1",
			Vendeur: "vendeur",
			PrixDeReserve: "2000DA",
			link: "/static/images/h.jpg",
		},
	];
	return (
		<div className={classes.Corp}>
			{/* une app barre*/}
			<Nav />
			<Categories />
			<div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
				<div
					style={{ width: "20%", height:'100%', marginTop: "35px",backgroundColor:"#E9E6DF",marginLeft:'10px', padding:'15px', border:'1px solid #c4c4c4', borderRadius:'10px' }}>
					<Filters />
				</div>
				<div className={classes.Content}>
					{Cards.map((Prod) => (
						<Card
							Titre={Prod.Titre}
							Vendeur={Prod.Vendeur}
							PrixDeReserve={Prod.PrixDeReserve}
							link={Prod.link}
						/>
					))}
				</div>
			</div>
		</div>
	);

	//******************************************** */
}
