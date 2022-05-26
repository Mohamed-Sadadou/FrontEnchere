import React from "react";
import Nav from "../Composants/NavBar";
import DataGrid from "../Composants/DataGrid";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	dosTable: {
		width: "90%",
        height:'85vh',
		margin: "auto",
		display: "flex",
		flexDirection: "row",
        borderRadius: "15px",
		border: "1px solid #CECECE",
      
	},
	table1: {
		width: "45%",
		margin: "auto",
		marginTop: "20px",
	},
	TitreBlock: {
		width: "35%",
        height:'40px',
		margin: "auto",
	},
	Titre: {
		fontSize: "25px",
	},
}));

export default function MyInfo() {
	const classes = useStyles();
	return (
		<div >
			<Nav />
			<div className={classes.dosTable}>
				<div className={classes.table1}>
					<div className={classes.TitreBlock}>
						<Box className={classes.Titre}>Maisons en vente</Box>
					</div>

					<DataGrid />
				</div>
				<div className={classes.table1}>
					<div className={classes.TitreBlock}>
						<Box className={classes.Titre}>Maisons vendu</Box>
					</div>
					<DataGrid />
				</div>
			</div>
		</div>
	);
}
