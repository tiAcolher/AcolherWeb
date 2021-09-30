import React from 'react';
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


const PartnerList = (): JSX.Element => {
  const classes = useStyles();

  
  const mockPartnerList = [
    {
      name: "Marcela",
      phone: "88 8888-8888",
      parent: "Felipe",
      parentPhone: "99 9999-9999",
    },
    {
      name: "Silas",
      phone: "66 6666-6666",
      parent: "ciclano",
      parentPhone: "77 7777-7777",
    },    
    {
      name: "Felipe",
      phone: "55 5555-5555",
      parent: "beltrano",
      parentPhone: "44 4444-4444",
    },    
    {
      name: "Maria",
      phone: "11 2222-2222",
      parent: "fulano",
      parentPhone: "33 3333-3333",
    },    
    {
      name: "Juliana",
      phone: "11 9999-9999",
      parent: "Paula",
      parentPhone: "22 2222-2222",
    },
  ];

  return (
    <div className={classes.container}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>        
        <InputBase
          fullWidth
          placeholder="Procurar…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>      
      <PersonAddIcon  className={classes.addButton}  />
      <List style={{ marginTop: 32 }}>
        {mockPartnerList.map((partner) => (
          <Card className={classes.card}>
            <Box display="flex">
              <Avatar className={classes.avatar} />
              <Box className={classes.cardContent}>
                <Typography>Nome: {partner?.name}</Typography>
                <Typography>Telefone: {partner?.phone}</Typography>
                <Typography>Responsável: {partner?.parent}</Typography>
                <Typography>
                  Telefone do Responsável: {partner?.parentPhone}
                </Typography>
              </Box>
              <div className={classes.buttons}>
                <EditIcon className={classes.EditIcon} />
              </div>
            </Box>
          </Card>
        ))}
      </List>
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

export default PartnerList;
