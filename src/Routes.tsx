import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Main from "./components/Main";

import PartnerForm from "./pages/Partner/pages/PartnerForm";
import PartnerList from "./pages/Partner/pages/PartnerList";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Main} path="/" exact />
      <Route component={PartnerList} path="/list" />
      <Route component={PartnerForm} path="/createPartner" />
    </BrowserRouter>
  );
};

export default Routes;
