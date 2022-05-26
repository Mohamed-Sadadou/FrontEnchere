import React from "react";
import { useState, useLayoutEffect, useContext, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core/styles";
import Nav from "../Composants/NavBar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Logo1 from "../../Images/pic.jpg";
import axios from "axios";
import UserContext from "../UserContext";
const useStyles = makeStyles((theme) => ({
	content: {
		height: "600px",
		width: "70%",
		margin: "auto",
		marginTop: "20px",
	},
	care: {
		height: "60px",
		width: "90%",
		marginLeft: "auto",
		marginRight: "auto",
		//border:"2px solid ",
		borderRadius: "30px 0px 0px 0px",
		background: "rgb(11,124,124)",
		background:
			"linear-gradient(180deg, rgba(11,124,124,1) 0%, rgba(143,227,136,1) 100%)",
	},
	rond: {
		height: "160px",
		width: "15%",
		marginLeft: "80px",
		marginRight: "auto",
		marginTop: "-50px",
		borderRadius: "100%",
		border: "2px solid white",
		backgroundColor: "white",
		boxShadow: " 2px 2px 3px #648381",
	},
	Logo: {
		width: 160,
		height: 160,
		borderRadius: "100%",
		"&:hover": { cursor: "pointer" },
	},
	Ecris: {
		height: "100px",
		width: "67%",
		marginLeft: "0",
		marginRight: "auto",
		display: "flex",
		flexDirection: "row",
	},
	BlocEcris: {
		height: "100px",
		width: "70%",
	},
	Titre: {
		color: "#002626",
		fontSize: 22,
		fontWeight: "bold",
		marginTop: "20px",
	},
	Desc: {
		color: "#002626",
		fontSize: 14,
		fontWeight: "lighter",
		marginTop: "10px",
	},
	Actions: {
		width: "80%",
		height: "380px",
		margin: "auto",
		display: "flex",
		flexDirection: "row",
	},
	Gauche: {
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
		width: "30%",
	},
	tit: {
		color: "#002626",
		fontSize: 16,
		fontWeight: "bold",
		marginTop: "10px",
	},
}));
const ButtonSpe = styled(Button)({
	boxShadow: "none",
	textTransform: "none",
	width: "20%",
	height: "40px",
	marginRight: "0",
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

export default function Compte() {
	const classes = useStyles();
	const user = useContext(UserContext);
	const [UserName, setUserName] = React.useState("");
	const [Bio, setBio] = React.useState("");
	const [Numero, setNumero] = React.useState("");
	const [Email, setEmail] = React.useState("");
	const [Adress, setAdress] = React.useState("");
	const [What, setWhat] = React.useState("");
	const [Val, setVal] = React.useState("");
	const handleModifie = async ( what , v) => {
		console.log("modification");
		/*if (What === "UserName") setVal(UserName);
		else if (What === "Bio") setVal(Bio);
		else if (What === "numeroTel") setVal(Numero);
		else if (What === "email") setVal(Email);
		else if (What === "adress") setVal(Adress);
*/
		console.log("on go modifier , ", what, ":", v);

		await axios({
			method: "post",
			url: "http://localhost:5000/Utilisateur/Modifi",
			withCredentials: true,
			data: {
				id_client: user.id_client,
				what: what,
				val: v,
			},
		}).then((res) => {
			if (res.status == 200) {
				//window.location.href = "/Compte";
			}
		});
	};
	return (
		<div>
			{<Nav />}
			<div className={classes.content}>
				<div className={classes.care}></div>
				<div style={{ display: "flex", flexDirection: "row" }}>
					<div className={classes.rond}>
						<img src={Logo1} className={classes.Logo} alt="fireSpot" />
					</div>
					<div className={classes.Ecris}>
						<div className={classes.BlocEcris}>
							<div style={{ display: "flex", flexDirection: "row" }}>
								<Box
									style={{
										color: "#002626",
										fontSize: 16,
										fontWeight: "bold",
										marginTop: "24px",
										marginRight: 20,
									}}>
									{" "}
									{user.id_client}
								</Box>
								<Box className={classes.Titre}> {user.UserName}</Box>
							</div>
							<div style={{ display: "flex", flexDirection: "row" }}>
								<Box
									style={{
										color: "#002626",
										fontSize: 14,
										fontWeight: "bold",
										marginTop: "10px",
										marginRight: 20,
									}}>
									{" "}
									{user.numeroTel}
								</Box>
								<Box
									style={{
										color: "#002626",
										fontSize: 14,
										fontWeight: "bold",
										marginTop: "10px",
										marginRight: 20,
									}}>
									{" "}
									{user.email}
								</Box>
							</div>

							<Box className={classes.Desc}> {user.Bio} </Box>
						</div>
					</div>
				</div>
				<div className={classes.Actions}>
					<div className={classes.Gauche}>
						<div className={classes.Bloctit}>
							<div className={classes.g}>
								<Box className={classes.tit}> User Name </Box>
							</div>
							<TextField
								id="outlined-basic"
								label="Votre nom"
								variant="outlined"
								size="small"
								onChange={(e) => {
									setUserName(e.target.value);
								}}
								value={UserName}
							/>
							<ButtonSpe
								onClick={(e) => {
									handleModifie('UserName',UserName);
								}}>
								Save
							</ButtonSpe>
						</div>
						<div className={classes.Bloctit}>
							<div className={classes.g}>
								<Box className={classes.tit}> Votre Bio </Box>
							</div>
							<TextField
								id="outlined-textarea"
								label="Votre Bio"
								placeholder="Bio"
								multiline
								onChange={(e) => {
									setBio(e.target.value);
								}}
								value={Bio}
							/>
							<ButtonSpe
								style={{ marginTop: "10px" }}
								onClick={(e) => {
									handleModifie("Bio",Bio);
								}}>
								{" "}
								Save{" "}
							</ButtonSpe>
						</div>
						<div className={classes.Bloctit}>
							<div className={classes.g}>
								<Box className={classes.tit}> Numero Telephone </Box>
							</div>
							<TextField
								id="outlined-basic"
								label="Votre Numero"
								variant="outlined"
								size="small"
								onChange={(e) => {
									setNumero(e.target.value);
								}}
								value={Numero}
							/>
							<ButtonSpe
								onClick={(e) => {
									handleModifie("numeroTel",Numero);
								}}>
								{" "}
								Save{" "}
							</ButtonSpe>
						</div>
						<div className={classes.Bloctit}>
							<div className={classes.g}>
								<Box className={classes.tit}> Votre Email </Box>
							</div>
							<TextField
								id="outlined-basic"
								label="Votre Email"
								variant="outlined"
								size="small"
								onChange={(e) => {
									setEmail(e.target.value);
								}}
								value={Email}
							/>
							<ButtonSpe
								onClick={(e) => {
									handleModifie("email",Email);
								}}>
								{" "}
								Save{" "}
							</ButtonSpe>
						</div>
						<div className={classes.Bloctit}>
							<div className={classes.g}>
								<Box className={classes.tit}> Votre Adress </Box>
							</div>
							<TextField
								id="outlined-basic"
								label="Votre Adress"
								variant="outlined"
								size="small"
								onChange={(e) => {
									setAdress(e.target.value);
								}}
								value={Adress}
							/>
							<ButtonSpe
								onClick={(e) => {
									handleModifie("adress",Adress);
								}}>
								{" "}
								Save{" "}
							</ButtonSpe>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
