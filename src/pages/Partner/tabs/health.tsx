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

import { fatorRH, necsEspecs, localAcomp, freqAcomp } from "../../../constants";

export const Saude = () => {
  const classes = useStyles();
  const [fator, setFator] = useState("");
  const [necessidades, setNecessidades] = useState("");
  const [problemasDeSaude, setProblemasDeSaude] = useState(false);
  const [qualProblemaDeSaude, setQualProblemaDeSaude] = useState("");
  const [alergia, setAlergia] = useState(false);
  const [qualAlergia, setQualAlergia] = useState();
  const [restricaoAlimentar, setRestricaoAlimentar] = useState(false);
  const [qualRestricaoAlimentar, setQualRestricaoAlimentar] = useState("");
  const [restricaoMedicamentos, setRestricaoMedicamentos] = useState(false);
  const [qualRestricaoMedicamentos, setQualRestricaoMedicamentos] = useState("");
  const [acompanhamentoMedico, setAcompanhamentoMedico] = useState(false);
  const [nomeDoMedico, setNomeDoMedico] = useState("");
  const [enfermidade, setEnfermidade] = useState("");
  const [acompanhamento, setAcompanhamento] = useState("");
  const [frequencia, setFrequencia] = useState("");

  const handleSubmit = () => {
    console.log(
      JSON.stringify({
        fator,
        necessidades,
        problemasDeSaude,
        qualProblemaDeSaude,
        alergia,
        qualAlergia,
        restricaoAlimentar,
        qualRestricaoAlimentar,
        restricaoMedicamentos,
        qualRestricaoMedicamentos,
        acompanhamentoMedico,
        nomeDoMedico,
        enfermidade,
        acompanhamento,
        frequencia,
      })
    );
  };

  return (
    <div className={classes.container}>
      <p>Saúde</p>
      <div className={classes.form}>
        <FormLabel className={classes.label}>Fator Sanguíneo :</FormLabel>
        <Select
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
        <FormLabel className={classes.label}>Necessidades Especiais</FormLabel>
        <Select
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
        <RadioGroup value={problemasDeSaude} row>
          <FormControlLabel
            value={true}
            control={<Radio onClick={() => setProblemasDeSaude(true)} />}
            label="Sim"
          />
          <FormControlLabel
            value={false}
            control={<Radio onClick={() => setProblemasDeSaude(false)} />}
            label="Não"
          />
        </RadioGroup>
        {problemasDeSaude && (
          <TextField
            className={classes.input}
            label="Qual ?"
            onChange={(event: any) => {
              setQualProblemaDeSaude(event.target.value);
            }}
          />
        )}
        <FormLabel className={classes.label} component="legend">
          Alergia ?
        </FormLabel>
        <RadioGroup value={alergia} row>
          <FormControlLabel
            value={true}
            control={<Radio onClick={() => setAlergia(true)} />}
            label="Sim"
          />
          <FormControlLabel
            value={false}
            control={<Radio onClick={() => setAlergia(false)} />}
            label="Não"
          />
        </RadioGroup>
        {alergia && (
          <TextField
            className={classes.input}
            label="Qual ?"
            onChange={(event: any) => {
              setQualAlergia(event.target.value);
            }}
          />
        )}
        <FormLabel className={classes.label} component="legend">
          Restrição Alimentar ?
        </FormLabel>
        <RadioGroup
          value={restricaoAlimentar}
          row
        >
          <FormControlLabel
            value={true}
            control={<Radio onClick={() => setRestricaoAlimentar(true)} />}
            label="Sim"
          />
          <FormControlLabel
            value={false}
            control={<Radio onClick={() => setRestricaoAlimentar(false)} />}
            label="Não"
          />
        </RadioGroup>
        {restricaoAlimentar && (
          <TextField
            className={classes.input}
            label="Qual ?"
            onChange={(event: any) => {
              setQualRestricaoAlimentar(event.target.value);
            }}
          />
        )}
        <FormLabel className={classes.label} component="legend">
          Restrição a Medicação ?
        </FormLabel>
        <RadioGroup
          value={restricaoMedicamentos}
          row
        >
          <FormControlLabel
            value={true}
            control={<Radio onClick={() => setRestricaoMedicamentos(true)} />}
            label="Sim"
          />
          <FormControlLabel
            value={false}
            control={<Radio onClick={() => setRestricaoMedicamentos(false)} />}
            label="Não"
          />
        </RadioGroup>
        {restricaoMedicamentos  && (
          <TextField
            className={classes.input}
            label="Qual ?"
            onChange={(event: any) => {
              setQualRestricaoMedicamentos(event.target.value);
            }}
          />
        )}
        <FormLabel className={classes.label} component="legend">
          Acompanhamento Medico ?
        </FormLabel>
        <RadioGroup
          value={acompanhamentoMedico}
          row
        >
          <FormControlLabel
            value={true}
            control={<Radio onClick={() => setAcompanhamentoMedico(true)} />}
            label="Sim"
          />
          <FormControlLabel
            value={false}
            control={<Radio onClick={() => setAcompanhamentoMedico(false)} />}
            label="Não"
          />
        </RadioGroup>
        {acompanhamentoMedico && (
          <>
            <>
              <TextField
                className={classes.input}
                label="Quem ?"
                onChange={(event: any) => {
                  setNomeDoMedico(event.target.value);
                }}
              />
              <TextField
                className={classes.input}
                label="Enfermidade"
                onChange={(event: any) => {
                  setEnfermidade(event.target.value);
                }}
              />
            </>
            <FormLabel className={classes.label}>
              Local de Acompanhamento
            </FormLabel>
            <Select
              value={acompanhamento}
              onChange={(event: any) => {
                setAcompanhamento(event.target.value);
              }}
              className={classes.input}
            >
              {localAcomp.map((item) => (
                <MenuItem value={item.value} key={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </Select>
            <FormLabel className={classes.label}>
              Frequencia do Acompanhamento
            </FormLabel>
            <Select
              value={frequencia}
              onChange={(event: any) => {
                setFrequencia(event.target.value);
              }}
              className={classes.input}
            >
              {freqAcomp.map((item) => (
                <MenuItem value={item.value} key={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </Select>
          </>
        )}
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
