import React, { useEffect, useState } from "react";
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

import { registroDeGuarda } from "../../../constants";

export const FamilyData = () => {
  const classes = useStyles();
  const [nomeDaMae, setNomeDaMae] = useState("");
  const [dataDeNascimentoDaMae, setDataDeNascimentoDaMae] = useState("");
  const [profissaoDaMae, setProfissaoDaMae] = useState("");
  const [nomeDoPai, setNomeDoPai] = useState("");
  const [dataDeNascimentoDoPai, setDataDeNascimentoDoPai] = useState("");
  const [profissaoDoPai, setProfissaoDoPai] = useState("");
  const [paisSeparados, setPaisSeparados] = useState(false);
  const [paisVivos, setPaisVivos] = useState(true);
  const [criancaRecebePensao, setCriancaRecebePensao] = useState(false);
  const [responsavelLegal, setResponsavelLegal] = useState("");
  const [dataDeNascimentoDoResponsavelLegal, setDataDeNascimentoDoResponsavelLegal] = useState("");
  const [grauDeParentesco, setGrauDeParentesco] = useState("");
  const [registroGuarda, setRegistroGuarda] = useState(false);
  const [tipoDeRegistroDeGuarda, setTipoDeRegistroDeGuarda] = useState("");
  const [numeroDePessoasNaFamilia, setNumeroDePessoasNaFamilia] = useState(0);
  const [familyMembers, setFamilyMembers] = useState<
    Partial<Array<{ nome: string; parentesco: string }>>
  >([]);

  const handleSubmit = () => {
    console.log(
      JSON.stringify({
        nomeDaMae,
        dataDeNascimentoDaMae,
        profissaoDaMae,
        nomeDoPai,
        dataDeNascimentoDoPai,
        profissaoDoPai,
        paisSeparados,
        paisVivos,
        criancaRecebePensao,
        responsavelLegal,
        dataDeNascimentoDoResponsavelLegal,
        grauDeParentesco,
        registroGuarda,
        tipoDeRegistroDeGuarda,
        numeroDePessoasNaFamilia,
        parentesco: familyMembers,
      })
    );
  };

  useEffect(() => {
    if (numeroDePessoasNaFamilia > familyMembers.length) {
      setFamilyMembers(familyMembers.concat({ nome: "", parentesco: "" }));
    } else {
      setFamilyMembers(familyMembers.slice(0, familyMembers.length - 1));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numeroDePessoasNaFamilia]);

  const showFamilyMember = () => {
    let arr = familyMembers;
    return arr.map((item) => (
      <>
        <TextField
          className={classes.input}
          label="Nome"
          onChange={(event: any) => {
            item.nome = event.target.value;
            setFamilyMembers(arr);
          }}
        />

        <TextField
          className={classes.input}
          label="Parentesco"
          onChange={(event: any) => {
            item.parentesco = event.target.value;
            setFamilyMembers(arr);
          }}
        />
      </>
    ));
  };

  useEffect(() => {
    console.log(JSON.stringify(familyMembers));
  }, [familyMembers]);

  return (
    <div className={classes.container}>
      <p>Filiação e Responsável Legal</p>
      <div className={classes.form}>
        <TextField
          className={classes.input}
          label="Nome da Mãe"
          onChange={(event: any) => {
            setNomeDaMae(event.target.value);
          }}
        />
        <TextField
          type="date"
          label="Data de Nascimento da Mãe"
          className={classes.input}
          InputLabelProps={{ shrink: true }}
          value={dataDeNascimentoDaMae}
          onChange={(event: any) => {
            setDataDeNascimentoDaMae(event.target.value);
          }}
        />
        <TextField
          className={classes.input}
          label="Profissão da Mãe"
          onChange={(event: any) => {
            setProfissaoDaMae(event.target.value);
          }}
        />
        <TextField
          className={classes.input}
          label="Nome do Pai"
          onChange={(event: any) => {
            setNomeDoPai(event.target.value);
          }}
        />
        <TextField
          type="date"
          label="Data de Nascimento da Pai"
          className={classes.input}
          InputLabelProps={{ shrink: true }}
          value={dataDeNascimentoDoPai}
          onChange={(event: any) => {
            setDataDeNascimentoDoPai(event.target.value);
          }}
        />
        <TextField
          className={classes.input}
          label="Profissão da Pai"
          onChange={(event: any) => {
            setProfissaoDoPai(event.target.value);
          }}
        />
        <FormLabel className={classes.label} component="legend">
          Pais Separados ?
        </FormLabel>
        <RadioGroup
          defaultValue="n"
          value={paisSeparados}
          name="radio-buttons-group"
          row
        >
          <FormControlLabel
            value={true}
            control={<Radio onClick={() => setPaisSeparados(true)} />}
            label="Sim"
          />
          <FormControlLabel
            value={false}
            control={<Radio onClick={() => setPaisSeparados(false)} />}
            label="Não"
          />
        </RadioGroup>
        <FormLabel className={classes.label} component="legend">
          Pais Vivos ?
        </FormLabel>
        <RadioGroup
          value={paisVivos}
          row
        >
          <FormControlLabel
            value={true}
            control={<Radio onClick={() => setPaisVivos(true)} />}
            label="Sim"
          />
          <FormControlLabel
            value={false}
            control={<Radio onClick={() => setPaisVivos(false)} />}
            label="Não"
          />
        </RadioGroup>
        <FormLabel className={classes.label} component="legend">
          Criança Recebe Pensão ?
        </FormLabel>
        <RadioGroup
          value={criancaRecebePensao}
          name="radio-buttons-group"
          row
        >
          <FormControlLabel
            value={true}
            control={<Radio onClick={() => setCriancaRecebePensao(true)} />}
            label="Sim"
          />
          <FormControlLabel
            value={false}
            control={<Radio onClick={() => setCriancaRecebePensao(false)} />}
            label="Não"
          />
        </RadioGroup>
        {criancaRecebePensao && (
          <TextField
            className={classes.input}
            name="justifPens"
            label="Justificativa da Pensão"
          />
        )}
        <TextField
          className={classes.input}
          label="Responsável Legal"
          onChange={(event: any) => {
            setResponsavelLegal(event.target.value);
          }}
        />
        <TextField
          type="date"
          label="Data de Nascimento do Responável Legal"
          className={classes.input}
          InputLabelProps={{ shrink: true }}
          value={dataDeNascimentoDoResponsavelLegal}
          onChange={(event: any) => {
            setDataDeNascimentoDoResponsavelLegal(event.target.value);
          }}
        />
        <TextField
          className={classes.input}
          label="Grau de Parentesco"
          onChange={(event: any) => {
            setGrauDeParentesco(event.target.value);
          }}
        />
        <FormLabel className={classes.label} component="legend">
          Possui Registro de Guarda ?
        </FormLabel>
        <RadioGroup
          value={registroGuarda}
          name="radio-buttons-group"
          row
        >
          <FormControlLabel
            value={true}
            control={<Radio onClick={() => setRegistroGuarda(true)} />}
            label="Sim"
          />
          <FormControlLabel
            value={false}
            control={<Radio onClick={() => setRegistroGuarda(false)} />}
            label="Não"
          />
        </RadioGroup>
        {registroGuarda  && (
          <>
            <FormLabel className={classes.label}>Tipo de Registro :</FormLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={tipoDeRegistroDeGuarda}
              onChange={(event: any) => {
                setTipoDeRegistroDeGuarda(event.target.value);
              }}
              className={classes.input}
            >
              {registroDeGuarda.map((item) => (
                <MenuItem value={item.value} key={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </Select>
          </>
        )}
        <p>Dados da Família</p>
        <TextField
          className={classes.input}
          label="Número de Pessoas na Família"
          type="number"
          InputProps={{ inputProps: { min: 0 } }}
          onChange={(event: any) => {
            setNumeroDePessoasNaFamilia(event.target.value);
          }}
        />

        {showFamilyMember()}

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
