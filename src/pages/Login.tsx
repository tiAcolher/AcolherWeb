import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Copyright from "../components/Copyright";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import logo from '../images/Logo.jpeg';




export default function Login() {
  const classes = useStyles(); 
  const history = useHistory(); 
  const [user, setUser] = useState("");
  const [senha, setSenha] = useState("");
  const [lembrarUsuario, setLembrarUsuario] = useState(false);
  const [botaoDesabilitado, setBotaoDesabilitado] = useState(true);
  const [helperText, setHelperText] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (user.trim() && senha.trim()) {
      setBotaoDesabilitado(false);
    } else {
      setBotaoDesabilitado(true);
    }
  }, [user, senha]);

  useEffect(() => {    
      document.title = 'Projeto Acolher';     
    if (localStorage.getItem("usuario")) {
      setLembrarUsuario(true);
      setUser(localStorage.getItem("usuario"));
    }
  }, []);

  useEffect(() => {
    if (lembrarUsuario) {
      localStorage.setItem("usuario", user);
    } else {
      localStorage.removeItem("usuario");
    }
  }, [lembrarUsuario, user]);

  const alteraLembrar = e => {
    setLembrarUsuario(!lembrarUsuario);
  };
  const validaLogin = e => {
    e.preventDefault();
    if (user === "Admin" && senha === "123senha") {
      setError(false);
      setHelperText("Login OK! Aguarde...");
      history.push("/home");
    } else {
      setError(true);
      setHelperText("O usuário ou a senha informados são inválidos!");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        <img src={logo} width="100%" height="100%" alt="" /> 
        </Avatar>
        <Typography component="h1" variant="h5">
          Projeto Acolher
        </Typography>
        <form className={classes.form} noValidate onSubmit={validaLogin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="user"
            label="Login de Usuário"
            name="user"
            autoComplete="user"
            autoFocus
            value={user}
            onChange={e => setUser(e.target.value)}
            error={error}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            value={senha}
            onChange={e => setSenha(e.target.value)}
            error={error}
            helperText={helperText}
          />
          <FormControlLabel
            control={
              <Switch
                checked={lembrarUsuario}
                onChange={alteraLembrar}
                name="lembrar"
              />
            }
            label="Lembrar o usuário"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={botaoDesabilitado}
            className={classes.submit}
          >
            <LockOutlinedIcon /> Acessar
          </Button>
         </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    width: "17.9%",
    height:"50%"
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));