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
  const [turno, setTurno] = useState();
  const [serie, setSerie] = useState();
  const [nome, setNome] = useState("");
  const [genero, setGenero] = useState("f");
  const [dtNascimento, setDtNascimento] = useState("");
  const [email, setEmail] = useState();

  const handleSubmit = () => {
    if (Boolean(email)) {
      console.log(
        JSON.stringify({
          nome,
          serie,
          turno,
          escolaridade,
          cidade,
          uf,
          email,
          isFederated,
          genero,
          dtNascimento,
        })
      );
    } else {
      alert("Tá esquecendo alguma coisa aí gatinho...");
    }
  };

  return (
    <div className={classes.container}>
      <p>Dados Pessoais</p>
      <div className={classes.form}>
        <TextField
          className={[classes.input, classes.nome].join(" ")}
          name="nome"
          label="Nome Completo"
          onChange={(event: any) => {
            setNome(event.target.value);
          }}
        />
        <FormLabel className={classes.label} component="legend">
          Gênero
        </FormLabel>
        <RadioGroup
          aria-label="genero"
          defaultValue="f"
          value={genero}
          name="radio-buttons-group"
          row
        >
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
          name="dataNascimento"
          type="date"
          label="Data de Nascimento"
          className={classes.input}
          InputLabelProps={{ shrink: true }}
          value={dtNascimento}
          onChange={(event: any) => {
            setDtNascimento(event.target.value);
          }}
        />
        <TextField name="rg" label="RG" className={classes.input} />
        <ReactInputMask mask="999.999.999-99">
          {() => (
            <TextField
              className={classes.input}
              label="CPF"
              name="cpf"
              type="text"
            />
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
        {isFederated && <FederatedForm />}
        <p>Endereço</p>
        <TextField
          name="logradouro"
          label="Logradouro"
          className={classes.input}
        />
        <TextField
          name="numero"
          label="Número"
          type="number"
          className={classes.input}
        />
        <TextField
          name="complemento"
          label="Complemento"
          className={classes.input}
        />
        <ReactInputMask mask="99999-999">
          {() => <TextField className={classes.input} name="cep" label="CEP" />}
        </ReactInputMask>
        <TextField name="bairro" label="Bairro" className={classes.input} />
        <FormLabel className={classes.label}>Estado</FormLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
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
        <FormLabel className={classes.label}>Cidades</FormLabel>
        <Select
          className={classes.input}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
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
        <ReactInputMask mask="(99) 9999-9999">
          {() => (
            <TextField
              className={classes.input}
              name="telFixo"
              label="Telefone Fixo"
            />
          )}
        </ReactInputMask>
        <ReactInputMask mask="(99) 9 9999-9999">
          {() => (
            <TextField
              className={classes.input}
              name="celular"
              label="Celular"
            />
          )}
        </ReactInputMask>
        <TextField
          onChange={(event: any) => {
            setEmail(event.target.value);
          }}
          error={!Boolean(email)}
          required
          className={classes.input}
          name="email"
          label="Email"
        />
        <p>Dados Escolares</p>
        <TextField
          className={classes.input}
          name="escola"
          label="Nome da Escola"
        />
        <FormLabel className={classes.label}>Escolaridade</FormLabel>
        <Select
          className={classes.input}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
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

  // return (
  //   <Formik
  //     initialValues={{
  //       nome: "",
  //       sobrenome: "",
  //       sexo: "",
  //       dt_nasc: "",
  //       rg: "",
  //       cpf: "",
  //       cep: "",
  //       logradouro: "",
  //       endereco: "",
  //       numero: "",
  //       complemento: "",
  //       bairro: "",
  //       cidade: "",
  //       estado: "",
  //       telFixo: "",
  //       celular: "",
  //     }}
  //     onSubmit={(values) => {
  //       console.log("batatinha");
  //     }}
  //   >
  //     {({ values }) => (
  //
  //           <TextField
  //             name="dt_nasc"
  //             label="Data de Nascimento"
  //             type="date"
  //             className={classes.dt_nasc}
  //             InputLabelProps={{
  //               shrink: true,
  //             }}
  //           />
  //           <TextField className={classes.rg} name="rg" label="RG" />
  //           <InputMask mask="999.999.999-99">
  //             {() => (
  //               <TextField
  //                 className={classes.cpf}
  //                 label="CPF"
  //                 name="cpf"
  //                 type="text"
  //               />
  //             )}
  //           </InputMask>
  //         </div>

  //         <div>
  //           <label>
  //             Atleta Federado :
  //             <input className={classes.federado} type="checkbox" />
  //           </label>
  //           <p>Dados Federados</p>
  //           <TextField
  //             disabled
  //             className={classes.clube}
  //             name="clube"
  //             label="Nome do Clube"
  //           />
  //           <TextField
  //             disabled
  //             className={classes.modalidade}
  //             name="modalidade"
  //             label="Modalidade Esportiva"
  //           />
  //           <TextField
  //             disabled
  //             className={classes.inicio}
  //             name="dt_inicio"
  //             label="Data de Início"
  //             type="date"
  //             InputLabelProps={{
  //               shrink: true,
  //             }}
  //           />
  //         </div>

  //         <div className={classes.end}>
  //           <p>Endereço</p>
  //           <TextField
  //             className={classes.endereco}
  //             name="endereco"
  //             label="Endereço"
  //           />
  //           <TextField
  //             inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
  //             className={classes.numero}
  //             name="numero"
  //             label="Número"
  //             type="number"
  //           />
  //           <TextField
  //             className={classes.complemento}
  //             name="complemento"
  //             label="Complemento"
  //           />
  //           <InputMask mask="99999-999">
  //             {() => (
  //               <TextField className={classes.cep} name="cep" label="CEP" />
  //             )}
  //           </InputMask>
  //           <TextField
  //             className={classes.bairro}
  //             name="bairro"
  //             label="Bairro"
  //           />
  //           <TextField
  //             className={classes.cidade}
  //             name="cidade"
  //             label="Cidade"
  //           />
  //           <TextField
  //             className={classes.estado}
  //             name="estado"
  //             select
  //             label="Estado (UF)"
  //             value={json_estado}
  //             onChange={handleChangeEstados}
  //           >
  //             {" "}
  //             {estados.map((option) => (
  //               <MenuItem key={option.uf} value={option.uf}>
  //                 {option.nome}
  //               </MenuItem>
  //             ))}
  //           </TextField>
  //         </div>
  //         <p>Contatos</p>
  //         <div className={classes.contatos}>
  //           <InputMask mask="(99) 9999-9999">
  //             {() => (
  //               <TextField
  //                 className={classes.telFixo}
  //                 name="telFixo"
  //                 label="Telefone Fixo"
  //               />
  //             )}
  //           </InputMask>
  //           <InputMask mask="(99) 9 9999-9999">
  //             {() => (
  //               <TextField
  //                 className={classes.celular}
  //                 name="celular"
  //                 label="Celular"
  //               />
  //             )}
  //           </InputMask>
  //           <TextField className={classes.email} name="email" label="Email" />
  //         </div>
  //         <p>Dados Escolares</p>
  //         <div className={classes.escolares}>
  //           <TextField
  //             className={classes.escola}
  //             name="escola"
  //             label="Nome da Escola"
  //           />
  //           <div className={classes.espaco}></div>
  //           <TextField
  //             className={classes.escolaridade}
  //             name="escolaridade"
  //             select
  //             label="Escolaridade"
  //             value={escolaridades}
  //             onChange={handleChangeEscol}
  //           >
  //             {escolaridade.map((option) => (
  //               <MenuItem key={option.value} value={option.value}>
  //                 {option.label}
  //               </MenuItem>
  //             ))}
  //           </TextField>
  //           <TextField
  //             className={classes.turno}
  //             name="turno"
  //             select
  //             label="Turno"
  //             value={turno}
  //             onChange={handleChangeTurnos}
  //           >
  //             {turnos.map((option) => (
  //               <MenuItem key={option.value} value={option.value}>
  //                 {option.label}
  //               </MenuItem>
  //             ))}
  //           </TextField>
  //           <TextField
  //             className={classes.serie}
  //             name="serie"
  //             select
  //             label="Série"
  //             value={serie}
  //             onChange={handleChangeSeries}
  //           >
  //             {series.map((option) => (
  //               <MenuItem key={option.value} value={option.value}>
  //                 {option.label}
  //               </MenuItem>
  //             ))}
  //           </TextField>
  //           <TextField
  //             className={classes.situacao}
  //             name="situacao"
  //             select
  //             label="Situação"
  //             value={situacao}
  //             onChange={handleChangeSituacoes}
  //           >
  //             {situacoes.map((option) => (
  //               <MenuItem key={option.value} value={option.value}>
  //                 {option.label}
  //               </MenuItem>
  //             ))}
  //           </TextField>
  //           <TextField className={classes.ano} name="ano" label="Ano" />
  //           <div className={classes.espaco}></div>
  //           <TextField
  //             className={classes.deslocamento}
  //             name="deslocamento"
  //             select
  //             label="Deslocamento ao Colégio"
  //             value={locomocoes}
  //             onChange={handleChangeLocomocao}
  //           >
  //             {locomocao.map((option) => (
  //               <MenuItem key={option.value} value={option.value}>
  //                 {option.label}
  //               </MenuItem>
  //             ))}
  //           </TextField>
  //         </div>
  //         {/* <Button className={classes.salvar} type="submit">Salvar</Button> */}
  //         <Button type="submit" variant="outlined" color="primary">
  //           {" "}
  //           Salvar{" "}
  //         </Button>
  //         {/* <pre>{JSON.stringify(values, null, 2)}</pre>{" "} */}
  //       </Form>
  //     )}
  //   </Formik>
  // );
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
      width: "80%",
    },
    nome: {
      backgroundColor: "blue",
    },
  })
);
