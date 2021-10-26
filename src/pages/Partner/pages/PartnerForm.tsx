import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { DadosPessoais } from "../tabs/personalData";
import { FamilyData } from "../tabs/familyData";
import { Saude } from "../tabs/health";
import { PesquisaSocial } from "../tabs/socialResearch";
import Main from "../../../components/Main";
import TabPanel from "../components/tabPanel";

const useStyles = makeStyles((theme: Theme) => ({
  tabs: {
    backgroundColor: "lightgrey",
  },
}));

const PartnerForm = (): JSX.Element => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  function a11yProps(index: any) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }

  return (
    <div>
      <Main />
      <Tabs
        orientation="horizontal"
        variant="standard"
        value={value}
        onChange={handleChange}
        aria-label="horizontal tabs"
        className={classes.tabs}
      >
        <Tab label="Dados Pessoais" {...a11yProps(0)} />
        <Tab label="Responsável legal e Família" {...a11yProps(3)} />
        <Tab label="Saúde" {...a11yProps(2)} />
        <Tab label="Pesquisa Social" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div
          style={{
            textAlign: "justify",
            padding: "10%",
            width: "60%",
            marginLeft: "15%",
          }}
        >
          <DadosPessoais />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div
          style={{
            textAlign: "justify",
            padding: "10%",
            width: "60%",
            marginLeft: "15%",
          }}
        >
          <FamilyData />
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div
          style={{
            textAlign: "justify",
            padding: "10%",
            width: "60%",
            marginLeft: "15%",
          }}
        >
          <Saude />
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div
          style={{
            textAlign: "justify",
            padding: "10%",
            width: "60%",
            marginLeft: "15%",
          }}
        >
          <PesquisaSocial />
        </div>
      </TabPanel>
    </div>
  );
};

export default PartnerForm;
