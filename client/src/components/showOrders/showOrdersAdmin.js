import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
import "./showOrders.css";
// import axios from "axios";
import IconButton from "@material-ui/core/IconButton";
import PaidRoundedIcon from "@mui/icons-material/PaidRounded";
import DeleteIcon from "@material-ui/icons/Delete";
import { fetchPath } from "../../hooks/fetchPaths";
import { makeStyles } from "@material-ui/core/styles";
import { useAuthContext } from "../../hooks/useAuthContext";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function ShowOrdersAdmin() {
  const classes = useStyles();
  const [apparelList, setApparelList] = useState([]);
  const [paid, setPaid] = useState();

  const { user } = useAuthContext();

  //Delete workout handling
  const deleteApparel = async (id) => {
    if (!user) {
      return;
    }

    const response = await fetch(`${fetchPath}${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    if (response.ok) {
      window.location.reload(false);
    }
  };

  // Mark as paid
  const handlePaid = async (id) => {
    const response = await fetch(`${fetchPath}`, {
      method: "Get",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const orders = await response.json();
    console.log(typeof orders);
    if (response.ok) {
      const [results] = orders.filter((apparel) => apparel._id.includes(id));
      console.log(results);
      console.log(typeof results);
      if (results.ispaid === "NO") {
        setPaid("YES");
      } else {
        setPaid("NO");
      }
      console.log(paid);
      const name = results.name;
      const appareltype = results.appareltype;
      const size = results.size;
      const payment = results.payment;
      const ispaid = paid;
      const change = { name, appareltype, size, payment, ispaid };

      console.log(typeof change);
      console.log(change);
      //patch change in paid status

      const response = await fetch(fetchPath + results._id, {
        method: "PATCH",
        body: JSON.stringify({ change }),
        headers: {
          "content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();
      console.log(json);
      if (!response.ok) {
        console.log(`hey ${json.error}`);
      }
      if (response.ok) {
        console.log(change);
      }
    }
  };

  //fetch all orders on load
  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch(fetchPath, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();
      if (response.ok) {
        setApparelList(json);
      }
    };

    if (user) {
      fetchOrders();
    }
  }, [user]);

  return (
    <>
      <h2>All Orders</h2>
      <TableContainer className="show_orders">
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <h3>Name</h3>
              </TableCell>
              <TableCell align="center">
                <h3>Apparel Type</h3>
              </TableCell>
              <TableCell align="center">
                <h3>Size</h3>
              </TableCell>
              <TableCell align="center">
                <h3>Payment Type</h3>
              </TableCell>
              <TableCell align="center">
                <h3>Paid</h3>
              </TableCell>
              <TableCell align="center">
                <h3>Mark paid/not paid</h3>
              </TableCell>
              <TableCell align="center">
                <h3>Delete Order</h3>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {apparelList.map((apparel, key) => (
              <TableRow key={key}>
                <TableCell component="th" scope="row">
                  {apparel.name}
                </TableCell>
                <TableCell align="center">{apparel.appareltype}</TableCell>
                <TableCell align="center">{apparel.size}</TableCell>
                <TableCell align="center">{apparel.payment}</TableCell>
                <TableCell align="center">{apparel.ispaid}</TableCell>
                <TableCell align="center">
                  <IconButton
                    aria-label="paid"
                    className={classes.margin}
                    onClick={() => {
                      handlePaid(apparel._id);
                    }}
                  >
                    <PaidRoundedIcon color="primary" />
                  </IconButton>
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    aria-label="delete"
                    className={classes.margin}
                    onClick={() => {
                      deleteApparel(apparel._id);
                    }}
                  >
                    <DeleteIcon color="primary" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
