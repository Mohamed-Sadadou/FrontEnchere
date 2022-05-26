import React from "react";
import { useState, useLayoutEffect, useContext, useEffect } from "react";
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
import FiltresContext from "../FiltresContext";
import MaisonsContext from "../MaisonsContext";
import axios from "axios";
import Switch from "@mui/material/Switch";
import UserContext from "../UserContext";
const label = { inputProps: { "aria-label": "Switch demo" } };
const useStyles = makeStyles((theme) => ({
	Corp: {
		width: "100%",
		minHeight: "100vh",
		backgroundColor: "#F0F0F0",
	},
	Text: {
		fontSize: 16,
		marginBottom: "10px",
		marginTop: "10px",
		marginLeft: "10px",
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

export default function Produits() {
	const classes = useStyles();
	const [Check, setCheck] = React.useState(false);
	const [etat, setetat] = useState(true);
	const [etat2, setetat2] = useState(true);
	var val = { etat, setetat };
	var val2 = { etat2, setetat2 };
	const { Filtre, setFiltre } = useContext(FiltresContext);
	const user = useContext(UserContext)
	const { maisons, setMaisons } = useContext(MaisonsContext);
	const Cards = maisons;
	console.log("les maisons : ", Cards);
	useEffect(() => {
		const GetMaisons = async () => {
			/*console.log('on get les info')*/
			await axios({
				method: "get",
				url: "http://localhost:5000/Utilisateur/getAllProducts",
				withCredentials: true,
			})
				.then(async (res) => {
					console.log(res.status);

					if (res.status == 200) {
						console.log(res.data);
						var maisos = [];
						await res.data.forEach((mai, index) => {
							mai.Id = index + 1;
							console.log("notre mais", mai);
							maisos.push(mai);
						});
						console.log("on va set ", maisos);
						setMaisons(maisos);
						console.log("le contexte :", maisons);
						console.log("on a set");
					}
				})
				.catch((err) => {
					console.log("thardet", err);
				});
		};
		GetMaisons();
	}, [etat2]);

	return (
		<div className={classes.Corp}>
			{/* une app barre*/}
			<Nav />
			<Categories Etat={val} />
			<div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
				<div
					style={{
						width: "20%",
						height: "100%",
						marginTop: "35px",
						backgroundColor: "#FAFAFA",
						marginLeft: "10px",
						padding: "15px",
						border: "1px solid #c4c4c4",
						borderRadius: "10px",
					}}>
					<div style={{ display: "flex", flexDirection: "row" }}>
						<Box className={classes.Text}> All </Box>
						<Switch
							{...label}
							defaultChecked={false}
							onChange={(e) => {
								if (Check) setCheck(false);
								else setCheck(true);
							}}
							value={Check}
						/>
					</div>

					<Filters Etat={val2} />
				</div>
				<div className={classes.Content}>
					{Cards.filter((Prod) => {
						if (Filtre.Titre === Prod.Titre || Filtre.Titre === "Titre") {
							if (
								Filtre.Recherche === Prod.Titre ||
								Filtre.Recherche === "Recherche" ||
								Check
							) {
								if (
									Filtre.Categorie === Prod.Categorie ||
									Filtre.Categorie === "Categorie" ||
									Check
								) {
									if (
										(Prod.Superficie >= Filtre.Superficie[0] &&
											Prod.Superficie <= Filtre.Superficie[1]) ||
										Check
									) {
										if (
											(Prod.prix / 10000 >= Filtre.prix[0] &&
												Prod.prix / 10000 <= Filtre.prix[1]) ||
											Prod.prix == 0 ||
											Check
										) {
											if (Prod.Encheri == Filtre.Encheri || Check) {
												return Prod;
											}
										}
									}
								}
							}
						}
					}).map((Prod) => (
						<Card
							Titre={Prod.nomProduit}
							Vendeur={Prod.Vendeur}
							PrixDeReserve={Prod.prix}
							link={Prod.Url}
							Categorie={Filtre.Categorie}
							Id={Prod.Id}
							_id={Prod.id_produit}
						/>
					))}
				</div>
			</div>
		</div>
	);

	//******************************************** */
}
