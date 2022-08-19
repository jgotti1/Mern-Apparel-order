import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@mui/material/Paper";
import "./showOrders.css";
// import axios from "axios";

import { fetchPath } from "../../hooks/fetchPaths";
import { useAuthContext } from "../../hooks/useAuthContext";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function ShowOrders() {
  const classes = useStyles();
  const [apparelList, setApparelList] = useState([]);

  const { user } = useAuthContext();

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
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead className="top_row">
            <TableRow>
              <TableCell>
                <h3>Name</h3>
              </TableCell>
              <TableCell align="right">
                <h3>Apparel Type</h3>
              </TableCell>
              <TableCell align="right">
                <h3>Size</h3>
              </TableCell>
              <TableCell align="right">
                <h3>Payment Type</h3>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {apparelList.map((apparel, key) => (
              <TableRow key={key}>
                <TableCell component="th" scope="row">
                  {apparel.name}
                </TableCell>
                <TableCell align="right">{apparel.appareltype}</TableCell>
                <TableCell align="right">{apparel.size}</TableCell>
                <TableCell align="right">{apparel.payment}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
