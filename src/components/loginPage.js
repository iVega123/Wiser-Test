import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Grid,
  Typography,
  Button,
  TextField,
  IconButton,
  Paper
} from "@material-ui/core";
import { setCookie } from '../utils/cookies';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";
import ClearIcon from '@material-ui/icons/Clear';
import clsx from "clsx";
import { loginUserAction } from '../actions/authenticationActions';
import useStyles from "./styles";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const LoginPage = (props) => {
  var [isLoading, setIsLoading] = useState(true);
  var [loginValue, setLoginValue] = useState("");
  var [passwordValue, setPasswordValue] = useState("");
  var classes = useStyles();
  let isSuccess, message, users;
  function Error() {
    return (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(loginValue.toLowerCase()))
      && (loginValue.length !== 0 && loginValue.length <= 60)
  }
  function onHandleLogin(event) {
    event.preventDefault();
    let email = loginValue
    let password = passwordValue;

    const data = {
      email, password
    };
    props.dispatch(loginUserAction(data));
    if (isLoading !== true) {
      VerifyLogin();
    }
  }
  function VerifyLogin() {
    if (props.response.login.hasOwnProperty('response')) {
      users = props.response.login.response;
      users.map(user => {
        if (user.Email === loginValue) {
          if (user.Senha === passwordValue) {
            isSuccess = true;
            message = "Login bem sucedido!"
          }
        }
      });
      if (!isSuccess) {
        message = "Senha ou Login incorretos!"
      }
      if (isSuccess) {
        setCookie('token', "Token!", 1);
        toast.success(message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.error(message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      setIsLoading(false);
    }
  }
  const preventDefault = (event) => event.preventDefault();
  if (isLoading === true) {
    VerifyLogin();
  }
  return (
    <Grid container className={classes.container}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login Test</title>
      </Helmet>
      <div className={classes.logotypeContainer}>
      </div>
      {!isSuccess ? null : <Redirect to='dashboard' />}
      <div className={classes.formContainer}>
        <Paper classes={{ root: classes.paperRoot }}>
          <React.Fragment>
            <Typography align="left" variant="h1" className={classes.greeting}>
              Olá, seja <br /> bem vindo!
            </Typography>
            <Typography align="left" variant="h4" className={classes.subGreeting}>
              Para acessar a plataforma, faça seu login.
            </Typography>
            <Typography variant="subtitle1" className={classes.TypepographicLabel}>
              E-MAIL
            </Typography>
            <TextField
              className={classes.EmailHover}
              id="email"
              InputProps={{
                classes: {
                  underline: classes.textFieldUnderline,
                  input: classes.textField,
                },
                endAdornment: (
                  <IconButton
                    className={clsx(classes.clearIndicator, {
                      [classes.clearIndicatorDirty]: loginValue.length > 0 && Error()
                    })}
                    size="small"
                    onClick={() => {
                      setLoginValue("");
                    }}
                  >
                    <ClearIcon color="secondary" fontSize="small" />
                  </IconButton>
                )
              }}
              value={loginValue}
              onChange={e => setLoginValue(e.target.value)}
              margin="normal"
              placeholder="user.name@mail.com"
              type="email"
              fullWidth
              variant="outlined"
              error={Error()}
            />
            {Error() ? (
              <Typography className={classes.ErrorMessage}>
                Digite um e-mail válido;
              </Typography>
            ) : null}
            <Typography align="left" variant="subtitle1" className={classes.TypepographicLabel}>
              SENHA
            </Typography>
            <TextField
              id="password"
              className={classes.buttonsSubmit}
              InputProps={{
                classes: {
                  underline: classes.textFieldUnderline,
                  input: classes.textField,
                },
              }}
              value={passwordValue}
              onChange={e => setPasswordValue(e.target.value)}
              margin="normal"
              placeholder="******"
              type="password"
              variant="outlined"
              fullWidth
            />
            <div>
              <br>
              </br>
            </div>
            <br />
          </React.Fragment>
        </Paper>
        <div className={classes.MobileAdjustments}>
          <div>
            <Button className={classes.loginButton}
              disabled={
                loginValue.length === 0 || passwordValue.length === 0
              }
              onClick={onHandleLogin}
              variant="contained"
              size="large"
              name="Login"
              fullWidth
            >
              Entrar
              </Button>
          </div>
          <br />
          <div>
            <Typography variant="h6" className={classes.rodapeWritings}>
              Esqueceu seu login ou senha?
                <br />
                Clique
                <Link to="/register" className={classes.rodapeWritings} style={{ color: "#A240B7", paddingLeft: "5px" }} href="#" onClick={preventDefault}>
                aqui
                </Link>
            </Typography>
          </div>
        </div>
      </div>
    </Grid>
  );
}
const mapStateToProps = (response) => ({ response });

export default connect(mapStateToProps)(LoginPage);