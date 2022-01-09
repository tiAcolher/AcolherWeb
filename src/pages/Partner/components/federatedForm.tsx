import React from "react";
import { makeStyles, TextField, Theme, createStyles } from "@material-ui/core";

const FederatedForm = ({
  partipanteLocal,
  setParticipanteLocal,
  titulo,

}) => {
  const classes = useStyles();

  return (
    <div className={classes.form}>
      <p>{titulo}</p>
      <TextField
        className={classes.input}
        name="clube"
        label="Nome do Clube"
        value={partipanteLocal.clube}
        onChange={(event: any) => {
          setParticipanteLocal({...partipanteLocal, clube: event.target.value});
        }}
      />
      <TextField
        className={classes.input}
        value={partipanteLocal.modalidade}
        label="Modalidade Esportiva"
        onChange={(event: any) => {
          setParticipanteLocal({...partipanteLocal, modalidade: event.target.value});
        }}
      />
      <TextField
        className={classes.input}
        value={partipanteLocal.dataInicio}
        label="Data de Início"
        type="date"
        onChange={(event: any) => {
          setParticipanteLocal({...partipanteLocal, dataInicio: event.target.value});
        }}
        InputLabelProps={{ shrink: true }}
      />
    </div>
  );
};

export default FederatedForm;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      display: "flex",
      flexDirection: "column",
    },
    input: {
      width: "80%",
    },
  })
);
