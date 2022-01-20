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
import logo from "../images/Logo.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUsuario } from "../reducers/userReducer";

export default function Login() {
  const classes = useStyles();
  const history = useHistory();
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [lembrarUsuario, setLembrarUsuario] = useState(false);
  const [erro, setErro] = useState(false);

  const dispath = useDispatch();
  const selector = useSelector(selectUsuario);

  useEffect(() => {
    document.title = "Projeto Acolher";
  }, []);

  useEffect(() => {
    if (!lembrarUsuario) {
      localStorage.removeItem("ac-credentials");
    }
  }, [lembrarUsuario]);

  const validaLogin = (e) => {
    e.preventDefault();

    dispath(login({ usuario, senha, lembrarUsuario }));

    if (selector) {
      setErro(false);
      localStorage.setItem("ac-credentials", JSON.stringify(selector));
      history.push("/home");
    } else {
      setErro(true);
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
            error={erro}
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
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
            error={erro}
            onChange={(e) => setSenha(e.target.value)}
          />
          <FormControlLabel
            control={
              <Switch
                checked={lembrarUsuario}
                onChange={() => setLembrarUsuario(!lembrarUsuario)}
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
            disabled={!(usuario && senha)}
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

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    width: "17.9%",
    height: "50%",
  },
  form: {
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
