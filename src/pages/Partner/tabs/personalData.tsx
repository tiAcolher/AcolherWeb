import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
} from "@material-ui/core";

import { Locations } from "../../../location";
import FederatedForm from "../components/federatedForm";
import ReactInputMask from "react-input-mask";
import {
  escolaridade as escolaridadeArray,
  series,
  turnos,
} from "../../../constants";
import {
  select,
  selectParticipant,
} from "../../../reducers/participantReducer";
import { Participant } from "../../../model/Participant";

export const DadosPessoais = () => {
  const classes = useStyles();
  const participante: Partial<Participant> = useSelector(selectParticipant);

  const [isFederated, setFederated] = useState(false);
  const [uf, setUf] = useState(participante?.estado || "AC");
  const [cidade, setCidade] = useState(participante?.cidade || "Acrelândia");
  const [escolaridade, setEscolaridade] = useState(
    participante?.escolaridade || ""
  );
  const [turno, setTurno] = useState(participante?.turno || "");
  const [serie, setSerie] = useState(participante?.serie || "");
  const [nomeCompleto, setNomeCompleto] = useState(
    participante?.nomeCompleto || ""
  );
  const [genero, setGenero] = useState(participante?.genero || "");
  const [dtNascimento, setDtNascimento] = useState("" || "");
  const [email, setEmail] = useState(participante?.email || "");
  const [rg, setRg] = useState(participante?.rg || "");
  const [cpf, setCpf] = useState(participante?.cpf || "");
  const [logradouro, setLogradouro] = useState(participante?.logradouro || "");
  const [numero, setNumero] = useState(participante?.numeroEndereco || "");
  const [complemento, setComplemento] = useState(
    participante?.complemento || ""
  );
  const [cep, setCep] = useState(participante?.cep || "");
  const [bairro, setBairro] = useState("" || "");
  const [telFixo, setTelFixo] = useState(participante?.telefone || "");
  const [celular, setCelular] = useState(participante?.celular || "");
  const [escola, setEscola] = useState(participante?.escola || "");
  const [clube, setClube] = useState(participante?.clube || "");
  const [modalidade, setModalidade] = useState(participante?.modalidade || "");
  const [dataInicio, setDataInicio] = useState(
    participante?.dataInicioFederado || ""
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      select({
        ...participante,
        nomeCompleto,
        serie,
        rg,
      })
    );
  }, [nomeCompleto, serie, rg]);

  return (
    <div className={classes.container}>
      <p>Dados Pessoais</p>
      <div className={classes.form}>
        <TextField
          className={classes.input}
          label="Nome Completo"
          value={nomeCompleto}
          onChange={(event: any) => {
            setNomeCompleto(event.target.value);
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
          value={rg}
          onChange={(event: any) => {
            setRg(event.target.value);
          }}
        />
        <ReactInputMask
          mask="999.999.999-99"
          onChange={(event: any) => {
            setCpf(event.target.value);
          }}
          value={cpf}
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
            clube={clube}
            modalidade={modalidade}
            dataInicio={dataInicio}
            setClube={setClube}
            setModalidade={setModalidade}
            setDataInicio={setDataInicio}
          />
        )}
        <p>Endereço</p>
        <TextField
          className={classes.input}
          label="Logradouro"
          value={logradouro}
          onChange={(event: any) => {
            setLogradouro(event.target.value);
          }}
        />
        <TextField
          className={classes.input}
          label="Número"
          value={numero}
          type="number"
          onChange={(event: any) => {
            setNumero(event.target.value);
          }}
        />
        <TextField
          className={classes.input}
          label="Complemento"
          value={complemento}
          onChange={(event: any) => {
            setComplemento(event.target.value);
          }}
        />
        <ReactInputMask
          mask="99999-999"
          value={cep}
          onChange={(event: any) => {
            setCep(event.target.value);
          }}
        >
          {() => <TextField className={classes.input} label="CEP" />}
        </ReactInputMask>
        <TextField
          label="Bairro"
          className={classes.input}
          value={bairro}
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
          value={telFixo}
          onChange={(event: any) => {
            setTelFixo(event.target.value);
          }}
        >
          {() => <TextField className={classes.input} label="Telefone Fixo" />}
        </ReactInputMask>
        <ReactInputMask
          mask="(99) 9 9999-9999"
          value={celular}
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
          value={email}
          className={classes.input}
          label="Email"
        />
        <p>Dados Escolares</p>
        <TextField
          className={classes.input}
          label="Nome da Escola"
          value={escola}
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
