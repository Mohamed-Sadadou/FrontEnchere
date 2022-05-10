

import { React} from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Principal from "./Components/Pages/Principal";
import Produits from "./Components/Pages/Page1";
import Produit from "./Components/Pages/Produit";

function App() {
  return (<Router>
    <div className="App">
      <div className="principal">
        <Switch>
          <Route path="/Principal">
            {<Principal/>}
          </Route>
          <Route path="/Produits">
            {<Produits/>}
          </Route>
          <Route path="/Produit">
            {<Produit/>}
          </Route>
          
          <Redirect to="/Principal" />
        </Switch>
      </div>
    </div>
  </Router>
  );
}

export default App;
