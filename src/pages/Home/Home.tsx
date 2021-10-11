import { Button, Grid } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Main from "../../components/Main";
import faixa from '../../images/faixa.png';

const Home = (): JSX.Element => {
  const classes = useStyles();
  const history = useHistory(); 
  return (
    <>
      <Main />
      <img src={faixa} width="100%" alt="" />
      <Grid className={classes.container}>
        <Button className={classes.buttons} variant='contained'  onClick={() => history.push("/partnerList")} >Participantes</Button>        
        {/* <Button className={classes.buttons} variant='contained' >Federados</Button> */}
        <Button className={classes.buttons} variant='contained'>Atividades</Button>
        <Button className={classes.buttons} variant='contained'>Projetos</Button>
        <Button className={classes.buttons} variant='contained'>Doações</Button>
        <Button className={classes.buttons} variant='contained'>Relatórios</Button>
        <Button className={classes.buttons} variant='contained'>Segurança e Acesso</Button>
      </Grid>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: "50%",
      marginLeft: "25%",
      marginTop: "5%",
      
    },
    buttons: {
      width: "45%",
      backgroundColor: "#3f50b5",
      color: "#FFF",
      margin: "2%",
      marginTop: "3%",      
      },
  })
);
export default Home;
