import React from "react";
import { makeStyles, TextField, Theme, createStyles } from "@material-ui/core";

const ActivityData = () => {
  const classes = useStyles();

  return (
    <div className={classes.form}>
      <p>Dados da Atividade</p>
      <TextField className={classes.input} name="atividade" label="Atividade" />
      <TextField className={classes.input} name="categoria" label="Categoria" />
      <TextField className={classes.input} name="horario" label="Horário" />

      <TextField
        className={classes.input}
        name="responsavel"
        label="Responsável"
      />
    </div>
  );
};

export default ActivityData;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      display: "flex",
      flexDirection: "column",
    },
    input: {
      width: "60%",
    },
  })
);
