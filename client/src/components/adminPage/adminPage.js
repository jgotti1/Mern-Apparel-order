import "../adminPage/adminPage.css";
import "../../App.css";

import "../createOrder/createOrderForm.css";
import useStyles from "../../styles.js";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import Orders from "../showOrders/showOrdersAdmin";
import Create from "../createOrder/createOrderForm";

function Admin() {
  const classes = useStyles();

  return (
    <div className="adminPage App">
      <Container maxWidth="xlg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className="heading" variant="h3" align="center">
            Apparel Orders ADMIN Page
          </Typography>
        </AppBar>
        <Grow in>
          <Container maxWidth="xlg">
            <Grid container justifyContent="left" gap="20px" alignItems="stretch">
              <Grid item xs={12} sm={6} md={3.2} lg={"2"}>
                <AppBar className="create-div" position="static" color="inherit">
                  <Create />
                </AppBar>
              </Grid>

              <Grid item xs={12} sm={12} md={8.5} lg={9.8} className="grid">
                <AppBar className="create-div" position="static" color="inherit">
                  <Orders />
                </AppBar>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default Admin;
