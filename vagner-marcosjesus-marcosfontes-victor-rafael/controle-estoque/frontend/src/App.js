import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProdutosPage from './pages/ProdutosPage';
import VendedoresPage from './pages/VendedoresPage';
import UsuariosPage from './pages/UsuariosPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/produtos" component={ProdutosPage} />
        <Route path="/vendedores" component={VendedoresPage} />
        <Route path="/usuarios" component={UsuariosPage} />
        <Route path="/" exact component={ProdutosPage} />
      </Switch>
    </Router>
  );
}

export default App;