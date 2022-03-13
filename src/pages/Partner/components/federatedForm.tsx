import React, { useEffect, useState } from "react";
import { makeStyles, TextField, Theme, createStyles } from "@material-ui/core";
import { DatePicker } from "@material-ui/pickers";
import { DATE_FORMAT } from "../../../constants";
import moment from "moment";

const FederatedForm = ({ participanteLocal, setParticipanteLocal, titulo }) => {
  const classes = useStyles();

  const [dataInicio, setDataInicio] = useState(
    moment(participanteLocal?.dataInicioFederado || new Date())
  );

  useEffect(() => {
    setParticipanteLocal({
      ...participanteLocal,
      dataInicioFederado: dataInicio.format(DATE_FORMAT),
    });
  }, [dataInicio]);

  return (
    <div className={classes.form}>
      <p>{titulo}</p>
      <TextField
        className={classes.input}
        name="clube"
        label="Nome do Clube"
        value={participanteLocal.clube}
        onChange={(event: any) => {
          setParticipanteLocal({
            ...participanteLocal,
            clube: event.target.value,
          });
        }}
      />
      <TextField
        className={classes.input}
        value={participanteLocal.modalidade}
        label="Modalidade Esportiva"
        onChange={(event: any) => {
          setParticipanteLocal({
            ...participanteLocal,
            modalidade: event.target.value,
          });
        }}
      />

      <DatePicker
        className={classes.input}
        clearable
        value={dataInicio}
        onChange={setDataInicio}
        placeholder="Data de Início"
        maxDate={new Date()}
        format={DATE_FORMAT}
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
