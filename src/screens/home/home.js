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
import GiftCard from "./images/image10.png";
import GiftCard1 from "./images/image11.png";
import Logo from "./images/logo.svg";
import icon1 from "./images/whatsapp.png";
import icon2 from "./images/bookmark.png";
import icon3 from "./images/close.png";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    background: "linear-gradient(180deg, black 225px, #fff 0, #fff 100%)",
    // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
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
    marginBottom: 10,
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
    "&:hover": {
      backgroundColor: "#1aa5e7",
    },
  },
  img: {
    height: "150px",
    width: "300px",
    borderRadius: "20px",
  },
  logo: {
    marginTop: "10px",
    height: "170px",
    width: "300px",
    marginBottom: "-5px",
    // padding: "10px",
  },
  headLine: {
    textAlign: "center",
    background: "-webkit-linear-gradient(#0F3, #F00)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  typography: {
    alignSelf: "center",
    textAlign: "center",
    fontWeight: 200,
    marginBottom: 10,
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
        <img src={GiftCard} alt="logo" className={classes.logo} />
        {/* <Typography variant="h6" className={classes.headLine}>
          Congratulations
        </Typography> */}
        <Paper elevation={2} className={classes.paperComp}>
          {/* <Typography variant={"h6"}>Gift Card</Typography> */}
          {/* <img src={Logo} alt="logo" className={classes.img} /> */}
          <img src={GiftCard1} alt="logo" className={classes.img} />
        </Paper>
        {!success ? (
          <>
            <Typography variant="h6" className={classes.typography}>
              You have WON Paytm Gift Card of Rs.200 for{" "}
              <b>placing the order on Man Matters</b>
            </Typography>
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
            </Button>
          </>
        ) : (
          <Grid>
            {data.map((val, index) => (
              <div style={{ marginBottom: 10 }}>
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
