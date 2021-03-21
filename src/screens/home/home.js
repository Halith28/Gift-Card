import React, { useState } from "react";
import {
  Avatar,
  Button,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import MasterLogo from "./images/image8.png";
import GiftCard1 from "./images/image11.png";
import Logo from "./images/logo.svg";
import icon1 from "./images/whatsapp.png";
import icon2 from "./images/bookmark.jpg";
import icon3 from "./images/close.png";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    background: "linear-gradient(180deg, black 225px, #fff 0, #fff 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  grid: {
    height: "100vh",
    width: "300px",
  },
  paperComp: {
    // padding: "20px",
    height: "150px",
    width: "300px",
    borderRadius: "20px",
    marginBottom: 20,
    // boxShadow: " 0px 9px 5px 0px rgba(132,120,120,0.75)",
    // boxShadow: "0 10px 10px -5px",
    boxShadow: "0 10px 20px rgb(0 0 0 / 0%), 0 6px 6px rgb(0 0 0 / 10%)",
  },
  textInput: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "50px",
    },
    marginBottom: 15,
    "& .MuiInputBase-input": {
      textAlign: "center",
      fontSize: "x-large",
    },
    "& .MuiInputBase-input:focus": {
      letterSpacing: "2px",
    },
  },
  button: {
    borderRadius: "50px",
    height: "4em",
    padding: "18.5px 14px",
    marginBottom: 20,
    color: "white",
    backgroundColor: "#1aa5e7",
    boxShadow: "0px 8px 15px #1aa5e747",
    "&:hover": {
      backgroundColor: "#1aa5e7",
      boxShadow: "0px 10px 10px #a7daf1",
    },
    "& .MuiSvgIcon-root": {
      fontSize: "1.8rem",
      marginLeft: 10,
    },
    textTransform: "capitalize",
  },
  img: {
    height: "150px",
    width: "300px",
    borderRadius: "20px",
  },
  logo: {
    marginTop: "10px",
    height: "100px",
    width: "300px",
    marginBottom: "-5px",
    padding: "20px 60px",
  },
  headLine: {
    textAlign: "center",
    background: "-webkit-linear-gradient(#fb00ff, #ffa500)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: 600,
  },
  typography: {
    alignSelf: "center",
    textAlign: "center",
    fontWeight: 300,
    fontSize: 18,
  },
  typography1: {
    fontWeight: 500,
  },
  footer: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    margin: "20px 0",
  },
  titleTypography: {
    alignSelf: "center",
    marginLeft: 50,
    fontWeight: 500,
    marginBottom: 10,
  },
  cardTypography: {
    alignSelf: "center",
    fontWeight: 200,
  },
  wishCard: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: "30px",
  },
  giftMessage: {
    marginBottom: 20,
  },
}));

const data = [
  {
    title: "Where will I get the gift card?",
    icon: icon1,
    body: "You will recieve it on Whatsapp/SMS on your mobile.",
  },
  {
    title: "When will I recieve the Gift card?",
    icon: icon2,
    body: "You will recieve it on Whatsapp/SMS on your mobile.",
  },
  {
    title: "What if I cancel the order?",
    icon: icon3,
    body: "You will recieve it on Whatsapp/SMS on your mobile.",
  },
];

const HomeComponent = () => {
  const classes = useStyles();
  const [buttonStatus, setButtonStatus] = useState(true);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const check =
      /^(\+91[\s]?)?[0]?(91)?[6789]\d{9}$/i.test(e.target.value) === false
        ? true
        : false;
    setButtonStatus(check);
  };

  const handleSuccess = () => {
    if (!buttonStatus) {
      setSuccess(true);
    }
  };

  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.grid}>
        <img src={MasterLogo} alt="logo" className={classes.logo} />
        <Typography variant="h5" className={classes.wishCard}>
          <span className={classes.headLine}>Congratulations</span>
          🥳
        </Typography>
        <Paper className={classes.paperComp}>
          {/* <Typography variant={"h6"}>Gift Card</Typography> */}
          {/* <img src={Logo} alt="logo" className={classes.img} /> */}
          <img src={GiftCard1} alt="logo" className={classes.img} />
        </Paper>
        {!success ? (
          <Grid>
            <Grid className={classes.giftMessage}>
              <Typography variant="h6" className={classes.typography}>
                You have WON Paytm Gift
              </Typography>
              <Typography variant="h6" className={classes.typography}>
                Card of Rs.200 for <b>placing the order</b>
              </Typography>
              <Typography variant="h6" className={classes.typography}>
                <b>on Man Matters</b>
              </Typography>
            </Grid>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Enter Mobile Number"
              className={classes.textInput}
              onChange={handleChange}
              helperText={
                <Typography component={"span"} variant="caption">
                  Enter the same number used on Man Matters
                </Typography>
              }

              // inputProps={{
              //   className: classes.textInput,
              // }}
            />
            <Button
              variant="contained"
              fullWidth
              className={classes.button}
              disabled={buttonStatus}
              onClick={handleSuccess}
            >
              {"Wow! get my Paytm Gift card"}
              <ChevronRightIcon />
            </Button>
          </Grid>
        ) : (
          <Grid>
            {data.map((val, index) => (
              <div key={index} style={{ marginBottom: 10 }}>
                <Typography
                  variant="subtitle1"
                  className={classes.titleTypography}
                >
                  {val.title}
                </Typography>
                <Grid container>
                  <Grid item xs={2}>
                    <Avatar src={val.icon} />
                  </Grid>
                  <Grid item xs={10}>
                    <Typography
                      variant="subtitle1"
                      className={classes.cardTypography}
                    >
                      {val.body}
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            ))}
          </Grid>
        )}
        <div className={classes.footer}>
          <Typography variant="caption">{"Powered by"}</Typography>
          <img src={Logo} alt="logo" />
        </div>
      </Grid>
    </Grid>
  );
};

export default HomeComponent;
