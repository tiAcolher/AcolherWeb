import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import { DadosPessoais } from "../components/personalData";
import { RespFamilia } from "../components/familyData";
import { Saude } from "../components/health";
import { PesquisaSocial } from "../components/socialResearch";
import Main from "../../../components/Main";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

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
          <DadosPessoais
            onSubmit={({
              nome,
              sobrenome,
              sexo,
              dt_nasc,
              rg,
              cpf,
              cep,
              logradouro,
              endereco,
              numero,
              complemento,
              bairro,
              cidade,
              estado,
              telFixo,
              celular,
            }) => {
              console.log(
                nome,
                sobrenome,
                sexo,
                dt_nasc,
                rg,
                cpf,
                cep,
                logradouro,
                endereco,
                numero,
                complemento,
                bairro,
                cidade,
                estado,
                telFixo,
                celular
              );
            }}
          />
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
          <RespFamilia
            onSubmit={({
              nome,
              sobrenome,
              sexo,
              dt_nasc,
              rg,
              cpf,
              cep,
              logradouro,
              endereco,
              numero,
              complemento,
              bairro,
              cidade,
              estado,
              telFixo,
              celular,
            }) => {
              console.log(
                nome,
                sobrenome,
                sexo,
                dt_nasc,
                rg,
                cpf,
                cep,
                logradouro,
                endereco,
                numero,
                complemento,
                bairro,
                cidade,
                estado,
                telFixo,
                celular
              );
            }}
          />
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
          <Saude
            onSubmit={({
              nome,
              sobrenome,
              sexo,
              dt_nasc,
              rg,
              cpf,
              cep,
              logradouro,
              endereco,
              numero,
              complemento,
              bairro,
              cidade,
              estado,
              telFixo,
              celular,
            }) => {
              console.log(
                nome,
                sobrenome,
                sexo,
                dt_nasc,
                rg,
                cpf,
                cep,
                logradouro,
                endereco,
                numero,
                complemento,
                bairro,
                cidade,
                estado,
                telFixo,
                celular
              );
            }}
          />
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
          <PesquisaSocial
            onSubmit={({
              nome,
              sobrenome,
              sexo,
              dt_nasc,
              rg,
              cpf,
              cep,
              logradouro,
              endereco,
              numero,
              complemento,
              bairro,
              cidade,
              estado,
              telFixo,
              celular,
            }) => {
              console.log(
                nome,
                sobrenome,
                sexo,
                dt_nasc,
                rg,
                cpf,
                cep,
                logradouro,
                endereco,
                numero,
                complemento,
                bairro,
                cidade,
                estado,
                telFixo,
                celular
              );
            }}
          />
        </div>
      </TabPanel>
    </div>
  );
};

export default PartnerForm;
