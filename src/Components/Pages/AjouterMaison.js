import { React, useEffect, useState } from "react";
import Nav from "../Composants/NavBar";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TextField from "@material-ui/core/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
	Content: {
		width: "90%",
		height: "85vh",
		margin: "auto",
		display: "flex",
		flexDirection: "row",
		borderRadius: "15px",
		border: "1px solid #CECECE",
	},
	Cote: {
		width: "50%",
	},
	Actions: {
		width: "80%",
		height: "380px",
		margin: "auto",
		marginTop: "20px",
		display: "flex",
		flexDirection: "row",
	},
	Gauche2: {
		width: "100%",
		height: "380px",
	},
	Bloctit: {
		width: "80%",
		margin: "auto",
		marginTop: "30px",
		display: "flex",
		flexDirection: "row",
	},
	g: {
		width: "50%",
	},
	BlocInput: {
		marginLeft: 15,
		width: "40%",
	},
	File: {
		display: "none",
	},
	blocklabel: {
		height: "80%",
		width: "60%",
		marginTop: 10,
		borderRadius: "5px",
		textAlign: "center",
		margin: "auto",
		border: "1px solid gray",
		"&:hover": { cursor: "pointer", border: "1px solid black" },
	},
	label: {
		marginTop: "20px",
		"&:hover": { cursor: "pointer" },
	},
}));
const ButtonSpe = styled(Button)({
	boxShadow: "none",
	textTransform: "none",
	width: "80%",
	height: "40px",
	marginRight: "auto",
	marginLeft: "auto",
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

export default function AjouterMaison() {
	const classes = useStyles();
	var da = new Date();
	var da2 = new Date();
	const [value, setValue] = useState(da);
	const [value2, setValue2] = useState(da2);
	const [Titre, setTitre] = useState("");
	const [Prix, setPrix] = useState("");
	const [Superficie, setSuperficie] = useState("");
	const [Url, setUrl] = useState("");
	const [Description, setDescription] = useState("");
	const [Categorie, setCategorie] = useState("");
	const [image, setImage] = useState();
	const [imagePath, setImagePath] = useState();

	const handleCreeMaison = (e) => {

		var bodyFormData = new FormData();
		bodyFormData.append('nomProduit', Titre);
		bodyFormData.append('Categorie', Categorie);
		bodyFormData.append('PrixReserve', Prix);
		bodyFormData.append('Description', Description);
		bodyFormData.append('DateDebut', value);
		bodyFormData.append('DateFin', value2);
		bodyFormData.append('Superficie', Superficie);
		bodyFormData.append('imgProduit', image);
		bodyFormData.append('Url', Url);
		axios({
			method: "post",
			url: "http://localhost:5000/Utilisateur/AjoutProduit",
			withCredentials: true,
			data:bodyFormData,
			headers: { "Content-Type": "multipart/form-data" },
		}).then((res) => {
			if (res.status == 201) {
				console.log('response');
				alert("Maison creer avec succes")
				window.location.href = "/Produits";
			}
		});
	};
	return (
		<div>
			<Nav />
			<div className={classes.Actions}>
				<div className={classes.Gauche2}>
					<div className={classes.Bloctit}>
						<div style={{ width: "50%" }}>
							<TextField
								id="outlined-basic"
								label="Titre maison"
								variant="outlined"
								size="medium"
								fullWidth
								onChange={(e) => {
									setTitre(e.target.value);
								}}
								value={Titre}
							/>
						</div>
						<div style={{ width: "40%", marginLeft: "10px" }}>
							<TextField
								id="outlined-basic"
								label="Prix de reserve"
								variant="outlined"
								size="medium"
								fullWidth
								onChange={(e) => {
									setPrix(e.target.value);
								}}
								value={Prix}
							/>
						</div>
						<div style={{ width: "40%", marginLeft: "10px" }}>
							<TextField
								id="outlined-basic"
								label="Superficie"
								variant="outlined"
								size="medium"
								fullWidth
								onChange={(e) => {
									setSuperficie(e.target.value);
								}}
								value={Superficie}
							/>
						</div>
					</div>
					<div className={classes.Bloctit}>
						<TextField
							id="outlined-textarea"
							label="Description"
							placeholder="Description"
							fullWidth
							variant="outlined"
							multiline
							onChange={(e) => {
								setDescription(e.target.value);
							}}
							value={Description}
						/>
					</div>
					<div className={classes.Bloctit}>
						<div
							style={{
								width: "60%",
								margin: "auto",
								display: "flex",
								flexDirection: "row",
							}}>
							<TextField
								id="outlined-basic"
								label="Categorie"
								variant="outlined"
								size="medium"
								fullWidth
								onChange={(e) => {
									setCategorie(e.target.value);
								}}
								value={Categorie}
							/>
						</div>
						<div className={classes.BlocInput}>
							<input
								type="file"
								id="file-input"
								className={classes.File}
								onChange={(e) => {
									setImage(e.target.files[0]);
									setImagePath(e.target.value);
								}}
							/>{/*
							<div className={classes.blocklabel}>
								<div style={{ height: "13px" }}></div>
								<label className={classes.label} for="file-input">
									Selectionnez une image ...
								</label>
							</div>*/}
							<div style={{ width: "60%", marginLeft: "10px" }}>
							<TextField
								id="outlined-basic"
								label="Url image"
								variant="outlined"
								size="medium"
								fullWidth
								onChange={(e) => {
									setUrl(e.target.value);
								}}
								value={Url}
							/>
						</div>
							
						</div>
					</div>
					<div
						style={{
							width: "45%",
							margin: "auto",
							marginTop: "30px",
							display: "flex",
							flexDirection: "row",
						}}>
						<div style={{ marginLeft: "0", marginRight: "auto" }}>
							<LocalizationProvider dateAdapter={AdapterDateFns}>
								<DatePicker
									label="Date Debut"
									value={value}
									onChange={(newValue) => {
										setValue(newValue);
									}}
									renderInput={(params) => <TextField {...params} />}
								/>
							</LocalizationProvider>
						</div>
						<div style={{ marginLeft: "auto", marginRight: "0" }}>
							<LocalizationProvider dateAdapter={AdapterDateFns}>
								<DatePicker
									label="Date Fin"
									value={value2}
									onChange={(newValue) => {
										setValue2(newValue);
									}}
									renderInput={(params) => <TextField {...params} />}
								/>
							</LocalizationProvider>
						</div>
					</div>

					<div className={classes.Bloctit} style={{ marginTop: "60px" }}>
						<ButtonSpe
							onClick={() => {
								let maison = {
									DateDebut: value,
									DateFin: value2,
									Titre,
									Prix,
									Description,
									Categorie,
									image,
									imagePath,
								};
								console.log(maison);
								handleCreeMaison();
							}}>
							Creer Maison
						</ButtonSpe>
					</div>
				</div>
			</div>
		</div>
	);
}
