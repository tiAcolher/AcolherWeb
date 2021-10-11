import {
  Button,
  createStyles,
  makeStyles,
  MenuItem,
  Theme,
} from "@material-ui/core";
import { Form, Formik } from "formik";
import * as React from "react";
import { TextField,FormControlLabel,Checkbox } from "@material-ui/core";
import InputMask from "react-input-mask";
import {
  estados,
  genero,
  escolaridade,
  turnos,
  series,
  situacoes,
  locomocao,
} from "../../jsons";

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


export const DadosPessoais: React.FC<Props> = ({ onSubmit }) => {
  const classes = useStyles();
  const [generos, setGenero] = React.useState("");
  const [json_estado, setjson_estado] = React.useState("");
  const [escolaridades, setEscolaridades] = React.useState("");
  const [turno, setTurnos] = React.useState("");
  const [serie, setSeries] = React.useState("");
  const [situacao, setSituacao] = React.useState("");
  const [locomocoes, setLocomocao] = React.useState("");
  const handleChangeGenero = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGenero(event.target.value);
  };
  const handleChangeEstados = (event: React.ChangeEvent<HTMLInputElement>) => {
    setjson_estado(event.target.value);
  };

  const handleChangeEscol = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEscolaridades(event.target.value);
  };

  const handleChangeTurnos = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTurnos(event.target.value);
  };

  const handleChangeSeries = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSeries(event.target.value);
  };

  const handleChangeSituacoes = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSituacao(event.target.value);
  };

  const handleChangeLocomocao = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLocomocao(event.target.value);
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
          <p>Dados Pessoais</p>
          <div className={classes.dados_pessoais}>
            <TextField
              className={classes.nome}
              name="nome"
              label="Nome Completo"
            />
            <TextField
              className={classes.sexo}
              name="sexo"
              select
              label="Sexo"
              value={generos}
              onChange={handleChangeGenero}
            >
              {genero.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              name="dt_nasc"
              label="Data de Nascimento"
              type="date"
              className={classes.dt_nasc}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField className={classes.rg} name="rg" label="RG" />
            <InputMask mask="999.999.999-99">
              {() => (
                <TextField
                  className={classes.cpf}
                  label="CPF"
                  name="cpf"
                  type="text"
                />
              )}
            </InputMask>
          </div>

          <div>            
          <label >Atleta Federado :<input className={classes.federado} type="checkbox" />
            </label>
            <p>Dados Federados</p>
                        <TextField disabled
              className={classes.clube}
              name="clube"
              label="Nome do Clube"
          />
          <TextField disabled
              className={classes.modalidade}
              name="modalidade"
            label="Modalidade Esportiva"
            />
            <TextField disabled
              className={classes.inicio}
              name="dt_inicio"
              label="Data de Início"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
          
          </div>        
          
          <div className={classes.end}>
            <p>Endereço</p>
            <TextField
              className={classes.endereco}
              name="endereco"
              label="Endereço"
            />
            <TextField
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              className={classes.numero}
              name="numero"
              label="Número"
              type="number"
            />
            <TextField
              className={classes.complemento}
              name="complemento"
              label="Complemento"
            />
            <InputMask mask="99999-999">
              {() => (
                <TextField className={classes.cep} name="cep" label="CEP" />
              )}
            </InputMask>
            <TextField
              className={classes.bairro}
              name="bairro"
              label="Bairro"
            />
            <TextField
              className={classes.cidade}
              name="cidade"
              label="Cidade"
            />
            <TextField
              className={classes.estado}
              name="estado"
              select
              label="Estado (UF)"
              value={json_estado}
              onChange={handleChangeEstados}
            >
              {" "}
              {estados.map((option) => (
                <MenuItem key={option.uf} value={option.uf}>
                  {option.nome}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <p>Contatos</p>
          <div className={classes.contatos}>
            <InputMask mask="(99) 9999-9999">
              {() => (
                <TextField
                  className={classes.telFixo}
                  name="telFixo"
                  label="Telefone Fixo"
                />
              )}
            </InputMask>
            <InputMask mask="(99) 9 9999-9999">
              {() => (
                <TextField
                  className={classes.celular}
                  name="celular"
                  label="Celular"
                />
              )}
            </InputMask>
            <TextField className={classes.email}  name="email" label="Email" />
          </div>
          <p>Dados Escolares</p>
          <div className={classes.escolares}>
            <TextField
              className={classes.escola}
              name="escola"
              label="Nome da Escola"
            />
            <div className={classes.espaco}></div>
            <TextField
              className={classes.escolaridade}
              name="escolaridade"
              select
              label="Escolaridade"
              value={escolaridades}
              onChange={handleChangeEscol}
            >
              {escolaridade.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              className={classes.turno}
              name="turno"
              select
              label="Turno"
              value={turno}
              onChange={handleChangeTurnos}
            >
              {turnos.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              className={classes.serie}
              name="serie"
              select
              label="Série"
              value={serie}
              onChange={handleChangeSeries}
            >
              {series.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              className={classes.situacao}
              name="situacao"
              select
              label="Situação"
              value={situacao}
              onChange={handleChangeSituacoes}
            >
              {situacoes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField className={classes.ano} name="ano" label="Ano" />
            <div className={classes.espaco}></div>
            <TextField
              className={classes.deslocamento}
              name="deslocamento"
              select
              label="Deslocamento ao Colégio"
              value={locomocoes}
              onChange={handleChangeLocomocao}
            >
              {locomocao.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          {/* <Button className={classes.salvar} type="submit">Salvar</Button> */}
          <Button type="submit" variant="outlined" color="primary">
            {" "}
            Salvar{" "}
          </Button>
          {/* <pre>{JSON.stringify(values, null, 2)}</pre>{" "} */}
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
    dados_pessoais: {
      marginTop: "-2%",
      marginBottom: "5%",
    },
    nome: {
      alignSelf: "center",
      width: "80%",
    },
    clube: {
      marginTop: "-2%",
      alignSelf: "center",
      width: "80%",
    },
    modalidade: {
      alignSelf: "center",
      width: "80%",
    },
    inicio: {
      marginTop: "2%",
      alignSelf: "center",
      width: "25%",
    },
    sexo: {
      marginLeft: "2%",
      width: "13%",
    },
    federado: {
      marginBottom:'3%',     
    },
    dt_nasc: { marginTop: "3%", width: "20%" },
    rg: {
      marginLeft: "2%",
      marginTop: "3%",
    },
    cpf: {
      marginLeft: "2%",
      marginTop: "3%",
      width: "15%",
    },
    end: {
      marginTop: "5%",
      marginBottom: "5%",
    },
    cep: {
      marginLeft: "2%",
      width: "11%",
      marginTop: "3%",
    },
    endereco: {
      width: "80%",
    },
    numero: {
      marginLeft: "2%",
      width: "10%",
    },
    complemento: {
      marginTop: "3%",
    },
    bairro: {
      marginLeft: "2%",
      marginTop: "3%",
    },
    cidade: {
      marginLeft: "2%",
      width: "25%",
      marginTop: "3%",
    },
    estado: {
      width: "15%",
      marginTop: "3%",
    },
    contatos: {
      marginTop: "-2%",
      marginBottom: "5%",
    },
    telFixo: {
      width: "13%",
    },
    celular: {
      marginLeft: "2%",
      width: "14%",
    },
    email: {
      marginLeft: "2%",
      width: "60%",
    },
    escolares: {
      marginTop: "-2%",
      marginBottom: "5%",
    },
    escola: {
      width: "80%",
    },
    escolaridade: {
      width: "20%",
      marginTop: "3%",
    },
    turno: {
      marginLeft: "2%",
      width: "13%",
      marginTop: "3%",
    },
    serie: {
      marginLeft: "2%",
      width: "13%",
      marginTop: "3%",
    },
    situacao: {
      marginLeft: "2%",
      width: "15%",
      marginTop: "3%",
    },
    ano: {
      marginLeft: "2%",
      width: "5%",
      marginTop: "3%",
    },
    deslocamento: {
      width: "30%",
      marginTop: "3%",
    },
    espaco: {
      marginLeft: "5%",
    },
  })
);
