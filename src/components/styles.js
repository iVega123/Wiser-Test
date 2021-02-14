import { makeStyles } from "@material-ui/styles";
export default makeStyles(theme => ({
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#FAF5FF"
  },
  logotypeContainer: {
    width: "60%",
    height: "100%",
    backgroundImage: "linear-gradient(0deg, #130525 0%, rgba(105, 57, 153, 0) 100%), url(https://i.ibb.co/LN8232p/shutterstock-1220809918-1.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.down("sm")]: {
      width: "45%",
      backgroundImage: "linear-gradient(0deg, #130525 0%, rgba(105, 57, 153, 0) 100%), url(https://i.ibb.co/tKgg8Yk/shutterstock-1220809918-1-1.png)",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none"
    },
  },
  formContainer: {
    width: "40%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "55%"
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      backgroundImage: "linear-gradient(0deg, #130525 0%, rgba(105, 57, 153, 0) 100%), url(https://i.ibb.co/FbSbzgT/shutterstock-1220809918-1-1.png), url(https://www.beautycolorcode.com/130525-1200x600.png)",
      backgroundRepeat: "no-repeat",
      height: "100%",
      backgroundSize: "100% 60%",
      background: "#130525;"
    },
  },
  ErrorMessage: {
    fontStyle: "normal",
    fontWeight: "normal",
    lineHeight: "48px",
    display: "flex",
    alignItems: "center",
    color: "#FE4F8F",
    fontSize: "12px",
    marginBottom: "-20px",
    marginTop: "-15px"
  },
  paperRoot: {
    background: "transparent",
    boxShadow: "none",
    [theme.breakpoints.down("xs")]: {
      marginTop: "70px",
      display: "flex",
      flexDirection: "column",
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      maxWidth: 350,
      maxHeight: 450,
      boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
      background: "#FAF5FF",
      borderRadius: "8px",
      alignItems: "center"
    },
  },
  form: {
    width: 320,
  },
  TypepographicLabel: {
    fontStyle: "normal",
    fontWeight: "normal",
    lineHeight: "48px",
    display: "flex",
    alignItems: "center",
    color: "#383E71",
    fontSize: "10px",
    marginBottom: "-20px",
    marginRight: "auto"
  },
  EmailHover: {
    border: "1px solid #989FDB",
    boxSizing: "border-box",
    borderRadius: "8px",
    "&:hover $clearIndicatorDirty, & .Mui-focused $clearIndicatorDirty": {
      visibility: "visible"
    }
  },
  clearIndicatorDirty: {},
  clearIndicator: {
    visibility: "hidden"
  },
  greeting: {
    fontWeight: "normal",
    marginTop: theme.spacing(4),
    fontSize: "40px",
    lineHeight: "48px",
    color: "#383E71",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      marginTop: "0px"
    },
  },
  subText: {
    position: 'absolute',
    textAlign: "center",
    marginTop: theme.spacing(4),
  },
  subGreeting: {
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "20px",
    color: "#989FDB",
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      fontSize: 12,
    },
  },
  rodapeWritings: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "20px",
    textAlign: "center",
    color: "#989FDB",
    [theme.breakpoints.down("xs")]: {
      color: "white",
      fontSize:16
    },
  },
  MobileAdjustments: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "-25px"
    }
  },
  formDividerContainer: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    display: "flex",
    alignItems: "center",
  },
  formDividerWord: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  formDivider: {
    flexGrow: 1,
    height: 1,
    backgroundColor: theme.palette.text.hint + "40",
  },
  errorMessage: {
    textAlign: "center",
  },
  textField: {
    borderBottomColor: "#989FDB",
  },
  buttonsSubmit: {
    border: "1px solid #989FDB",
    boxSizing: "border-box",
    borderRadius: "8px",
    palette:{
      primary: "#989FDB",
      secondary: "FF377F"
    }
  },
  loginButton: {
    background: 'linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%)',
    borderRadius: 8,
    border: 0,
    color: 'white !important',
    height: 48,
    padding: '0 30px',
    boxShadow: '0px 10px 25px #CF99DB !important',
    [theme.breakpoints.down("xs")]: {
      boxShadow: "none !important"
    },
  },
  formButtons: {
    width: "100%",
    marginTop: theme.spacing(4),
    alignItems: "center",
    boxShadow: "0px 10px 25px #CF99DB;",
    borderRadius: "8px;",
    background: "linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);",
    backgroundColor: "linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);",
    '&:hover': {
      boxShadow: "0px 10px 25px #CF99DB;",
      borderRadius: "8px;",
      background: "linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);",
      backgroundColor: "linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);"
    },
    '&:enable': {
      boxShadow: "0px 10px 25px #CF99DB;",
      borderRadius: "8px;",
      background: "linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);",
      backgroundColor: "linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);"
    },
  },
  loginLoader: {
    marginLeft: theme.spacing(4),
  },
}));
