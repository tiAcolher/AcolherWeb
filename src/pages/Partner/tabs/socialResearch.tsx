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
  const [moradia, setMoradia] = useState("");
  const [redeEletrica, setRedeEletrica] = useState("s");
  const [redeEsgoto, setRedeEsgoto] = useState("s");
  const [ruaAsfaltada, setRuaAsfaltada] = useState("s");
  const [aguaEnc, setAguaEnc] = useState("s");
  const [redeServ, setRedeServ] = useState("s");
  const [computador, setComputador] = useState("s");  
  const [internet, setInternet] = useState("s");
  const [celCriAdo, setCelCriAdo] = useState("s");
  const [intCriAdo, setIntCriAdo] = useState("s");  
  const [expTrbAdo, setExpTrbAdo] = useState("s");
  const [bolsaFamiliaAtu, setBolsaFamiliaAtu] = useState("s");
  const [bolsaFamiliaPas, setBolsaFamiliaPas] = useState("s");
  const [outroBen, setOutroBen] = useState("s");
  const [chefeFami, setChefeFami] = useState("s");
  const [pessoasDef, setPessoasDef] = useState("s");
  const [menores, setMenores] = useState("s");
  const [apoPens, setApoPens] = useState("s");

  const handleSubmit = () => {
    console.log(
      JSON.stringify({
        chefeFami,
        moradia,
        redeEletrica,
        redeEsgoto,
        ruaAsfaltada,
        aguaEnc,
        redeServ,
        computador,
        internet,
        celCriAdo,
        intCriAdo,
        expTrbAdo,
        bolsaFamiliaAtu,
        bolsaFamiliaPas,
        outroBen,
        pessoasDef,
        menores,
        apoPens,
      })
    );
  };

  return (
    <div className={classes.container}>
      <p>Pesquisa Social</p>
      <div className={classes.form}>
        <FormLabel className={classes.label}>Chefe da Familia</FormLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={chefeFami}
          onChange={(event: any) => {
            setChefeFami(event.target.value);
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
          name="menores"
          label="Quantidade de Menores de Idade"
          type="number"
          onChange={(event: any) => {
            setMenores(event.target.value);
          }}
        />
        <TextField
          className={classes.input}
          name="apoPens"
          label="Quantidade de Aposentados/Pensionistas"
          type="number"
          onChange={(event: any) => {
            setApoPens(event.target.value);
          }}
        />
        <FormLabel className={classes.label}>
          Situação do Domicilio de Moradia
        </FormLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
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
          aria-label="redeEletrica"
          defaultValue="n"
          value={redeEletrica}
          name="radio-buttons-group"
          row
        >
          <FormControlLabel
            value="s"
            control={<Radio onClick={() => setRedeEletrica("s")} />}
            label="Sim"
          />
          <FormControlLabel
            value="n"
            control={<Radio onClick={() => setRedeEletrica("n")} />}
            label="Não"
          />
        </RadioGroup>
        <FormLabel className={classes.label} component="legend">
          Rede de Esgoto ?
        </FormLabel>
        <RadioGroup
          aria-label="redeEsgoto"
          defaultValue="n"
          value={redeEsgoto}
          name="radio-buttons-group"
          row
        >
          <FormControlLabel
            value="s"
            control={<Radio onClick={() => setRedeEsgoto("s")} />}
            label="Sim"
          />
          <FormControlLabel
            value="n"
            control={<Radio onClick={() => setRedeEsgoto("n")} />}
            label="Não"
          />
        </RadioGroup>
        <FormLabel className={classes.label} component="legend">
          Rua Asfaltada ?
        </FormLabel>
        <RadioGroup
          aria-label="ruaAsfaltada"
          defaultValue="n"
          value={ruaAsfaltada}
          name="radio-buttons-group"
          row
        >
          <FormControlLabel
            value="s"
            control={<Radio onClick={() => setRuaAsfaltada("s")} />}
            label="Sim"
          />
          <FormControlLabel
            value="n"
            control={<Radio onClick={() => setRuaAsfaltada("n")} />}
            label="Não"
          />
        </RadioGroup>
        <FormLabel className={classes.label} component="legend">
          Água Encanada ?
        </FormLabel>
        <RadioGroup
          aria-label="aguaEnc"
          defaultValue="n"
          value={aguaEnc}
          name="radio-buttons-group"
          row
        >
          <FormControlLabel
            value="s"
            control={<Radio onClick={() => setAguaEnc("s")} />}
            label="Sim"
          />
          <FormControlLabel
            value="n"
            control={<Radio onClick={() => setAguaEnc("n")} />}
            label="Não"
          />
        </RadioGroup>
        <FormLabel className={classes.label} component="legend">
          Rede de Serviços ?
        </FormLabel>
        <RadioGroup
          aria-label="redeServ"
          defaultValue="n"
          value={redeServ}
          name="radio-buttons-group"
          row
        >
          <FormControlLabel
            value="s"
            control={<Radio onClick={() => setRedeServ("s")} />}
            label="Sim"
          />
          <FormControlLabel
            value="n"
            control={<Radio onClick={() => setRedeServ("n")} />}
            label="Não"
          />
          </RadioGroup>
        <FormLabel className={classes.label} component="legend">
          Possui Computador ?
        </FormLabel>
        <RadioGroup
          aria-label="computador"
          defaultValue="n"
          value={computador}
          name="radio-buttons-group"
          row
        >
          <FormControlLabel
            value="s"
            control={<Radio onClick={() => setComputador("s")} />}
            label="Sim"
          />
          <FormControlLabel
            value="n"
            control={<Radio onClick={() => setComputador("n")} />}
            label="Não"
          />
        </RadioGroup>
          <FormLabel className={classes.label} component="legend">
            Possui Internet Banda Larga ?
          </FormLabel>
          <RadioGroup
            aria-label="internet"
            defaultValue="n"
            value={internet}
            name="radio-buttons-group"
            row
          >
            <FormControlLabel
              value="s"
              control={<Radio onClick={() => setInternet("s")} />}
              label="Sim"
            />
            <FormControlLabel
              value="n"
              control={<Radio onClick={() => setInternet("n")} />}
              label="Não"
            />
        </RadioGroup>
        <FormLabel className={classes.label} component="legend">
            Criança/Adolescente com Celular ?
          </FormLabel>
          <RadioGroup
            aria-label="celCriAdo"
            defaultValue="n"
            value={celCriAdo}
            name="radio-buttons-group"
            row
          >
            <FormControlLabel
              value="s"
              control={<Radio onClick={() => setCelCriAdo("s")} />}
              label="Sim"
            />
            <FormControlLabel
              value="n"
              control={<Radio onClick={() => setCelCriAdo("n")} />}
              label="Não"
            />
        </RadioGroup>
        <FormLabel className={classes.label} component="legend">
            Criança/Adolescente com Internet Móvel ?
          </FormLabel>
        <RadioGroup
            aria-label="intCriAdo"
            defaultValue="n"
            value={intCriAdo}
            name="radio-buttons-group"
            row
          >
            <FormControlLabel
              value="s"
              control={<Radio onClick={() => setIntCriAdo("s")} />}
              label="Sim"
            />
            <FormControlLabel
              value="n"
              control={<Radio onClick={() => setIntCriAdo("n")} />}
              label="Não"
            />
        </RadioGroup>
        <FormLabel className={classes.label} component="legend">
          Experiência de Trabalho Adolescente ?
        </FormLabel>
        <RadioGroup
          aria-label="expTrbAdo"
          defaultValue="n"
          value={expTrbAdo}
          name="radio-buttons-group"
          row
        >
          <FormControlLabel
            value="s"
            control={<Radio onClick={() => setExpTrbAdo("s")} />}
            label="Sim"
          />
          <FormControlLabel
            value="n"
            control={<Radio onClick={() => setExpTrbAdo("n")} />}
            label="Não"
          />
        </RadioGroup>
        <FormLabel className={classes.label} component="legend">
          Possui Bolsa Família Atualmente ?
        </FormLabel>
        <RadioGroup
          aria-label="bolsaFamiliaAtu"
          defaultValue="n"
          value={bolsaFamiliaAtu}
          name="radio-buttons-group"
          row
        >
          <FormControlLabel
            value="s"
            control={<Radio onClick={() => setBolsaFamiliaAtu("s")} />}
            label="Sim"
          />
          <FormControlLabel
            value="n"
            control={<Radio onClick={() => setBolsaFamiliaAtu("n")} />}
            label="Não"
          />
        </RadioGroup>
        <FormLabel className={classes.label} component="legend">
          Já possuiu Bolsa Família ?
        </FormLabel>
        <RadioGroup
          aria-label="bolsaFamiliaPas"
          defaultValue="n"
          value={bolsaFamiliaPas}
          name="radio-buttons-group"
          row
        >
          <FormControlLabel
            value="s"
            control={<Radio onClick={() => setBolsaFamiliaPas("s")} />}
            label="Sim"
          />
          <FormControlLabel
            value="n"
            control={<Radio onClick={() => setBolsaFamiliaPas("n")} />}
            label="Não"
          />
        </RadioGroup>
        <FormLabel className={classes.label} component="legend">
          Possui Outro Benefício ?
        </FormLabel>
        <RadioGroup
          aria-label="probSaude"
          defaultValue="n"
          value={outroBen}
          name="radio-buttons-group"
          row
        >
          <FormControlLabel
            value="s"
            control={<Radio onClick={() => setOutroBen("s")} />}
            label="Sim"
          />
          <FormControlLabel
            value="n"
            control={<Radio onClick={() => setOutroBen("n")} />}
            label="Não"
          />
        </RadioGroup>
        <FormLabel className={classes.label} component="legend">
          Pessoas com deficiência ?
        </FormLabel>
        <RadioGroup
          aria-label="probSaude"
          defaultValue="n"
          value={pessoasDef}
          name="radio-buttons-group"
          row
        >
          <FormControlLabel
            value="s"
            control={<Radio onClick={() => setPessoasDef("s")} />}
            label="Sim"
          />
          <FormControlLabel
            value="n"
            control={<Radio onClick={() => setPessoasDef("n")} />}
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