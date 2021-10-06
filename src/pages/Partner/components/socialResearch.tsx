import {
  Button,
  createStyles,
  makeStyles,
  MenuItem,
  Theme,
} from "@material-ui/core";
import { Form, Formik } from "formik";
import * as React from "react";
import { boleano, chefeFamilia, domicilio } from "../../jsons";
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

export const PesquisaSocial: React.FC<Props> = ({ onSubmit }) => {
  const classes = useStyles();
  const [eltrecidade, seteltrecidade] = React.useState("");
  const [esgoto, setesgoto] = React.useState("");
  const [asfalto, setasfalto] = React.useState("");
  const [encanamento, setencanamento] = React.useState("");
  const [servicos, setservicos] = React.useState("");
  const [bolsaAtu, setbolsaAtu] = React.useState("");
  const [bolsaPas, setbolsaPas] = React.useState("");
  const [trabAdolesc, setTrabAdolesc] = React.useState("");
  const [beneficio, setbeneficio] = React.useState("");
  const [pesDefi, setpesDefi] = React.useState("");
  const [internet, setinternet] = React.useState("");
  const [computador, setcomputador] = React.useState("");
  const [criAdoCel, setcriAdoCel] = React.useState("");
  const [criAdoInt, setcriAdoInt] = React.useState("");
  const [sitDomi, setsitDomi] = React.useState("");
  const [chefeFami, setchefeFami] = React.useState("");

  const handleChangeeltrecidade = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    seteltrecidade(event.target.value);
  };
  const handleChangeesgoto = (event: React.ChangeEvent<HTMLInputElement>) => {
    setesgoto(event.target.value);
  };
  const handleChangeasfalto = (event: React.ChangeEvent<HTMLInputElement>) => {
    setasfalto(event.target.value);
  };
  const handleChangeencanamento = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setencanamento(event.target.value);
  };
  const handleChangeservicos = (event: React.ChangeEvent<HTMLInputElement>) => {
    setservicos(event.target.value);
  };
  const handleChangebolsaAtu = (event: React.ChangeEvent<HTMLInputElement>) => {
    setbolsaAtu(event.target.value);
  };
  const handleChangebolsaPas = (event: React.ChangeEvent<HTMLInputElement>) => {
    setbolsaPas(event.target.value);
  };
  const handleChangetrabAdolesc = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTrabAdolesc(event.target.value);
  };

  const handleChangebeneficio = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setbeneficio(event.target.value);
  };

  const handleChangepesDefi = (event: React.ChangeEvent<HTMLInputElement>) => {
    setpesDefi(event.target.value);
  };
  const handleChangeinternet = (event: React.ChangeEvent<HTMLInputElement>) => {
    setinternet(event.target.value);
  };
  const handleChangecomputador = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setcomputador(event.target.value);
  };
  const handleChangecriAdoCel = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setcriAdoCel(event.target.value);
  };
  const handleChangecriAdoInt = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setcriAdoInt(event.target.value);
  };
  const handleChangesitDomi = (event: React.ChangeEvent<HTMLInputElement>) => {
    setsitDomi(event.target.value);
  };
  const handleChangechefeFami = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setchefeFami(event.target.value);
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
          <p>Pesquisa Social</p>
          <div className={classes.pesqSoc}>
            <TextField
              className={classes.moradia}
              name="moradia"
              label="Situação do Domicilio de Moradia"
              select
              value={sitDomi}
              onChange={handleChangesitDomi}
            >
              {" "}
              {domicilio.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
            <div className={classes.espaco}></div>
            <TextField
              className={classes.redeEletrica}
              name="redeEletrica"
              label="Rede Elétrica ?"
              select
              value={eltrecidade}
              onChange={handleChangeeltrecidade}
            >
              {" "}
              {boleano.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              className={classes.redeEsgoto}
              name="redeEsgoto"
              label="Rede de Esgoto ?"
              select
              value={esgoto}
              onChange={handleChangeesgoto}
            >
              {" "}
              {boleano.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              className={classes.ruaAsfaltada}
              name="ruaAsfaltada"
              label="Rua Asfaltada ?"
              select
              value={asfalto}
              onChange={handleChangeasfalto}
            >
              {" "}
              {boleano.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              className={classes.aguaEnc}
              name="aguaEnc"
              label="Água Encanada ?"
              select
              value={encanamento}
              onChange={handleChangeencanamento}
            >
              {" "}
              {boleano.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              className={classes.redeServ}
              name="redeServ"
              label="Rede de Serviços ?"
              select
              value={servicos}
              onChange={handleChangeservicos}
            >
              {" "}
              {boleano.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              className={classes.expTrbAdo}
              name="expTrbAdo"
              label="Experiência de Trabalho Adolescente ?"
              select
              value={trabAdolesc}
              onChange={handleChangetrabAdolesc}
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
              className={classes.bolsaFamiliaAtu}
              name="bolsaFamiliaAtu"
              label="Possui Bolsa Família Atualmente ?"
              select
              value={bolsaAtu}
              onChange={handleChangebolsaAtu}
            >
              {" "}
              {boleano.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              className={classes.bolsaFamiliaPas}
              name="bolsaFamiliaPas"
              label="Já possuiu Bolsa Família ?"
              select
              value={bolsaPas}
              onChange={handleChangebolsaPas}
            >
              {" "}
              {boleano.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              className={classes.outroBen}
              name="outroBen"
              label="Possui Outro Benefício ?"
              select
              value={beneficio}
              onChange={handleChangebeneficio}
            >
              {" "}
              {boleano.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              className={classes.chefeFam}
              name="chefeFam"
              label="Chefe da Familia"
              select
              value={chefeFami}
              onChange={handleChangechefeFami}
            >
              {" "}
              {chefeFamilia.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
            <div className={classes.espaco}></div>
            <TextField
              className={classes.pessoasDef}
              name="pessoasDef"
              label="Pessoas com deficiência"
              select
              value={pesDefi}
              onChange={handleChangepesDefi}
            >
              {" "}
              {boleano.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              className={classes.menores}
              name="menores"
              label="Menores de Idade"
              type="number"
            />
            <TextField
              className={classes.ApoPens}
              name="ApoPens"
              label="Aposentados/Pensionistas"
              type="number"
            />
            <TextField
              className={classes.internet}
              name="internet"
              label="Possui Internet Banda Larga ?"
              select
              value={internet}
              onChange={handleChangeinternet}
            >
              {" "}
              {boleano.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              className={classes.computador}
              name="computador"
              label="Possui Computador ?"
              select
              value={computador}
              onChange={handleChangecomputador}
            >
              {" "}
              {boleano.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              className={classes.celCriAdo}
              name="celCriAdo"
              label="Criança/Adolescente com Celular ?"
              select
              value={criAdoCel}
              onChange={handleChangecriAdoCel}
            >
              {" "}
              {boleano.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              className={classes.intCriAdo}
              name="intCriAdo"
              label="Criança/Adolescente com Internet Móvel ?"
              select
              value={criAdoInt}
              onChange={handleChangecriAdoInt}
            >
              {" "}
              {boleano.map((option) => (
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
    pesqSoc: {
      marginTop: "-2%",
      marginBottom: "5%",
    },
    computador: {
      width: "23%",
      marginLeft: "2%",
      marginTop: "3%",
    },
    moradia: {
      width: "35%",
    },
    redeEletrica: {
      width: "17%",
      marginTop: "3%",
    },
    redeEsgoto: {
      marginLeft: "2%",
      width: "20%",
      marginTop: "3%",
    },
    ruaAsfaltada: {
      width: "17.5%",
      marginLeft: "2%",
      marginTop: "3%",
    },
    aguaEnc: {
      marginLeft: "2%",
      width: "19%",
      marginTop: "3%",
    },
    redeServ: {
      width: "21%",

      marginTop: "3%",
    },
    expTrbAdo: {
      width: "40%",
      marginTop: "3%",
      marginLeft: "2%",
    },
    bolsaFamiliaAtu: {
      width: "35%",
      marginTop: "3%",
    },
    bolsaFamiliaPas: {
      width: "28%",
      marginLeft: "2%",
      marginTop: "3%",
    },
    outroBen: {
      width: "26%",
      marginLeft: "2%",
      marginTop: "3%",
    },
    chefeFam: {
      width: "20%",
      marginTop: "3%",
    },
    pessoasDef: {
      width: "26%",
      marginTop: "3%",
    },
    menores: {
      width: "21%",
      marginLeft: "2%",
      marginTop: "3%",
    },
    ApoPens: {
      width: "25%",
      marginLeft: "2%",
      marginTop: "3%",
    },
    internet: {
      width: "31%",
      marginTop: "3%",
    },
    celCriAdo: {
      width: "36%",
      marginLeft: "2%",
      marginTop: "3%",
    },
    intCriAdo: {
      width: "42%",
      marginTop: "3%",
    },
    espaco: {
      marginLeft: "5%",
    },
  })
);
