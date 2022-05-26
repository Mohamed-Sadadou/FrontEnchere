import React from "react";
import { useState, useLayoutEffect, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import NavBar from "../Composants/NavBar";
import axios from "axios";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import MaisonsContext from "../MaisonsContext";
import UserContext from "../UserContext";
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
	ValeurTitre2: {
		fontSize: 16,
		marginTop: "8px",
		width: "25%",
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
		borderRadius: "5px",
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
		marginLeft: "auto",
		marginRight: 0,
		display: "flex",
		flexDirection: "row",
	},
	Icons: {
		width: "10%",
		height: "70%",
		marginTop: "30px",
	},
	Val: {
		width: "60%",
		height: "70%",

		marginTop: "30px",
		marginLeft: "40px",
	},
	ValBoite: {
		border: "solid 0.5px #F0803C",
		borderRadius: "5px",
		backgroundColor: "#F0803C",
		width: "60%",
		height: "50%",
		marginTop: "30px",
		marginLeft: "auto",
		marginRight: "20px",
	},
	ValeurDansBoite: {
		fontSize: 22,
		fontFamily: " 'Manrope', sans-serif",
		fontWeight: "bold",
		color: "#002626",
		marginTop: "15px",
		marginLeft: "17px",
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
const ButtonSpe2 = styled(Button)({
	boxShadow: "none",
	textTransform: "none",
	width: "35%",
	height: "60%",
	marginTop: "15px",
	marginLeft: "30px",
	fontSize: 18,
	padding: "6px 12px",
	lineHeight: 1.5,
	border: "solid 0.5px #F0803C",
	borderRadius: "5px",
	backgroundColor: "#F0803C",
	color: "#002626",
	fontFamily: " 'Manrope', sans-serif",
	fontWeight: "bold",
	"&:hover": {
		backgroundColor: "#F0803C",
		boxShadow: "none",
	},
});

const Produit = () => {
	const classes = useStyles();
	const user = useContext(UserContext);
	const url =
		"https://www.piecesautos.tn/static/piece_pics/150X150/150X150default.png";
	const [Value, SetValu] = React.useState(20000000 + 20000);
	const [Value2, SetValu2] = React.useState(0);
	const [idprod, Setidprod] = React.useState("");
	const [Card, setCard] = React.useState("");
	const [Pimg, SetPimg] = React.useState("");
	const [img1, Setimg1] = React.useState("");
	const [img2, Setimg2] = React.useState("");
	const [img3, Setimg3] = React.useState("");
	const [date1, setdate1] = React.useState("");
	const [date2, setdate2] = React.useState("");
	console.log("hoy");
	//console.log(useParams())
	var { id } = useParams(id);
	const handleCloturer = async (e) => {
		console.log("on go cloturer");

		await axios({
			method: "post",
			url: "http://localhost:5000/Utilisateur/Cloturer",
			withCredentials: true,
			data: {
				idprod,
			},
		}).then((res) => {
			console.log("-------------------------------------");
			console.log("-------------------------------------");
			console.log(res.status);
			console.log("-------------------------------------");
			console.log("-------------------------------------");
			if (res.status == 200) {
				console.log("Cloture done");
				window.location.href = "/Produits";
			}
		});
	};
	const handleEncherir = async (e) => {
		console.log("on go encherir");

		await axios({
			method: "post",
			url: "http://localhost:5000/Utilisateur/Encherir",
			withCredentials: true,
			data: {
				idprod,
				Valeur: Value,
			},
		}).then((res) => {
			console.log("-------------------------------------");
			console.log("-------------------------------------");
			console.log(res.status);
			console.log("-------------------------------------");
			console.log("-------------------------------------");
			if (res.status == 200) {
				console.log("enchere done");
				window.location.href = "/Produit/" + id;
			}
		});
	};
	useEffect(() => {
		const GetMaisons = async () => {
			console.log("on get les info");
			await axios({
				method: "post",
				url: "http://localhost:5000/Utilisateur/getProduct",
				withCredentials: true,
				data: {
					id_produit: id,
				},
			})
				.then(async (res) => {
					console.log(res.status);

					if (res.status == 200) {
						console.log(
							"*****************",
							res.data == null,
							"**********************"
						);
						console.log(res.data);
						if (res.data != null) {
							setCard(res.data);

							Setidprod(res.data._id);
							if (res.data.prix == 0) {
								SetValu(res.data.PrixReserve * 0.5);
								SetValu2(res.data.PrixReserve * 0.5 + 20000);
							} else {
								SetValu(res.data.prix + 20000);
								SetValu2(res.data.prix + 20000);
							}
							console.log("CAAAAAAAARD", res.data);
							setdate1(res.data.DateDebut.toString().substring(0, 10));
							setdate2(res.data.DateFin.toString().substring(0, 10));
							SetPimg(res.data.Url);
							Setimg1(res.data.Url1||url);
							Setimg2(res.data.Url2||url);
							Setimg3(res.data.Url3||url);
						}

						if (res.data == null) {
							var siu = {
								nomProduit: "",
								Vendeur: "",
								Description: "",
								prix: "",
							};
							setCard(siu);
							SetPimg(url);
							Setimg1(url);
							Setimg2(url);
							Setimg3(url);
						}
					}
				})
				.catch((err) => {
					console.log("thardet", err);
				});
		};
		GetMaisons();
	}, []);

	return (
		<div>
			<NavBar />
			<div className={classes.Content}>
				<div className={classes.Images}>
					<div className={classes.image1}>
						<img src={Pimg} className={classes.Img} alt="fireSpot" />
					</div>
					<div className={classes.image2}>
						<div className={classes.img1}>
							<img
								src={img1}
								className={classes.Img}
								alt="fireSpot"
								onClick={(e) => {
									let a = img1;
									Setimg1(Pimg);
									SetPimg(a);
								}}
							/>
						</div>
						<div className={classes.img1}>
							<img
								src={img2}
								className={classes.Img}
								alt="fireSpot"
								onClick={(e) => {
									let a = img2;
									Setimg2(Pimg);
									SetPimg(a);
								}}
							/>
						</div>
						<div className={classes.img1}>
							<img
								src={img3}
								className={classes.Img}
								alt="fireSpot"
								onClick={(e) => {
									let a = img3;
									Setimg3(Pimg);
									SetPimg(a);
								}}
							/>
						</div>
					</div>
				</div>
				<div className={classes.Desc}>
					<Box className={classes.Titre}>
						{Card.nomProduit || "Maison vendu"}
					</Box>
					<div className={classes.blocVendeur}>
						<Box className={classes.Vendeur}> Vendeur :</Box>
						<Box className={classes.Vendeurval}>
							{" "}
							{Card.Vendeur || "Maison vendu"}
						</Box>
						<div
							style={{ display: "flex", flexDirection: "row", width: "50%" }}>
							<Box className={classes.ValeurTitre2}>du {date1} </Box>
							<Box className={classes.ValeurTitre2}>au {date2} </Box>
						</div>
					</div>

					<Box className={classes.Description}>
						{Card.Description || "Maison vendu"}
					</Box>

					<div className={classes.BlocVal}>
						<Box className={classes.ValeurTitre}> Derniere enchere :</Box>
						<Box className={classes.Valeur}>{Card.prix} DA</Box>
					</div>

					<div className={classes.BlocButton}>
						<ButtonSpe
							onClick={(e) => {
								handleEncherir();
							}}>
							{" "}
							Encherir{" "}
						</ButtonSpe>
						<div className={classes.BlocAction}>
							<div className={classes.Val}>
								<div className={classes.ValBoite}>
									<Box className={classes.ValeurDansBoite}>{Value} DA</Box>
								</div>
							</div>
							<div className={classes.Icons}>
								<IconButton
									size="large"
									onClick={(e) => {
										SetValu(Value + 20000);
									}}>
									<ArrowCircleUpIcon fontSize="inherit" />
								</IconButton>
								<IconButton
									size="large"
									onClick={(e) => {
										if (Value > Value2) SetValu(Value - 20000);
									}}>
									<ArrowCircleDownIcon fontSize="inherit" />
								</IconButton>
							</div>
						</div>
					</div>
					{user.type==="Commissaire" && (
						<div
							style={{
								width: "90%",
								height: "80px",
								display: "flex",
								flexDirection: "row",
							}}>
							<ButtonSpe2
								onClick={(e) => {
									handleCloturer();
								}}>
								Clôture de l’enchère
							</ButtonSpe2>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Produit;
