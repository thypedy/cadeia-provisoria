import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';

import Home from './pages/Home/Home';
import Login from './pages/TelaLogin/Login';
import Cadastro from './pages/TelaCadastro/Cadastro';
import Principal from './pages/TelaPrincipal/Principal';
import PlantDetail from './pages/TelaPrincipal/PlantDetail';

const AppRouter: React.FC = () => (
  <IonRouterOutlet>
    {/* Rota padrão redireciona para a página inicial */}
    <Route exact path="/" render={() => <Redirect to="/home" />} />

    <Route exact path="/home" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/cadastro" component={Cadastro} />
    <Route exact path="/principal" component={Principal} />
    <Route exact path="/plant/:id" component={PlantDetail} />
    
  </IonRouterOutlet>
);

export default AppRouter;
