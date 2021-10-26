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
  const [nomeMae, setNomeMae] = useState("");
  const [dataNascMae, setDataNascMae] = useState("");
  const [profissaoMae, setProfissaoMae] = useState("");
  const [nomePai, setNomePai] = useState("");
  const [dataNascPai, setDataNascPai] = useState("");
  const [profissaoPai, setProfissaoPai] = useState("");
  const [paisSep, setPaisSep] = useState("n");
  const [paisVivos, setPaisVivos] = useState("s");
  const [recPens, setRecPens] = useState(false);
  const [respLegal, setRespLegal] = useState("");
  const [dataNascrespLegal, setDataNascrespLegal] = useState("");
  const [grauParentesco, setGrauParentesco] = useState<string>();
  const [registroGuarda, setRegistroGuarda] = useState("n");
  const [tipoRegistro, setTipoRegistro] = useState("Registro de Guarda");
  const [numPessoas, setNumPessoas] = useState<number>();
  const [familyMembers, setFamilyMembers] = useState<
    Partial<Array<{ nome: string; parentesco: string }>>
  >([]);

  const handleSubmit = () => {
    console.log(
      JSON.stringify({
        nomeMae,
        dataNascMae,
        profissaoMae,
        nomePai,
        dataNascPai,
        profissaoPai,
        paisSep,
        paisVivos,
        recPens,
        respLegal,
        dataNascrespLegal,
        grauParentesco,
        registroGuarda,
        tipoRegistro,
        numPessoas,
        parentesco: familyMembers,
      })
    );
  };

  useEffect(() => {
    if (numPessoas > familyMembers.length) {
      setFamilyMembers(familyMembers.concat({ nome: "", parentesco: "" }));
    } else {
      setFamilyMembers(familyMembers.slice(0, familyMembers.length - 1));
    }
  }, [numPessoas]);

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
          name="mae"
          label="Nome da Mãe"
          onChange={(event: any) => {
            setNomeMae(event.target.value);
          }}
        />
        <TextField
          name="dataNascMae"
          type="date"
          label="Data de Nascimento da Mãe"
          className={classes.input}
          InputLabelProps={{ shrink: true }}
          value={dataNascMae}
          onChange={(event: any) => {
            setDataNascMae(event.target.value);
          }}
        />
        <TextField
          className={classes.input}
          name="profissaoMae"
          label="Profissão da Mãe"
          onChange={(event: any) => {
            setProfissaoMae(event.target.value);
          }}
        />
        <TextField
          className={classes.input}
          name="Pai"
          label="Nome do Pai"
          onChange={(event: any) => {
            setNomePai(event.target.value);
          }}
        />
        <TextField
          name="dataNascPai"
          type="date"
          label="Data de Nascimento da Pai"
          className={classes.input}
          InputLabelProps={{ shrink: true }}
          value={dataNascPai}
          onChange={(event: any) => {
            setDataNascPai(event.target.value);
          }}
        />
        <TextField
          className={classes.input}
          name="profissaoPai"
          label="Profissão da Pai"
          onChange={(event: any) => {
            setProfissaoPai(event.target.value);
          }}
        />
        <FormLabel className={classes.label} component="legend">
          Pais Separados ?
        </FormLabel>
        <RadioGroup
          aria-label="paisSep"
          defaultValue="n"
          value={paisSep}
          name="radio-buttons-group"
          row
        >
          <FormControlLabel
            value="s"
            control={<Radio onClick={() => setPaisSep("s")} />}
            label="Sim"
          />
          <FormControlLabel
            value="n"
            control={<Radio onClick={() => setPaisSep("n")} />}
            label="Não"
          />
        </RadioGroup>
        <FormLabel className={classes.label} component="legend">
          Pais Vivos ?
        </FormLabel>
        <RadioGroup
          aria-label="paisSep"
          defaultValue="s"
          value={paisVivos}
          name="radio-buttons-group"
          row
        >
          <FormControlLabel
            value="s"
            control={<Radio onClick={() => setPaisVivos("s")} />}
            label="Sim"
          />
          <FormControlLabel
            value="n"
            control={<Radio onClick={() => setPaisVivos("n")} />}
            label="Não"
          />
        </RadioGroup>
        <FormLabel className={classes.label} component="legend">
          Criança Recebe Pensão ?
        </FormLabel>
        <RadioGroup
          aria-label="paisSep" // EU NEM SEI QUE PIADA EU POSSO FAZER SOBRE ISSO DE TÃO PATÉTICO
          defaultValue="n"
          value={recPens}
          name="radio-buttons-group"
          row
        >
          <FormControlLabel
            control={<Radio onClick={() => setRecPens(true)} />}
            label="Sim"
          />
          <FormControlLabel
            control={<Radio onClick={() => setRecPens(false)} />}
            label="Não"
          />
        </RadioGroup>
        {recPens && (
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
            setRespLegal(event.target.value);
          }}
        />
        <TextField
          type="date"
          label="Data de Nascimento do Responável Legal"
          className={classes.input}
          InputLabelProps={{ shrink: true }}
          value={dataNascrespLegal}
          onChange={(event: any) => {
            setDataNascrespLegal(event.target.value);
          }}
        />
        <TextField
          className={classes.input}
          label="Grau de Parentesco"
          onChange={(event: any) => {
            setGrauParentesco(event.target.value);
          }}
        />
        <FormLabel className={classes.label} component="legend">
          Possui Registro de Guarda ?
        </FormLabel>
        <RadioGroup
          aria-label="registroGuarda"
          defaultValue="n"
          value={registroGuarda}
          name="radio-buttons-group"
          row
        >
          <FormControlLabel
            value="s"
            control={<Radio onClick={() => setRegistroGuarda("s")} />}
            label="Sim"
          />
          <FormControlLabel
            value="n"
            control={<Radio onClick={() => setRegistroGuarda("n")} />}
            label="Não"
          />
        </RadioGroup>
        {registroGuarda === "s" && (
          <>
            <FormLabel className={classes.label}>Tipo de Registro :</FormLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={tipoRegistro}
              onChange={(event: any) => {
                setTipoRegistro(event.target.value);
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
          name="numPessoas"
          label="Número de Pessoas na Família"
          type="number"
          InputProps={{ inputProps: { min: 0 } }}
          onChange={(event: any) => {
            setNumPessoas(event.target.value);
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
