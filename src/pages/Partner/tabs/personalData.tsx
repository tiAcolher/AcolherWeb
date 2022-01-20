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

export const DadosPessoais = () => {
  const classes = useStyles();
  const participante: Partial<Participant> = useSelector(selectParticipant);
  const endereco: Partial<Address> = useSelector(selectAddress);
  const contato: Partial<Contact> = useSelector(selectContact);

  const [participanteLocal, setParticipanteLocal] = useState(participante);
  const [enderecoLocal, setEnderecoLocal] = useState(endereco);
  const [contatoLocal, setContatoLocal] = useState(contato);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setParticipantToStore(participanteLocal));
  }, [participanteLocal]);

  useEffect(() => {
    if (enderecoLocal.Logradouro) {
      dispatch(setAddressToStore(enderecoLocal));
    }
  }, [enderecoLocal]);

  useEffect(() => {
    if (contatoLocal.TelefoneFixo) {
      dispatch(setContactToStore(contatoLocal));
    }
  }, [contatoLocal]);

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
        <TextField
          type="date"
          label="Data de Nascimento"
          className={classes.input}
          InputLabelProps={{ shrink: true }}
          value={participanteLocal?.dtNascimento}
          onChange={(event: any) => {
            setParticipanteLocal({
              ...participanteLocal,
              dtNascimento: event.target.value,
            });
          }}
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
              checked={participanteLocal?.federado || false}
              onClick={() =>
                setParticipanteLocal({
                  ...participanteLocal,
                  federado: !participanteLocal.federado,
                })
              }
            />
          }
          label="Atleta Federado"
        />
        {participanteLocal.federado && (
          <FederatedForm
            titulo="Dados Federado"
            partipanteLocal={participanteLocal}
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
          {Locations.estados
            .filter((estado) => estado.sigla === enderecoLocal?.Estado)[0]
            .cidades.map((item) => (
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
        {/*<p>Dados Escolares</p>
        <TextField
          className={classes.input}
          label="Nome da Escola"
          value={participanteLocal.escola}
          onChange={(event: any) => {
            setParticipanteLocal({
              ...participanteLocal,
              escola: event.target.value,
            });
          }}
        />
         <FormLabel className={classes.label}>Escolaridade</FormLabel>
        <Select
          className={classes.input}
          value={participanteLocal.escolaridade}
          onChange={(event: any) => {
            setParticipanteLocal({
              ...participanteLocal,
              escolaridade: event.target.value,
            });
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
          value={participanteLocal.turno}
          onChange={(event: any) => {
            setParticipanteLocal({
              ...participanteLocal,
              turno: event.target.value,
            });
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
          value={participanteLocal.serie}
          onChange={(event: any) => {
            setParticipanteLocal({
              ...participanteLocal,
              serie: event.target.value,
            });
          }}
        >
          {series.map((item) => (
            <MenuItem value={item.value} key={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select> */}
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
