import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Card,
  createStyles,
  InputBase,
  List,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import EditIcon from "@material-ui/icons/Edit";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Main from "../../../components/Main";
import {
  participantActions,
  select,
  selectParticipantList,
} from "../../../reducers/participantReducer";
import { Participant } from "../../../model/Participant";

const PartnerList = (): JSX.Element => {
  const classes = useStyles();

  const history = useHistory();

  const dispatch = useDispatch();
  const listaParticipantes = useSelector(selectParticipantList);

  const [search, setSearch] = useState<string>("");
  const [lista, setLista] = useState(listaParticipantes);

  useEffect(() => {
    dispatch(participantActions.findAll());
  }, []);

  useEffect(() => {
    if (listaParticipantes) {
      setLista(listaParticipantes);
    }
  }, [listaParticipantes]);

  useEffect(() => {
    if (search.length) {
      let newList = lista.filter((item) =>
        item.name.toUpperCase().includes(search.toUpperCase())
      );
      setLista(newList);
    } else {
      setLista(lista);
    }
  }, [lista, search]);

  const handleEditPress = (participant: Participant) => {
    dispatch(select(participant));
    history.push("createPartner");
  };

  const handleAddParticipant = () => {
    dispatch(select(null));
    history.push("createPartner");
  };

  return (
    <div>
      <Main />
      <div className={classes.container}>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setSearch(event.target.value);
            }}
            fullWidth
            placeholder="Procurar…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>

        <PersonAddIcon
          onClick={handleAddParticipant}
          className={classes.addButton}
        />

        <List style={{ marginTop: 32 }}>
          {lista.length === 0 ? (
            <Card className={classes.card}>
              <Box display="flex">
                <Box className={classes.emptyList}>
                  <Typography>
                    Não há nenhum parceiro cadastrado na base de dados
                  </Typography>
                </Box>
              </Box>
            </Card>
          ) : (
            lista.map((participante: Participant) => (
              <Card key={participante.id} className={classes.card}>
                <Box display="flex">
                  <Avatar className={classes.avatar} />
                  <Box className={classes.cardContent}>
                    <Typography>Nome: {participante.nomeCompleto}</Typography>
                    <Typography>RG: {participante?.rg}</Typography>
                    <Typography>Telefone: {participante?.telefone}</Typography>
                    <Typography>
                      Telefone do Responsável:
                      {participante?.telefoneResponsavel}
                    </Typography>
                  </Box>
                  <div className={classes.buttons}>
                    <EditIcon
                      className={classes.EditIcon}
                      onClick={() => handleEditPress(participante)}
                    />
                  </div>
                </Box>
              </Card>
            ))
          )}
        </List>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardContent: {
      marginLeft: 16,
    },
    card: {
      padding: 20,
      marginTop: 10,
    },
    avatar: {
      width: 70,
      height: 70,
      alignSelf: "center",
    },
    buttons: {
      marginLeft: "75%",
      alignSelf: "center",
    },
    addButton: {
      width: 50,
      height: 40,
      marginLeft: "93%",
      position: "absolute",
      marginTop: "-2.3%",
      cursor: "pointer",
    },
    EditIcon: {
      width: 50,
      height: 35,
      cursor: "pointer",
    },
    container: {
      padding: 20,
      backgroundColor: "#60606022",
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: "#60606055",
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "94%",
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      color: "#606060aa",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
    emptyList: {
      flex: 1,
      textAlign: "center",
    },
  })
);

export default PartnerList;
