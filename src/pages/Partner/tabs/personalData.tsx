import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  setParticipantToStore,
  selectParticipant,
} from "../../../reducers/participantReducer";
import {
  setAddressToStore,
  selectAddress,
} from "../../../reducers/addressReducer";
import { Participant } from "../../../model/Participant";
import { Address } from "../../../model/Address";

import {
  selectContact,
  setContactToStore,
} from "../../../reducers/contactReducer";
import { Contact } from "../../../model/Contact";
import { DatePicker } from "@material-ui/pickers";
import moment from "moment";
import { DATE_FORMAT, escolaridade, series, turnos } from "../../../constants";
import {
  selectSchoolData,
  setSchoolDataToStore,
} from "../../../reducers/schoolDataReducer";
import { SchoolData } from "../../../model/SchoolData";

export const DadosPessoais = () => {
  const classes = useStyles();

  const participante: Partial<Participant> = useSelector(selectParticipant);
  const endereco: Partial<Address> = useSelector(selectAddress);
  const contato: Partial<Contact> = useSelector(selectContact);
  const schoolData: Partial<SchoolData> = useSelector(selectSchoolData);

  const [participanteLocal, setParticipanteLocal] = useState(participante);
  const [enderecoLocal, setEnderecoLocal] = useState(endereco);
  const [contatoLocal, setContatoLocal] = useState(contato);
  const [schoolDataLocal, setSchoolDataLocal] = useState(schoolData);
  const [cidades, setCidades] = useState(Locations.estados[0].cidades);

  const [dtNascimento, setDtNascimento] = useState(
    moment(participanteLocal?.dtNascimento || new Date())
  );

  const dispatch = useDispatch();

  useEffect(() => {
    setParticipanteLocal({
      ...participanteLocal,
      dtNascimento: dtNascimento.format(DATE_FORMAT),
    });
  }, [dtNascimento]);

  useEffect(() => {
    dispatch(setParticipantToStore(participanteLocal));
  }, [participanteLocal]);

  useEffect(() => {
    if (enderecoLocal?.Logradouro) {
      dispatch(setAddressToStore(enderecoLocal));
    }
  }, [enderecoLocal]);

  useEffect(() => {
    if (contatoLocal?.id) {
      dispatch(setContactToStore(contatoLocal));
    }
  }, [contatoLocal]);

  useEffect(() => {
    if (enderecoLocal?.Estado) {
      setCidades(
        Locations.estados.filter(
          (estado) => estado.sigla === enderecoLocal?.Estado
        )[0].cidades
      );
    } else if (endereco?.Estado) {
      setCidades(
        Locations.estados.filter(
          (estado) => estado.sigla === endereco?.Estado
        )[0].cidades
      );
    }
  }, [enderecoLocal, endereco]);

  useEffect(() => {
    if (participanteLocal?.id) {
      dispatch(
        setSchoolDataToStore({
          ...schoolDataLocal,
          idParticipante: participanteLocal.id,
        })
      );
    }
  }, [schoolDataLocal]);

  return (
    <div className={classes.container}>
      <p>Dados Pessoais</p>
      <div className={classes.form}>
        <TextField
          className={classes.input}
          label="Nome Completo"
          value={participanteLocal?.nomeCompleto}
          onChange={(event: any) => {
            setParticipanteLocal({
              ...participanteLocal,
              nomeCompleto: event.target.value,
            });
          }}
        />
        <FormLabel className={classes.label} component="legend">
          Gênero
        </FormLabel>
        <RadioGroup value={participanteLocal?.genero} row>
          <FormControlLabel
            value="f"
            control={
              <Radio
                onClick={() =>
                  setParticipanteLocal({ ...participanteLocal, genero: "f" })
                }
              />
            }
            label="Feminino"
          />
          <FormControlLabel
            value="m"
            control={
              <Radio
                onClick={() =>
                  setParticipanteLocal({ ...participanteLocal, genero: "m" })
                }
              />
            }
            label="Masculino"
          />
          <FormControlLabel
            value="o"
            control={
              <Radio
                onClick={() =>
                  setParticipanteLocal({ ...participanteLocal, genero: "o" })
                }
              />
            }
            label="Outro"
          />
        </RadioGroup>
        <DatePicker
          className={classes.input}
          clearable
          value={dtNascimento}
          onChange={setDtNascimento}
          placeholder="Data de nascimento"
          maxDate={new Date()}
          format={DATE_FORMAT}
        />
        <TextField
          className={classes.input}
          label="RG"
          value={participanteLocal?.rg}
          onChange={(event: any) => {
            setParticipanteLocal({
              ...participanteLocal,
              rg: event.target.value,
            });
          }}
        />
        <ReactInputMask
          mask="999.999.999-99"
          onChange={(event: any) => {
            setParticipanteLocal({
              ...participanteLocal,
              cpf: event.target.value,
            });
          }}
          value={participanteLocal?.cpf}
        >
          {() => (
            <TextField className={classes.input} label="CPF" type="text" />
          )}
        </ReactInputMask>
        <FormControlLabel
          control={
            <Checkbox
              onChange={(event) => {
                setParticipanteLocal({
                  ...participanteLocal,
                  federado: event.target.checked,
                });
              }}
            />
          }
          checked={participanteLocal.federado}
          label="Atleta Federado"
        />
        {participanteLocal.federado && (
          <FederatedForm
            titulo="Dados Federado"
            participanteLocal={participanteLocal}
            setParticipanteLocal={setParticipanteLocal}
          />
        )}
        <p>Endereço</p>
        <TextField
          className={classes.input}
          label="Logradouro"
          value={endereco?.Logradouro}
          onChange={(event: any) => {
            setEnderecoLocal({
              ...enderecoLocal,
              Logradouro: event.target.value,
            });
          }}
        />
        <TextField
          className={classes.input}
          label="Número"
          value={endereco?.Numero}
          type="number"
          onChange={(event: any) => {
            setEnderecoLocal({ ...enderecoLocal, Numero: event.target.value });
          }}
        />
        <TextField
          className={classes.input}
          label="Complemento"
          value={endereco?.Complemento}
          onChange={(event: any) => {
            setEnderecoLocal({
              ...enderecoLocal,
              Complemento: event.target.value,
            });
          }}
        />
        <ReactInputMask
          mask="99999-999"
          value={endereco?.CEP}
          onChange={(event: any) => {
            setEnderecoLocal({ ...enderecoLocal, CEP: event.target.value });
          }}
        >
          {() => <TextField className={classes.input} label="CEP" />}
        </ReactInputMask>
        <TextField
          label="Bairro"
          className={classes.input}
          value={endereco?.Bairro}
          onChange={(event: any) => {
            setEnderecoLocal({ ...enderecoLocal, Bairro: event.target.value });
          }}
        />
        <FormLabel className={classes.label}>Estado</FormLabel>
        <Select
          value={endereco?.Estado}
          onChange={(event: any) => {
            setEnderecoLocal({ ...enderecoLocal, Estado: event.target.value });
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
          value={endereco?.Cidade}
          onChange={(event: any) => {
            setEnderecoLocal({
              ...enderecoLocal,
              Cidade: event.target.value,
            });
          }}
        >
          {cidades.map((item) => (
            <MenuItem value={item} key={item}>
              {item}
            </MenuItem>
          ))}
        </Select>

        <p>Contatos</p>
        <ReactInputMask
          mask="(99) 9999-9999"
          value={contato?.TelefoneFixo}
          onChange={(event: any) => {
            setContatoLocal({
              ...contatoLocal,
              TelefoneFixo: event.target.value,
            });
          }}
        >
          {() => <TextField className={classes.input} label="Telefone Fixo" />}
        </ReactInputMask>
        <ReactInputMask
          mask="(99) 9 9999-9999"
          value={contato?.Celular}
          onChange={(event: any) => {
            setContatoLocal({
              ...contatoLocal,
              Celular: event.target.value,
            });
          }}
        >
          {() => <TextField className={classes.input} label="Celular" />}
        </ReactInputMask>
        <TextField
          onChange={(event: any) => {
            setContatoLocal({
              ...contatoLocal,
              Email: event.target.value,
            });
          }}
          value={contato?.Email}
          className={classes.input}
          label="Email"
        />
        <p>Dados Escolares</p>
        <TextField
          className={classes.input}
          label="Nome da Escola"
          value={schoolDataLocal?.NomeEscola}
          onChange={(event: any) => {
            setSchoolDataLocal({
              ...schoolDataLocal,
              NomeEscola: event.target.value,
            });
          }}
        />
        <FormLabel className={classes.label}>Escolaridade</FormLabel>
        <Select
          className={classes.input}
          value={schoolDataLocal?.Escolaridade}
          onChange={(event: any) => {
            setSchoolDataLocal({
              ...schoolDataLocal,
              Escolaridade: event.target.value,
            });
          }}
        >
          {escolaridade.map((item) => (
            <MenuItem value={item} key={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
        <FormLabel className={classes.label}>Turno</FormLabel>
        <Select
          className={classes.input}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={schoolDataLocal?.Turno}
          onChange={(event: any) => {
            setSchoolDataLocal({
              ...schoolDataLocal,
              Turno: event.target.value,
            });
          }}
        >
          {turnos.map((item) => (
            <MenuItem value={item} key={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
        <FormLabel className={classes.label}>Série</FormLabel>
        <Select
          className={classes.input}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={schoolDataLocal?.serie}
          onChange={(event: any) => {
            setSchoolDataLocal({
              ...schoolDataLocal,
              serie: event.target.value,
            });
          }}
        >
          {series.map((item) => (
            <MenuItem value={item} key={item}>
              {item}
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
