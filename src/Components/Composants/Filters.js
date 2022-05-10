import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Slider from "./Slider";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
const useStyles = makeStyles((theme) => ({
	Text: {
		fontSize: 13,
		marginBottom: "10px",
		marginTop: "10px",
		marginLeft: "10px",
	},
    Text2: {
		fontSize: 8,
		marginBottom: "10px",
		marginTop: "13px",
		marginLeft: "10px",
	},
}));
const ButtonSpe = styled(Button)({
	boxShadow: "none",
	textTransform: "none",
	width: "100%",
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
const label = { inputProps: { "aria-label": "Switch demo" } };
export default function Fliters() {
	const classes = useStyles();
	return (
		<div style={{ width: "100%", }}>
			<div>
                <Box className={classes.Text}>Superficie</Box>
				<Slider />
				<div style={{ display: "flex", flexDirection: "row",marginTop:'10px' }}>
					<Box className={classes.Text}> Encheri </Box>
                    <div style={{marginLeft:'20px'}}>
                      <Switch {...label} defaultChecked />  
                    </div>
					
				</div>
                <div style={{ display: "flex", flexDirection: "row" }}>
				<Box className={classes.Text}> Prix </Box><Box className={classes.Text2}> (300 represente 300 millions de centimes) </Box>
				</div>
                <Slider />
				<Box className={classes.Text}>ID Maison</Box>
				<TextField
					label=""
					id="outlined-size-small"
					defaultValue=""
					size="small"
				/>
				<div
					style={{
						marginLeft: "auto",
						marginRight: "auto",
						marginTop: "30px",
						width: "60%",
					}}>
					<ButtonSpe
						sx={{ marginLeft: "auto", marginRight: "auto" }}
						variant="contained"
						disableRipple
						onClick={(e) => {
							alert("clicked");
						}}>
						Ajouter Produit
					</ButtonSpe>
				</div>
			</div>
		</div>
	);
}
