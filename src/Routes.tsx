import React, { useEffect, useState } from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import PartnerForm from "./pages/Partner/pages/PartnerForm";
import PartnerList from "./pages/Partner/pages/PartnerList";
import ActivityList from "./pages/Activities/pages/ActivityList";
import ActivityForm from "./pages/Activities/pages/ActivityForm";
import { useSelector } from "react-redux";
import { selectUsuario } from "./reducers/userReducer";

const Routes = () => {
  const usuario = useSelector(selectUsuario);
  return (
    <BrowserRouter>
      <Route component={Login} path="/" exact />
      <Route component={usuario ? Home : Login} path="/home" exact />
      <Route component={usuario ? PartnerList : Login} path="/partnerList" />
      <Route component={usuario ? PartnerForm : Login} path="/createPartner" />
      <Route component={usuario ? ActivityList : Login} path="/activityList" />
      <Route component={usuario ? ActivityForm : Login} path="/ActivityForm" />
    </BrowserRouter>
  );
};

export default Routes;
