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

import {
  fatorRH,
  necsEspecs,
  localAcomp,
  freqAcomp,
} from "../../../constants";

export const Saude = () => {
  const classes = useStyles();
  const [fator, setFator] = useState("");
  const [necessidades, setNecessidades] = useState("");
  const [probSaude, setProbSaude] = useState("n");
  const [nomeProbSaude, setNomeProbSaude] = useState("");
  const [alergia, setAlergia] = useState("n");
  const [nomeAlergia, setNomeAlergia] = useState();
  const [restricaoAlimentar, setRestricaoAlimentar] = useState("n");
  const [restAlimentar, setRestAlimentar] = useState("");
  const [restricaoMed, setRestricaoMed] = useState("n");
  const [restMed, setRestMed] = useState("");
  const [acompMedico, setAcompMedico] = useState("n");
  const [nomeMedico, setNomeMedico] = useState("n");
  const [enfermidade, setEnfermidade] = useState("");
  const [acompanhamento, setAcompanhamento] = useState("");
 const  [frequencia, setFrequencia] = useState("");

  const handleSubmit = () => {
    console.log(
      JSON.stringify({
        fator,
        necessidades,
        probSaude,
        nomeProbSaude,
        alergia,
        nomeAlergia,
        restricaoAlimentar,
        restAlimentar,
        restricaoMed,
        restMed,
        acompMedico,
        nomeMedico,
        enfermidade,
        acompanhamento,
        frequencia,
      })
    );
  };

  return (
    <div className={classes.container}>
      <p>
        Saúde
      </p>
      <div className={classes.form}>
        <FormLabel className={classes.label}>Fator Sanguíneo :</FormLabel><Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={fator}
            onChange={(event: any) => {
              setFator(event.target.value);
            }}
            className={classes.input}
          >
            {fatorRH.map((item) => (
              <MenuItem value={item.value} key={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
          <FormLabel className={classes.label}>Necessidades Especiais</FormLabel><Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={necessidades}
            onChange={(event: any) => {
              setNecessidades(event.target.value);
            }}
            className={classes.input}
          >
            {necsEspecs.map((item) => (
              <MenuItem value={item.value} key={item.value}>
                {item.label}
              </MenuItem>
            ))}
        </Select>
        <FormLabel className={classes.label} component="legend">
          Problemas de Saúde ?
        </FormLabel>
        <RadioGroup
          aria-label="probSaude"
          defaultValue="n"
          value={probSaude}
          name="radio-buttons-group"
          row
        >
          <FormControlLabel
            value="s"
            control={<Radio onClick={() => setProbSaude("s")} />}
            label="Sim"
          />
          <FormControlLabel
            value="n"
            control={<Radio onClick={() => setProbSaude("n")} />}
            label="Não"
          />
        </RadioGroup>
        {probSaude === "s" &&
              <TextField
              className={classes.input}
              name="nomeProbSaude"
          label="Qual ?"
          onChange={(event: any) => {
                setNomeProbSaude(event.target.value);
              } }
        />}
        <FormLabel className={classes.label} component="legend">
          Alergia ?
        </FormLabel>
        <RadioGroup
          aria-label="alergia"
          defaultValue="n"
          value={alergia}
          name="radio-buttons-group"
          row
        >
          <FormControlLabel
            value="s"
            control={<Radio onClick={() => setAlergia("s")} />}
            label="Sim"
          />
          <FormControlLabel
            value="n"
            control={<Radio onClick={() => setAlergia("n")} />}
            label="Não"
          />
        </RadioGroup>
        {alergia === "s" &&
              <TextField
              className={classes.input}
              name="nomeAlergia"
          label="Qual ?"
          onChange={(event: any) => {
                setNomeAlergia(event.target.value);
              } }
        />}
        <FormLabel className={classes.label} component="legend">
          Restrição Alimentar ?
        </FormLabel>
        <RadioGroup
          aria-label="restricaoAlimentar"
          defaultValue="n"
          value={restricaoAlimentar}
          name="radio-buttons-group"
          row
        >
          <FormControlLabel
            value="s"
            control={<Radio onClick={() => setRestricaoAlimentar("s")} />}
            label="Sim"
          />
          <FormControlLabel
            value="n"
            control={<Radio onClick={() => setRestricaoAlimentar("n")} />}
            label="Não"
          />
        </RadioGroup>
        {restricaoAlimentar === "s" &&
              <TextField
              className={classes.input}
              name="restAlimentar"
          label="Qual ?"
          onChange={(event: any) => {
                setRestAlimentar(event.target.value);
              } }
        />}
        <FormLabel className={classes.label} component="legend">
          Restrição a Medicação ?
        </FormLabel>
        <RadioGroup
          aria-label="restricaoMed"
          defaultValue="n"
          value={restricaoMed}
          name="radio-buttons-group"
          row
        >
          <FormControlLabel
            value="s"
            control={<Radio onClick={() => setRestricaoMed("s")} />}
            label="Sim"
          />
          <FormControlLabel
            value="n"
            control={<Radio onClick={() => setRestricaoMed("n")} />}
            label="Não"
          />
        </RadioGroup>
         {restricaoMed === "s" &&
              <TextField
              className={classes.input}
              name="restMed"
          label="Qual ?"
          onChange={(event: any) => {
                setRestMed(event.target.value);
              } }
          />}
        <FormLabel className={classes.label} component="legend">
          Acompanhamento Medico ?
        </FormLabel>
        <RadioGroup
          aria-label="acompMedico"
          defaultValue="n"
          value={acompMedico}
          name="radio-buttons-group"
          row
        >
          <FormControlLabel
            value="s"
            control={<Radio onClick={() => setAcompMedico("s")} />}
            label="Sim"
          />
          <FormControlLabel
            value="n"
            control={<Radio onClick={() => setAcompMedico("n")} />}
            label="Não"
          />
          </RadioGroup>       
          {acompMedico === "s" &&
              <><><TextField
            className={classes.input}
            name="nomeMedico"
            label="Quem ?"
            onChange={(event: any) => {
              setNomeMedico(event.target.value);
            } } /><TextField
              className={classes.input}
              name="enfermidade"
              label="Enfermidade"
              onChange={(event: any) => {
                setEnfermidade(event.target.value);
              } } /></><FormLabel className={classes.label}>Local de Acompanhamento</FormLabel><Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={acompanhamento}
                onChange={(event: any) => {
                  setAcompanhamento(event.target.value);
                } }
                className={classes.input}
              >
              {localAcomp.map((item) => (
                <MenuItem value={item.value} key={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </Select><FormLabel className={classes.label}>Frequencia do Acompanhamento</FormLabel><Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={frequencia}
              onChange={(event: any) => {
                setFrequencia(event.target.value);
              } }
              className={classes.input}
            >
              {freqAcomp.map((item) => (
                <MenuItem value={item.value} key={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </Select></>
          }           
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