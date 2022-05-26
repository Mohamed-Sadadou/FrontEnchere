import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [

	{
		field: "Titre",
		headerName: "Titre",
		width: 200,
	},
	{
		field: "Categorie",
		headerName: "Categorie",
		width: 220,
	},
	{
		field: "Enchere",
		headerName: "Enchere",
		type: "number",
		width: 180,
	},
];

const rows = [
	{ id: 1, Titre: "Maison de compagne", Categorie: "Maison de compagne", Enchere: 20000000 },
	{ id: 2, Titre: "Villa LED", Categorie: "Maison de vacances", Enchere: 20000000 },
	{ id: 3, Titre: "Maison moderne", Categorie: "Chalet", Enchere: 20000000 },
	{ id: 4, Titre: "Villa blanche", Categorie: "Villa", Enchere: 20000000 },
	{ id: 5, Titre: "Villa de vacances", Categorie: "Villa", Enchere: 20000000 },
	{ id: 6, Titre: "Maison moderne", Categorie: "Chalet", Enchere: 20000000 },
	{ id: 7, Titre: "Maison vacance", Categorie: "Maison de vacances", Enchere: 20000000 },
	{ id: 8, Titre: "Maison", Categorie: "Maison de compagne", Enchere: 20000000 },
	{ id: 9, Titre: "Villa borgese", Categorie: "Villa", Enchere: 20000000 },
];

export default function DataGridDemo() {
	return (
		<div style={{ width: "100%" }}>
			<DataGrid
				rows={rows}
				columns={columns}
				rowsPerPageOptions={[5]}
				disableSelectionOnClick
				checkboxSelection={false}
				pageSize={100}
				hideFooter
                disableColumnMenu
                autoHeight
                disableColumnSelector
                onCellClick={(params) => {
                    alert(JSON.stringify(params, null, 4));
                }}
			/>
		</div>
	);
}
