import React from "react";
import { makeStyles, TextField, Theme, createStyles } from "@material-ui/core";

const FederatedForm = ({
  setClube,
  setModalidade,
  setDataInicio,
  titulo,
  clube,
  modalidade,
  dataInicio,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.form}>
      <p>{titulo}</p>
      <TextField
        className={classes.input}
        name="clube"
        label="Nome do Clube"
        value={clube}
        onChange={(event: any) => {
          setClube(event.target.value);
        }}
      />
      <TextField
        className={classes.input}
        value={modalidade}
        label="Modalidade Esportiva"
        onChange={(event: any) => {
          setModalidade(event.target.value);
        }}
      />
      <TextField
        className={classes.input}
        value={dataInicio}
        label="Data de Início"
        type="date"
        onChange={(event: any) => {
          setDataInicio(event.target.value);
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
