import React from "react";
import { makeStyles } from "@material-ui/core";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import TextField from "@material-ui/core/TextField";
import Link from "@mui/material/Link";
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
	Corp: {
		display: "flex",
		height: "100vh",
		flexDirection: "row",
	},
	Gauche: {
		width: "50%",
		height: "100%",
	},
	Droit: {
		width: "50%",
		height: "100%",
		backgroundImage: `url(https://images.prismic.io/figaroimmo/8dd52374b4b45c034b0b67067f29bbff62ac1298_vendre-aux-encheres-un-bien-immobilier.jpg?auto=compress,format)`,
		backgroundPosition: "center",
		backgroundSize: "cover",
	},
	BoiteForm: {
		width: "60%",
		height: "auto",
		borderRadius: "15px",
		border: "1px solid #CECECE",
		margin: "auto",
		marginTop: "90px",
	},
	BlocTitre: {
		margin: "auto",
		width: "21%",
	},
	Titre: {
		fontSize: 28,
		fontWeight: "bold",
		marginTop: "20px",
		margin: "auto",
	},
	BlocEcris: {
		marginRight: "auto",
		marginLeft: "10px",
		width: "60%",
	},
	Ecris: {
		fontSize: 14,
		fontWeight: "bold",
		marginTop: "20px",
		margin: "auto",
	},
	BlocInput: {
		width: "70%",
		marginTop: "10px",
		marginLeft: "10px",
		height: "40px",
	},
	input1: {
		height: "40px",
		width: "250px",
		fontSize: 12,
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
const Login = () => {
	const classes = useStyles();
	const [UserName, setUserName] = React.useState("");
	const [mdp, setPassword] = React.useState("");
	const [Email, setEmail] = React.useState("");
	const [Adress, setAdress] = React.useState("");
	const [Numero, setNumero] = React.useState("");
	const [image, setImage] = React.useState();
    const Bio="Bio par defaut pour l'utilisateur";
	const handleCreateCompte = async (e) => {
		

		console.log("on go creer le compte");
		var bodyFormData = new FormData();
		bodyFormData.append('mdp', mdp);
		bodyFormData.append('UserName', UserName);
		bodyFormData.append('numeroTel', Numero);
		bodyFormData.append('email', Email);
		bodyFormData.append('adress', Adress);
		bodyFormData.append('Bio', Bio);
		bodyFormData.append('imgProduit', image);
		await axios({
			method: "post",
			url: "http://localhost:5000/Utilisateur/CreeCompte",
			withCredentials: true,
			data:bodyFormData,
			headers: { "Content-Type": "multipart/form-data" },
		}).then((res) => {
			
			if (res.status == 200) {
				window.location.href = "/Produits";
				
			}else{
				console.log('ERREUR statut :',res.status,"Message :",res.error );
			}
		});
	};

	return (
		<div className={classes.Corp}>
			<div className={classes.Gauche}>
				<div className={classes.BoiteForm}>
					<Avatar
						sx={{ margin: "auto", marginTop: "20px", bgcolor: "#8FE388" }}>
						<LockOutlinedIcon />
					</Avatar>
					<div className={classes.BlocTitre}>
						<Box className={classes.Titre}>Sign Up</Box>
					</div>
					<div className={classes.Actions}>
						<div className={classes.Gauche2}>
							<div className={classes.Bloctit}>
								<div style={{ width: "50%" }}>
									<TextField
										id="outlined-basic"
										label="UserName"
										variant="outlined"
										size="small"
										fullWidth
										onChange={(e) => {
											setUserName(e.target.value);
										}}
										value={UserName}
									/>
								</div>
								<div style={{ width: "50%", marginLeft: "10px" }}>
									<TextField
										id="outlined-basic"
										label="Mot de passe"
										variant="outlined"
										type="password"
										size="small"
										fullWidth
										onChange={(e) => {
											setPassword(e.target.value);
										}}
										value={mdp}
									/>
								</div>
							</div>
							<div className={classes.Bloctit}>
								<TextField
									id="outlined-basic"
									label="Email"
									variant="outlined"
									size="small"
									fullWidth
									onChange={(e) => {
										setEmail(e.target.value);
									}}
									value={Email}
								/>
							</div>
							<div className={classes.Bloctit}>
								<div style={{ width: "60%" }}>
									<TextField
										id="outlined-basic"
										label="Adress"
										variant="outlined"
										size="small"
										fullWidth
										onChange={(e) => {
											setAdress(e.target.value);
										}}
										value={Adress}
									/>
								</div>
								<div style={{ width: "40%", marginLeft: "10px" }}>
									<TextField
										id="outlined-basic"
										label="Numero"
										variant="outlined"
										size="small"
										fullWidth
										onChange={(e) => {
											setNumero(e.target.value);
										}}
										value={Numero}
									/>
								</div>
							</div>

							<div className={classes.Bloctit} style={{ marginTop: "60px" }}>
								<ButtonSpe
									onClick={() => {
										handleCreateCompte();
										
									}}>
									{" "}
									Creer Compte{" "}
								</ButtonSpe>
							</div>
							<div style={{ width: "55%", margin: "auto", marginTop: "10px" }}>
								<Link href="Login" variant="body2">
									{"Already have account ? Login"}
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={classes.Droit}></div>
		</div>
	);
};

export default Login;
