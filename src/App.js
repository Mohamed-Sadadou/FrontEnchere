import { React, useEffect, useState, useContext } from "react";
import axios from "axios";
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from "react-router-dom";

import Principal from "./Components/Pages/Principal";
import Produits from "./Components/Pages/Produits";
import Produit from "./Components/Pages/Produit";
import Login from "./Components/Pages/Login";
import Compte from "./Components/Pages/Compte";
import SignUp from "./Components/Pages/SignUp";
import Info from "./Components/Pages/MyInfo";
import AjouterMaison from "./Components/Pages/AjouterMaison";
import FiltresContext from "./Components/FiltresContext";
import User from "./Components/UserContext";
import Maisons from "./Components/MaisonsContext";

function App() {
	/*const Cards = [
		{
			Id: 1,
			Titre: "Villa blanche",
			Vendeur: "Sadadou mohamed",
			PrixDeReserve: "20 000 000 DA",
			link: "/static/images/a.jpg",
			link1: "/static/images/b.jpg",
			link2: "/static/images/c.jpg",
			link3: "/static/images/d.jpg",
			Superficie: 300,
			prix: 400,
			Encheri: true,
			Categorie: "Villa",
			Description:
				"Le lorem ipsum est, en imprimerie, une suite de mots sans signification  Le lorem ipsum est, en imprimerie, une suite de mots sans signification Le lorem ipsum est, en imprimerie, une suite de mots sans signification Le lorem ipsum est, en imprimerie, une suite de mots sans signification",
		},
		{
			Id: 2,
			Titre: "Villa LED",
			Vendeur: "Sadoudi brahim",
			PrixDeReserve: "-",
			link: "/static/images/b.jpg",
			link1: "/static/images/b.jpg",
			link2: "/static/images/c.jpg",
			link3: "/static/images/d.jpg",
			Superficie: 300,
			prix: 400,
			Encheri: true,
			Categorie: "Villa",
			Description:
				"Le lorem ipsum est, en imprimerie, une suite de mots sans signification  Le lorem ipsum est, en imprimerie, une suite de mots sans signification Le lorem ipsum est, en imprimerie, une suite de mots sans signification Le lorem ipsum est, en imprimerie, une suite de mots sans signification",
		},
		{
			Id: 3,
			Titre: "Maison de compagne",
			Vendeur: "Zereg assem",
			PrixDeReserve: "17 000 000 DA",
			link: "/static/images/c.jpg",
			link1: "/static/images/b.jpg",
			link2: "/static/images/c.jpg",
			link3: "/static/images/d.jpg",
			Superficie: 300,
			prix: 400,
			Encheri: true,
			Categorie: "Maisons",
			Description:
				"Le lorem ipsum est, en imprimerie, une suite de mots sans signification  Le lorem ipsum est, en imprimerie, une suite de mots sans signification Le lorem ipsum est, en imprimerie, une suite de mots sans signification Le lorem ipsum est, en imprimerie, une suite de mots sans signification",
		},
		{
			Id: 4,
			Titre: "Maison moderne",
			Vendeur: "Chegui wassim",
			PrixDeReserve: "2000DA",
			link: "/static/images/d.jpg",
			link1: "/static/images/b.jpg",
			link2: "/static/images/c.jpg",
			link3: "/static/images/d.jpg",
			Superficie: 300,
			prix: 400,
			Encheri: true,
			Categorie: "Appartement",
			Description:
				"Le lorem ipsum est, en imprimerie, une suite de mots sans signification  Le lorem ipsum est, en imprimerie, une suite de mots sans signification Le lorem ipsum est, en imprimerie, une suite de mots sans signification Le lorem ipsum est, en imprimerie, une suite de mots sans signification",
		},
		{
			Id: 5,
			Titre: "Villa de vacances",
			Vendeur: "vendeur",
			PrixDeReserve: "2000DA",
			link: "/static/images/e.jpg",
			link1: "/static/images/b.jpg",
			link2: "/static/images/c.jpg",
			link3: "/static/images/d.jpg",
			Superficie: 300,
			prix: 400,
			Encheri: true,
			Categorie: "Villa",
			Description:
				"Le lorem ipsum est, en imprimerie, une suite de mots sans signification  Le lorem ipsum est, en imprimerie, une suite de mots sans signification Le lorem ipsum est, en imprimerie, une suite de mots sans signification Le lorem ipsum est, en imprimerie, une suite de mots sans signification",
		},
		{
			Id: 6,
			Titre: "Maison moderne",
			Vendeur: "vendeur",
			PrixDeReserve: "2000DA",
			link: "/static/images/f.jpg",
			link1: "/static/images/b.jpg",
			link2: "/static/images/c.jpg",
			link3: "/static/images/d.jpg",
			Superficie: 300,
			prix: 400,
			Encheri: true,
			Categorie: "Studio",
			Description:
				"Le lorem ipsum est, en imprimerie, une suite de mots sans signification  Le lorem ipsum est, en imprimerie, une suite de mots sans signification Le lorem ipsum est, en imprimerie, une suite de mots sans signification Le lorem ipsum est, en imprimerie, une suite de mots sans signification",
		},
		{
			Id: 7,
			Titre: "Produit 1",
			Vendeur: "vendeur",
			PrixDeReserve: "2000DA",
			link: "/static/images/g.jpg",
			link1: "/static/images/b.jpg",
			link2: "/static/images/c.jpg",
			link3: "/static/images/d.jpg",
			Superficie: 300,
			prix: 400,
			Encheri: true,
			Categorie: "Maison",
			Description:
				"Le lorem ipsum est, en imprimerie, une suite de mots sans signification  Le lorem ipsum est, en imprimerie, une suite de mots sans signification Le lorem ipsum est, en imprimerie, une suite de mots sans signification Le lorem ipsum est, en imprimerie, une suite de mots sans signification",
		},
		{
			Id: 8,
			Titre: "Produit 1",
			Vendeur: "vendeur",
			PrixDeReserve: "2000DA",
			link: "/static/images/h.jpg",
			link1: "/static/images/b.jpg",
			link2: "/static/images/c.jpg",
			link3: "/static/images/d.jpg",
			Superficie: 300,
			prix: 400,
			Encheri: true,
			Categorie: "Maison",
			Description:
				"Le lorem ipsum est, en imprimerie, une suite de mots sans signification  Le lorem ipsum est, en imprimerie, une suite de mots sans signification Le lorem ipsum est, en imprimerie, une suite de mots sans signification Le lorem ipsum est, en imprimerie, une suite de mots sans signification",
		},
	];*/
	
	const [Cards, setCards] = useState([]); 
	var us = {
		id_client: "Cl_211813",
		UserName: "Black",
		Bio: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification",
		numeroTel: "0779022094",
		email: "mohamed.sadadou06@gmail.com",
		adress: "tazmalt",
	};
	const [user, setUser] = useState(us);
	const [maisons, setMaisons] = useState([]);
	//const [authenticated, setAuthenticated] = useState(false);
	//const { Filtres } = useContext(FiltresContext);
	const { Filtr } = useContext(FiltresContext);
	const [Filtre, setFiltre] = useState({
		Titre: "Titre",
		Recherche: "Recherche",
		Categorie: "Categorie",
		Superficie: [50, 2000],
		Encheri: false,
		prix: [300, 5000],
	});
	var val = { Filtre, setFiltre };
	var val2 = { maisons, setMaisons };
	useEffect(() => {
		const GetInfo = async () => {
			/*console.log('on get les info')*/
			await axios({
				method: "get",
				url: "http://localhost:5000/Utilisateur/RecupDonneesClient",
				withCredentials: true,
			})
				.then((res) => {
					console.log("recupe données client ",res.status);
					if (res.status == 201) {
						if (window.location.href != "http://localhost:3000/Login"&&window.location.href != "http://localhost:3000/Principal"&&window.location.href != "http://localhost:3000/SignUp")
							window.location.href = "/Login";
					}
					if (res.status == 200) {
						console.log("*************************************")
						console.log(res.data);
						console.log("*************************************")
						us.id_client=res.data.id_client;
						us.UserName=res.data.UserName;
						us.Bio=res.data.Bio;
						us.numeroTel=res.data.numeroTel;
						us.email=res.data.email;
						us.adress=res.data.adress;
						us.type=res.data.type;
						setUser(us);
						console.log("Notre utilisateur ",us);
						console.log("Notre utilisateur contexte",User);
					}
				})
				.catch((err) => {
					console.log("thardet", err);
				});
		};
		const GetMaisons = async () => {
			/*console.log('on get les info')*/
			await axios({
				method: "get",
				url: "http://localhost:5000/Utilisateur/getAllProducts",
				withCredentials: true,
			})
				.then(async(res) => {
					console.log(res.status);
					
					if (res.status == 200) {
						console.log(res.data);
						var maisos=[];
						await res.data.forEach((mai,index)=>{
							mai.Id=index+1;
							console.log("notre mais",mai);
							maisos.push(mai);
						})
						console.log('on va set ',maisos);
						setMaisons(maisos); 
						console.log("le contexte :",maisons);
						console.log('on a set');
						
						
					}
				})
				.catch((err) => {
					console.log("thardet", err);
				});
		};
		GetMaisons();
        
		if (window.location.href != "http://localhost:3000/Principal");GetInfo();
		
	}, []);
	return (
		<User.Provider value={user}>
			<Maisons.Provider value={val2}>
				<FiltresContext.Provider value={val}>
					<Router>
						<div className="App">
							<div className="principal">
								<Switch>
									<Route path="/Principal">{<Principal />}</Route>
									<Route path="/Produits">{<Produits />}</Route>
									<Route path="/Produit/:id">{<Produit />}</Route>
									<Route path="/Login">{<Login />}</Route>
									<Route path="/SignUp">{<SignUp />}</Route>
									<Route path="/Compte">{<Compte />}</Route>
									<Route path="/Info">{<Info />}</Route>
									<Route path="/AjouterMaison">{<AjouterMaison />}</Route>
									<Redirect to="/Principal" />
								</Switch>
							</div>
						</div>
					</Router>
				</FiltresContext.Provider>
			</Maisons.Provider>
		</User.Provider>
	);
}

export default App;
