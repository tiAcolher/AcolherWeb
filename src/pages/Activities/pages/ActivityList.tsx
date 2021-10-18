import React, { useEffect } from "react";
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
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import { useHistory } from "react-router-dom";

import Main from "../../../components/Main";

const ActivitiesList = (): JSX.Element => {
  const classes = useStyles();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const mockPartnerList = [
    {
      Activitie: "Futebol",
      Category: "sub 11",
      Appointment: "9h - 11h",
      Responsable: "Daniel",    
    },
    {
      Activitie: "Futebol",
      Category: "sub 9",
      Appointment: "11h - 13h",
      Responsable: "Daniel",    
    },
    {
      Activitie: "Futebol",
      Category: "sub 13",
      Appointment: "13h - 15h",
      Responsable: "Daniel",    
    },
    {
      Activitie: "Vôlei",
      Category: "sub 11",
      Appointment: "13h - 15h",
      Responsable: "Maria",    
    },
    {
      Activitie: "Vôlei",
      Category: "sub 11",
      Appointment: "15h - 17h",
      Responsable: "Maria",    
    },
    {
      Activitie: "Handebol",
      Category: "sub 15",
      Appointment: "9h - 11h",
      Responsable: "Fellipe",    
    },
  ];

  const history = useHistory();

  const [search, setSearch] = React.useState("");
  const [list, setList] = React.useState(mockPartnerList);

  useEffect(() => {
    if (search !== "") {
      let newList = mockPartnerList.filter((item) =>
        item.Activitie.toUpperCase().includes(search.toUpperCase())
      );
      setList(newList);
    } else {
      setList(mockPartnerList);
    }
  }, [mockPartnerList, search]);

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
        <AddIcon
          onClick={() => history.push("ActivityForm")}
          className={classes.addButton}
        />
        <List style={{ marginTop: 32 }}>
          {list.map((partner) => (
            <Card className={classes.card}>
              <Box display="flex">
                <Avatar className={classes.avatar} />
                <Box className={classes.cardContent}>
                  <Typography>Atividade: {partner?.Activitie}</Typography>
                  <Typography>Categoria: {partner?.Category}</Typography>
                  <Typography>Horário: {partner?.Appointment}</Typography>
                  <Typography>Responsável: {partner?.Responsable}</Typography>
                </Box>
                <div className={classes.buttons}>
                  <EditIcon className={classes.EditIcon} />
                </div>
              </Box>
            </Card>
          ))}
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
  })
);

export default ActivitiesList;
