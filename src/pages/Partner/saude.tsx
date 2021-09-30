import {
  Button,
  createStyles,
  makeStyles,
  Theme,
  MenuItem,
} from "@material-ui/core";
import { Form, Formik } from "formik";
import * as React from "react";
import { boleano, necsEspecs, fatorRH, localAcomp, freqAcomp } from "../jsons";
import { TextField } from "@material-ui/core";

interface Values {
  nome: string;
  sobrenome: string;
  sexo: string;
  dt_nasc: string;
  rg: string;
  cpf: string;
  cep: string;
  logradouro: string;
  endereco: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  telFixo: string;
  celular: string;
}

interface Props {
  onSubmit: (values: Values) => void;
}

export const Saude: React.FC<Props> = ({ onSubmit }) => {
  const classes = useStyles();
  const [fatorRh, setFatorRh] = React.useState("");
  const [necEsp, setNecEsp] = React.useState("");
  const [probSaude, setProbSaude] = React.useState("");
  const [alergia, setAlergia] = React.useState("");
  const [restAli, setRestAli] = React.useState("");
  const [restMedic, setRestMedic] = React.useState("");
  const [acompMed, setAcompMed] = React.useState("");
  const [localAcp, setLocalAcp] = React.useState("");
  const [freqAcp, setFreqAcp] = React.useState("");

  const handleChangeFatorRh = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFatorRh(event.target.value);
  };

  const handleChangeNecEsp = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNecEsp(event.target.value);
  };
  const handleChangeProbSaude = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProbSaude(event.target.value);
  };
  const handleChangeAlergia = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAlergia(event.target.value);
  };
  const handleChangeRestAli = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRestAli(event.target.value);
  };
  const handleChangeRestMedic = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRestMedic(event.target.value);
  };
  const handleChangeAcompMed = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcompMed(event.target.value);
  };
  const handleChangeLocalAcp = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalAcp(event.target.value);
  };
  const handleChangeFreqAcp = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFreqAcp(event.target.value);
  };
  return (
    <Formik
      initialValues={{
        nome: "",
        sobrenome: "",
        sexo: "",
        dt_nasc: "",
        rg: "",
        cpf: "",
        cep: "",
        logradouro: "",
        endereco: "",
        numero: "",
        complemento: "",
        bairro: "",
        cidade: "",
        estado: "",
        telFixo: "",
        celular: "",
      }}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {({ values }) => (
        <Form className={classes.formulario}>
          <div className={classes.saude}>
            <p>Saúde</p>
            <TextField
              className={classes.fator}
              name="fator"
              label="Fator Sanguíneo"
              select
              value={fatorRh}
              onChange={handleChangeFatorRh}
            >
              {" "}
              {fatorRH.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              className={classes.neceEsp}
              name="neceEsp"
              label="Necessidades Especiais ?"
              select
              value={necEsp}
              onChange={handleChangeNecEsp}
            >
              {" "}
              {necsEspecs.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>

            <div className={classes.espaco}></div>
            <TextField
              className={classes.probSaude}
              name="probSaude"
              label="Problemas de Saúde ?"
              select
              value={probSaude}
              onChange={handleChangeProbSaude}
            >
              {" "}
              {boleano.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              className={classes.qualProb}
              name="qualProb"
              label="Qual ?"
            />

            <TextField
              className={classes.alergia}
              name="alergia"
              label="Alergia ?"
              select
              value={alergia}
              onChange={handleChangeAlergia}
            >
              {" "}
              {boleano.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              className={classes.qualAler}
              name="qualAler"
              label="Qual ?"
            />
            <TextField
              className={classes.restricaoAlimentar}
              name="restricaoAlimentar"
              label="Restrição Alimentar ?"
              select
              value={restAli}
              onChange={handleChangeRestAli}
            >
              {" "}
              {boleano.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              className={classes.qualRestrAli}
              name="qualRestrAli"
              label="Qual ?"
            />

            <TextField
              className={classes.restricaoMed}
              name="restricaoMed"
              label="Restrição a Medicação ?"
              select
              value={restMedic}
              onChange={handleChangeRestMedic}
            >
              {" "}
              {boleano.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              className={classes.qualRestrMed}
              name="qualRestrMed"
              label="Qual ?"
            />
            <TextField
              className={classes.acompMedico}
              name="acompMedico"
              label="Acompanhamento Medico ?"
              select
              value={acompMed}
              onChange={handleChangeAcompMed}
            >
              {" "}
              {boleano.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
            <TextField className={classes.quem} name="quem" label="Quem ?" />

            <TextField
              className={classes.enfermidade}
              name="enfermidade"
              label="Enfermidade"
            />
            <TextField
              className={classes.local}
              name="local"
              label="Local de Acompanhamento"
              select
              value={localAcp}
              onChange={handleChangeLocalAcp}
            >
              {" "}
              {localAcomp.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              className={classes.frequenca}
              name="frequencia"
              label="Frequencia do Acompanhamento"
              select
              value={freqAcp}
              onChange={handleChangeFreqAcp}
            >
              {" "}
              {freqAcomp.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          </div>
          {/* <Button className={classes.salvar} type="submit">Salvar</Button> */}
          <Button type="submit" variant="outlined" color="primary">
            {" "}
            Salvar{" "}
          </Button>
          {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}{" "}
        </Form>
      )}
    </Formik>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formulario: {
      marginTop: "-20%",
    },
    saude: {
      marginTop: "-2%",
    },
    fator: {
      width: "18%",
    },
    neceEsp: { marginLeft: "2%", width: "28%" },

    probSaude: {
      width: "24%",
    },
    qualProb: {
      width: "60%",
      marginLeft: "3%",
    },
    alergia: {
      width: "15%",
      marginTop: "3%",
    },
    qualAler: {
      width: "60%",
      marginTop: "3%",
      marginLeft: "12%",
    },
    restricaoAlimentar: {
      width: "25%",
      marginTop: "3%",
    },
    qualRestrAli: {
      width: "60%",
      marginTop: "3%",
      marginLeft: "2%",
    },
    restricaoMed: {
      width: "26%",
      marginTop: "3%",
    },
    qualRestrMed: {
      width: "60%",
      marginTop: "3%",
      marginLeft: "1%",
    },
    acompMedico: {
      width: "30%",
      marginTop: "3%",
    },
    quem: {
      width: "55%",
      marginTop: "3%",
      marginLeft: "2%",
    },
    enfermidade: {
      width: "80%",
      marginTop: "3%",
    },
    local: {
      width: "30%",
      marginTop: "3%",
    },
    frequenca: {
      width: "35%",
      marginTop: "3%",
      marginLeft: "2%",
    },
    espaco: {
      marginLeft: "5%",
      marginTop: "3%",
    },
  })
);
