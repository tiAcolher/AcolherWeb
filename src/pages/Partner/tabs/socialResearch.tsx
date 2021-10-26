import React, { useState } from "react";
import {
  createStyles,
  makeStyles,
  TextField,
  Theme,
  Radio,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";

import { domicilio, chefeFamilia } from "../../../constants";

export const PesquisaSocial = () => {
  const classes = useStyles();
  const [chefeDaFamilia, setChefeFamilia] = useState("");
  const [menores, setMenores] = useState(0);
  const [aposentadosPensionistas, setAposentadosPensionistas] = useState(0);
  const [moradia, setMoradia] = useState("");
  const [redeEletrica, setRedeEletrica] = useState(true);
  const [redeEsgoto, setRedeEsgoto] = useState(true);
  const [ruaAsfaltada, setRuaAsfaltada] = useState(true);
  const [aguaEncanada, setAguaEncanada] = useState(true);
  const [redeServicos, setRedeServicos] = useState(true);
  const [computador, setComputador] = useState(true);  
  const [internet, setInternet] = useState(true);
  const [criancaAdolescentePossuiCelular, setCriancaAdolescentePossuiCelulardo] = useState(true);
  const [criancaAdolescentePossuiInternet, setCriancaAdolescentePossuiInternet] = useState(true);  
  const [adolenscenteComExpDeTrabalho, setAdolenscenteComExpDeTrabalho] = useState(true);
  const [bolsaFamiliaAtualmente, setBolsaFamiliaAtualmente] = useState(true);
  const [bolsaFamiliaAnteriormente, setBolsaFamiliaAnteriormente] = useState(true);
  const [outroBeneficio, setOutroBeneficio] = useState(true);
  const [pessoasComDeficiencia, setPessoasComDeficiencia] = useState(true);

  const handleSubmit = () => {
    console.log(
      JSON.stringify({
        chefeDaFamilia,
        menores,
        aposentadosPensionistas,
        moradia,
        redeEletrica,
        redeEsgoto,
        ruaAsfaltada,
        aguaEncanada,
        redeServicos,
        computador,
        internet,
        criancaAdolescentePossuiCelular,
        criancaAdolescentePossuiInternet,
        adolenscenteComExpDeTrabalho,
        bolsaFamiliaAtualmente,
        bolsaFamiliaAnteriormente,
        outroBeneficio,
        pessoasComDeficiencia,
      })
    );
  };

  return (
    <div className={classes.container}>
      <p>Pesquisa Social</p>
      <div className={classes.form}>
        <FormLabel className={classes.label}>Chefe da Familia</FormLabel>
        <Select
          value={chefeDaFamilia}
          onChange={(event: any) => {
            setChefeFamilia(event.target.value);
          }}
          className={classes.input}
        >
          {chefeFamilia.map((item) => (
            <MenuItem value={item.value} key={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
        <TextField
          className={classes.input}
          label="Quantidade de Menores de Idade"
          type="number"
          onChange={(event: any) => {
            setMenores(event.target.value);
          }}
        />
        <TextField
          className={classes.input}
          label="Quantidade de Aposentados/Pensionistas"
          type="number"
          onChange={(event: any) => {
            setAposentadosPensionistas(event.target.value);
          }}
        />
        <FormLabel className={classes.label}>
          Situação do Domicilio de Moradia
        </FormLabel>
        <Select
          value={moradia}
          onChange={(event: any) => {
            setMoradia(event.target.value);
          }}
          className={classes.input}
        >
          {domicilio.map((item) => (
            <MenuItem value={item.value} key={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
        <FormLabel className={classes.label} component="legend">
          Rede Elétrica ?
        </FormLabel>
        <RadioGroup
          value={redeEletrica}
          row
        >
          <FormControlLabel
            value={true}
            control={<Radio onClick={() => setRedeEletrica(true)} />}
            label="Sim"
          />
          <FormControlLabel
            value={false}
            control={<Radio onClick={() => setRedeEletrica(false)} />}
            label="Não"
          />
        </RadioGroup>
        <FormLabel className={classes.label} component="legend">
          Rede de Esgoto ?
        </FormLabel>
        <RadioGroup
          value={redeEsgoto}
          row
        >
          <FormControlLabel
            value={true}
            control={<Radio onClick={() => setRedeEsgoto(true)} />}
            label="Sim"
          />
          <FormControlLabel
            value={false}
            control={<Radio onClick={() => setRedeEsgoto(false)} />}
            label="Não"
          />
        </RadioGroup>
        <FormLabel className={classes.label} component="legend">
          Rua Asfaltada ?
        </FormLabel>
        <RadioGroup
          value={ruaAsfaltada}
          row
        >
          <FormControlLabel
            value={true}
            control={<Radio onClick={() => setRuaAsfaltada(true)} />}
            label="Sim"
          />
          <FormControlLabel
            value={false}
            control={<Radio onClick={() => setRuaAsfaltada(false)} />}
            label="Não"
          />
        </RadioGroup>
        <FormLabel className={classes.label} component="legend">
          Água Encanada ?
        </FormLabel>
        <RadioGroup
          value={aguaEncanada}
          row
        >
          <FormControlLabel
            value={true}
            control={<Radio onClick={() => setAguaEncanada(true)} />}
            label="Sim"
          />
          <FormControlLabel
            value={false}
            control={<Radio onClick={() => setAguaEncanada(false)} />}
            label="Não"
          />
        </RadioGroup>
        <FormLabel className={classes.label} component="legend">
          Rede de Serviços ?
        </FormLabel>
        <RadioGroup
          value={redeServicos}
          row
        >
          <FormControlLabel
            value={true}
            control={<Radio onClick={() => setRedeServicos(true)} />}
            label="Sim"
          />
          <FormControlLabel
            value={false}
            control={<Radio onClick={() => setRedeServicos(false)} />}
            label="Não"
          />
          </RadioGroup>
        <FormLabel className={classes.label} component="legend">
          Possui Computador ?
        </FormLabel>
        <RadioGroup
          value={computador}
          row
        >
          <FormControlLabel
            value={true}
            control={<Radio onClick={() => setComputador(true)} />}
            label="Sim"
          />
          <FormControlLabel
            value={false}
            control={<Radio onClick={() => setComputador(false)} />}
            label="Não"
          />
        </RadioGroup>
          <FormLabel className={classes.label} component="legend">
            Possui Internet Banda Larga ?
          </FormLabel>
          <RadioGroup
            value={internet}
            row
          >
            <FormControlLabel
              value={true}
              control={<Radio onClick={() => setInternet(true)} />}
              label="Sim"
            />
            <FormControlLabel
              value={false}
              control={<Radio onClick={() => setInternet(false)} />}
              label="Não"
            />
        </RadioGroup>
        <FormLabel className={classes.label} component="legend">
            Criança/Adolescente com Celular ?
          </FormLabel>
          <RadioGroup
            value={criancaAdolescentePossuiCelular}
            row
          >
            <FormControlLabel
              value={true}
              control={<Radio onClick={() => setCriancaAdolescentePossuiCelulardo(true)} />}
              label="Sim"
            />
            <FormControlLabel
              value={false}
              control={<Radio onClick={() => setCriancaAdolescentePossuiCelulardo(false)} />}
              label="Não"
            />
        </RadioGroup>
        <FormLabel className={classes.label} component="legend">
            Criança/Adolescente com Internet Móvel ?
          </FormLabel>
        <RadioGroup
            value={criancaAdolescentePossuiInternet}
            row
          >
            <FormControlLabel
              value={true}
              control={<Radio onClick={() => setCriancaAdolescentePossuiInternet(true)} />}
              label="Sim"
            />
            <FormControlLabel
              value={false}
              control={<Radio onClick={() => setCriancaAdolescentePossuiInternet(false)} />}
              label="Não"
            />
        </RadioGroup>
        <FormLabel className={classes.label} component="legend">
          Experiência de Trabalho Adolescente ?
        </FormLabel>
        <RadioGroup
          value={adolenscenteComExpDeTrabalho}
          row
        >
          <FormControlLabel
            value={true}
            control={<Radio onClick={() => setAdolenscenteComExpDeTrabalho(true)} />}
            label="Sim"
          />
          <FormControlLabel
            value={false}
            control={<Radio onClick={() => setAdolenscenteComExpDeTrabalho(false)} />}
            label="Não"
          />
        </RadioGroup>
        <FormLabel className={classes.label} component="legend">
          Possui Bolsa Família Atualmente ?
        </FormLabel>
        <RadioGroup
          value={bolsaFamiliaAtualmente}
          row
        >
          <FormControlLabel
            value={true}
            control={<Radio onClick={() => setBolsaFamiliaAtualmente(true)} />}
            label="Sim"
          />
          <FormControlLabel
            value={false}
            control={<Radio onClick={() => setBolsaFamiliaAtualmente(false)} />}
            label="Não"
          />
        </RadioGroup>
        <FormLabel className={classes.label} component="legend">
          Já possuiu Bolsa Família ?
        </FormLabel>
        <RadioGroup
          value={bolsaFamiliaAnteriormente}
          row
        >
          <FormControlLabel
            value={true}
            control={<Radio onClick={() => setBolsaFamiliaAnteriormente(true)} />}
            label="Sim"
          />
          <FormControlLabel
            value={false}
            control={<Radio onClick={() => setBolsaFamiliaAnteriormente(false)} />}
            label="Não"
          />
        </RadioGroup>
        <FormLabel className={classes.label} component="legend">
          Possui Outro Benefício ?
        </FormLabel>
        <RadioGroup
          value={outroBeneficio}
          row
        >
          <FormControlLabel
            value={true}
            control={<Radio onClick={() => setOutroBeneficio(true)} />}
            label="Sim"
          />
          <FormControlLabel
            value={false}
            control={<Radio onClick={() => setOutroBeneficio(false)} />}
            label="Não"
          />
        </RadioGroup>
        <FormLabel className={classes.label} component="legend">
          Pessoas com deficiência ?
        </FormLabel>
        <RadioGroup
          value={pessoasComDeficiencia}
          row
        >
          <FormControlLabel
            value={true}
            control={<Radio onClick={() => setPessoasComDeficiencia(true)} />}
            label="Sim"
          />
          <FormControlLabel
            value={false}
            control={<Radio onClick={() => setPessoasComDeficiencia(false)} />}
            label="Não"
          />
        </RadioGroup>
        
        <Button
          onClick={handleSubmit}
          className={classes.button}
          variant="contained"
          color="primary"
        >
          Salvar
        </Button>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: "-18%",
      flexDirection: "column",
    },
    form: {
      display: "flex",
      flexDirection: "column",
    },
    input: {
      width: "80%",
    },
    label: {
      marginTop: "2%",
    },
    button: {
      marginTop: "2%",
      width: "15%",
    },
  })
);