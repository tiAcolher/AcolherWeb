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
  Checkbox,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";

import { Locations } from "../../../location";
import FederatedForm from "../components/federatedForm";
import ReactInputMask from "react-input-mask";
import {
  escolaridade as escolaridadeArray,
  series,
  turnos,
} from "../../../constants";

export const DadosPessoais = () => {
  const classes = useStyles();

  const [isFederated, setFederated] = useState(false);
  const [uf, setUf] = useState("AC");
  const [cidade, setCidade] = useState("Acrelândia");
  const [escolaridade, setEscolaridade] = useState();
  const [turno, setTurno] = useState("");
  const [serie, setSerie] = useState("");
  const [nome, setNome] = useState("");
  const [genero, setGenero] = useState("f");
  const [dtNascimento, setDtNascimento] = useState("");
  const [email, setEmail] = useState("");
  const [rg, setRg] = useState("");
  const [cpf, setCpf] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [cep, setCep] = useState("");
  const [bairro, setBairro] = useState("");
  const [telFixo, setTelFixo] = useState("");
  const [celular, setCelular] = useState("");
  const [escola, setEscola] = useState("");
  const [clube, setClube] = useState("");
  const [modalidade, setModalidade] = useState("");
  const [dtInicio, setDtInicio] = useState("");

  const handleSubmit = () => {
    console.log(
      JSON.stringify({
        nome,
        genero,
        dtNascimento,
        rg,
        cpf,
        isFederated,
        clube,
        modalidade,
        dtInicio,
        logradouro,
        numero,
        complemento,
        cep,
        bairro,
        uf,
        cidade,
        telFixo,
        celular,
        email,
        escola,
        escolaridade,
        turno,
        serie,
      })
    );
  };

  return (
    <div className={classes.container}>
      <p>Dados Pessoais</p>
      <div className={classes.form}>
        <TextField
          className={classes.input}
          label="Nome Completo"
          onChange={(event: any) => {
            setNome(event.target.value);
          }}
        />
        <FormLabel className={classes.label} component="legend">
          Gênero
        </FormLabel>
        <RadioGroup value={genero} row>
          <FormControlLabel
            value="f"
            control={<Radio onClick={() => setGenero("f")} />}
            label="Feminino"
          />
          <FormControlLabel
            value="m"
            control={<Radio onClick={() => setGenero("m")} />}
            label="Masculino"
          />
          <FormControlLabel
            value="o"
            control={<Radio onClick={() => setGenero("o")} />}
            label="Outro"
          />
        </RadioGroup>
        <TextField
          type="date"
          label="Data de Nascimento"
          className={classes.input}
          InputLabelProps={{ shrink: true }}
          value={dtNascimento}
          onChange={(event: any) => {
            setDtNascimento(event.target.value);
          }}
        />
        <TextField
          className={classes.input}
          label="RG"
          onChange={(event: any) => {
            setRg(event.target.value);
          }}
        />
        <ReactInputMask
          mask="999.999.999-99"
          onChange={(event: any) => {
            setCpf(event.target.value);
          }}
        >
          {() => (
            <TextField className={classes.input} label="CPF" type="text" />
          )}
        </ReactInputMask>
        <FormControlLabel
          control={
            <Checkbox
              checked={isFederated}
              onClick={() => setFederated(!isFederated)}
            />
          }
          label="Atleta Federado"
        />
        {isFederated && (
          <FederatedForm
            titulo="Dados Federado"
            setClube={setClube}
            setModalidade={setModalidade}
            setDtInicio={setDtInicio}
          />
        )}
        <p>Endereço</p>
        <TextField
          className={classes.input}
          label="Logradouro"
          onChange={(event: any) => {
            setLogradouro(event.target.value);
          }}
        />
        <TextField
          className={classes.input}
          label="Número"
          type="number"
          onChange={(event: any) => {
            setNumero(event.target.value);
          }}
        />
        <TextField
          className={classes.input}
          label="Complemento"
          onChange={(event: any) => {
            setComplemento(event.target.value);
          }}
        />
        <ReactInputMask mask="99999-999"
         onChange={(event: any) => {
                setCep(event.target.value);
              }}
        >
          {() => (
            <TextField
              className={classes.input}
              label="CEP"             
            />
          )}
        </ReactInputMask>
        <TextField
          label="Bairro"
          className={classes.input}
          onChange={(event: any) => {
            setBairro(event.target.value);
          }}
        />
        <FormLabel className={classes.label}>Estado</FormLabel>
        <Select
          value={uf}
          onChange={(event: any) => {
            setUf(event.target.value);
          }}
          className={classes.input}
        >
          {Locations.estados.map((item) => (
            <MenuItem value={item.sigla} key={item.sigla}>
              {item.nome}
            </MenuItem>
          ))}
        </Select>
        <FormLabel className={classes.label}>Cidade</FormLabel>
        <Select
          className={classes.input}
          value={cidade}
          onChange={(event: any) => {
            setCidade(event.target.value);
          }}
        >
          {Locations.estados
            .filter((estado) => estado.sigla === uf)[0]
            .cidades.map((item) => (
              <MenuItem value={item} key={item}>
                {item}
              </MenuItem>
            ))}
        </Select>
        <p>Contatos</p>
        <ReactInputMask
          mask="(99) 9999-9999"
          onChange={(event: any) => {
            setTelFixo(event.target.value);
          }}
        >
          {() => <TextField className={classes.input} label="Telefone Fixo" />}
        </ReactInputMask>
        <ReactInputMask
          mask="(99) 9 9999-9999"
          onChange={(event: any) => {
            setCelular(event.target.value);
          }}
        >
          {() => <TextField className={classes.input} label="Celular" />}
        </ReactInputMask>
        <TextField
          onChange={(event: any) => {
            setEmail(event.target.value);
          }}
          className={classes.input}
          label="Email"
        />
        <p>Dados Escolares</p>
        <TextField
          className={classes.input}
          label="Nome da Escola"
          onChange={(event: any) => {
            setEscola(event.target.value);
          }}
        />
        <FormLabel className={classes.label}>Escolaridade</FormLabel>
        <Select
          className={classes.input}
          value={escolaridade}
          onChange={(event: any) => {
            setEscolaridade(event.target.value);
          }}
        >
          {escolaridadeArray.map((item) => (
            <MenuItem value={item.value} key={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
        <FormLabel className={classes.label}>Turno</FormLabel>
        <Select
          className={classes.input}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={turno}
          onChange={(event: any) => {
            setTurno(event.target.value);
          }}
        >
          {turnos.map((item) => (
            <MenuItem value={item.value} key={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
        <FormLabel className={classes.label}>Série</FormLabel>
        <Select
          className={classes.input}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={serie}
          onChange={(event: any) => {
            setSerie(event.target.value);
          }}
        >
          {series.map((item) => (
            <MenuItem value={item.value} key={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
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
