import React from "react";
import Create from "../createOrder/createOrderForm";
import { Container, AppBar, Grow, Grid } from "@material-ui/core";
import useStyles from "../../styles.js";
import "./orderPage.css";

function OrderPage() {
  const classes = useStyles();
  return (
    <div className="order_page">
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          {/* <Typography className="heading" variant="h2" align="center">
            Apparel Order Page
          </Typography> */}
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justifyContent="space-between" alignItems="stretch">
              <Grid item xs={12} sm={4}>
                <AppBar className="create-div" position="static" color="inherit">
                  <Create />
                </AppBar>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default OrderPage;
