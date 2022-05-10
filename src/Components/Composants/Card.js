import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import profil from "../../Images/logo.png";

const ButtonSpe = styled(Button)({
	boxShadow: "none",
	textTransform: "none",
	width: "50%",
	height: "100%",
	fontSize: 14,
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

export default function RecipeReviewCard(Props) {
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Card
			sx={{
				width: "80%",
				minWidth: "240px",
				height: 390,
				borderRadius: "10px",
				boxShadow: "black",
				margin: "15px",
				marginTop: "25px",
			}}>
			<CardMedia
				component="img"
				height="220"
				image={Props.link}
				alt="Paella dish"
			/>
			<CardContent sx={{ marginLeft: "0px", marginTop: "-10px" }}>
				<Typography sx={{ textAlign: "left", fontSize: 22 }}>
					{Props.Titre}
				</Typography>
				<div style={{ display: "flex", flexDirection: "row" }}>
					<Typography
						sx={{ marginTop: "5px", textAlign: "left", fontSize: 12 }}>
						{Props.Vendeur}
					</Typography>
				</div>
			</CardContent>
			<CardActions disableSpacing>
				<div style={{ display: "flex", flexDirection: "row" }}>
					<Typography
						sx={{ marginTop: "5px",marginLeft: "10px", textAlign: "left",marginTop: "-8px", fontSize: 10, fontWeight: "bold",}}>
						Derniere Enchere :
					</Typography>
					<Typography
						sx={{
							marginLeft: "10px",
							marginTop: "-15px",
							typography: "subtitle2",
							textAlign: "left",
							fontWeight: "bold",
							fontSize: 18,
						}}>
						{Props.PrixDeReserve}
					</Typography>
				</div>
			</CardActions>
			<CardActions disableSpacing>
				<ButtonSpe
					sx={{ marginLeft: "auto" }}
					variant="contained"
					disableRipple
					onClick={(e) => {
						window.location.href="/Produit";
					}}>
					Details
				</ButtonSpe>
			</CardActions>
		</Card>
	);
}
