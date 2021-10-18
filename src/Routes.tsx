import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import PartnerForm from "./pages/Partner/pages/PartnerForm";
import PartnerList from "./pages/Partner/pages/PartnerList";
import ActivityList from "./pages/Activities/pages/ActivityList";
import ActivityForm from "./pages/Activities/pages/ActivityForm";


const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Login} path="/" exact />
      <Route component={Home} path="/home" exact />
      <Route component={PartnerList} path="/partnerList" />
      <Route component={PartnerForm} path="/createPartner" />
      <Route component={ActivityList} path="/activityList" />
      <Route component={ActivityForm} path="/ActivityForm" />
    </BrowserRouter>
  );
};

export default Routes;
