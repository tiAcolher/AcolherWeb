import {
  Button,
  createStyles,
  makeStyles,
  MenuItem,
  Theme,
} from "@material-ui/core";
import { Form, Formik } from "formik";
import * as React from "react";
import { TextField } from "@material-ui/core";
import { boleano,paisVivos,registroDeGuarda } from "../jsons";

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

export const RespFamilia: React.FC<Props> = ({ onSubmit }) => {
  const classes = useStyles();
  const [paisSep, setPaisSep] = React.useState("");
  const [PaisVivos, setPaisVivos] = React.useState("");
  const [pensao, setPensao] = React.useState("");
  const [Registro, setRegistro] = React.useState("");
  const handleChangePaisSep = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaisSep(event.target.value);
  };
  const handleChangePaisVivos = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPaisVivos(event.target.value);
  };
  const handleChangePensao = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPensao(event.target.value);
  };
    const handleChangeRegistro = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegistro(event.target.value);
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
          <p>Filiação e Responsável Legal</p>
          <div className={classes.respFamilia}>
            <TextField className={classes.mae} name="mae" label="Mãe" />
            <div className={classes.espaco}></div>
            <TextField
              className={classes.dt_nascMae}
              name="dt_nascMae"
              label="Data de Nascimento"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              className={classes.profissaoMae}
              name="profissaoMae"
              label="Profissão"
            />
            <div className={classes.espaco}></div>
            <TextField className={classes.pai} name="pai" label="Pai" />
            <div className={classes.espaco}></div>
            <TextField
              className={classes.dt_nascPai}
              name="dt_nascPai"
              label="Data de Nascimento"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              className={classes.profissaoPai}
              name="profissaoPai"
              label="Profissão"
            />
            <div className={classes.espaco}></div>
            <TextField
              className={classes.paisSeparados}
              name="paisSeparados"
              label="Pais Separados ?"
              select
              value={paisSep}
              onChange={handleChangePaisSep}
            >
              {" "}
              {boleano.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              className={classes.paisVivos}
              name="paisVivos"
              label="Pais Vivos ?"
              select
              value={PaisVivos}
              onChange={handleChangePaisVivos}
            >
              {" "}
              {paisVivos.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              className={classes.recebePensao}
              name="recebePensao"
              label="Criança Recebe Pensão ?"
              select
              value={pensao}
              onChange={handleChangePensao}
            >
              {" "}
              {boleano.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
            <div className={classes.espaco}></div>
            <TextField
              className={classes.justificativa}
              name="justificativa"
              label="Justificativa"
            />
            
            <TextField
              className={classes.respLegal}
              name="respLegal"
              label="Responsável Legal"
            />
            <div className={classes.espaco}></div>
            <TextField
              className={classes.dt_nascResp}
              name="dt_nascResp"
              label="Data de Nascimento"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              className={classes.grauParentesco}
              name="grauParentesco"
              label="Grau de Parentesco"
            />

            <TextField
              className={classes.registroGuarda}
              name="registroGuarda"
              label="Registro de Guarda"
                          select
              value={Registro}
              onChange={handleChangeRegistro}
            >
              {" "}
              {registroDeGuarda.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <p>Dados da Família</p>
          <div className={classes.dadosFamilia}>
            <TextField
              className={classes.NumPessoas}
              name="NumPessoas"
              label="Número de Pessoas na Família"
              type="number"
            />
            <TextField className={classes.nomes} name="nomes" label="Nome" />
            <div className={classes.espaco}></div>
            <TextField
              className={classes.parentesco}
              name="parentesco"
              label="Parentesco"
            />
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
    respFamilia: {
      marginTop: "-2%",
      marginBottom: "5%",
    },
    mae: {
      width: "80%",
    },
    dt_nascMae: { marginTop: "3%", width:"17%" },
    profissaoMae: {
      marginLeft: "2%",
      marginTop: "3%",
    },
    espaco: {
      marginLeft: "5%",
    },
    pai: {
      width: "80%",
      marginTop: "3%",
    },
    dt_nascPai: { marginTop: "3%",width:"17%" },
    profissaoPai: {
      marginLeft: "2%",
      marginTop: "3%",
    },

    paisSeparados: {
      width: "23%",
      marginTop: "3%",
    },
    paisVivos: {
      marginLeft: "2%",
      width: "18%",
      marginTop: "3%",
    },
    recebePensao: {
      marginLeft: "2%",
      width: "35%",
      marginTop: "3%",
    },
    justificativa: {
      width: "70%",
      marginTop: "3%",
    },
    respLegal: {
      width: "80%",
      marginTop: "3%",
    },
    dt_nascResp: {
      marginTop: "3%",
      width:"17%"
    },
    grauParentesco: {
      width: "30%",
      marginLeft: "2%",
      marginTop: "3%",
    },
    registroGuarda: {
      marginLeft: "2%",
      width: "30%",
      marginTop: "3%",
    },
    dadosFamilia: {
      marginTop: "-2%",
      marginBottom: "5%",
    },
    NumPessoas: {
      width: "45%",
    },
    nomes: {
      width: "80%",
      marginTop: "3%",
    },
    parentesco: {
      marginBottom: "5%",
      marginTop: "3%",
    },
  })
);
