import React, { useState } from "react";
import Box from "@mui/material/Box";

import FormControl from "@mui/material/FormControl";

import TextField from "@mui/material/TextField";
// import option from "@mui/material/option";

import "./createOrderForm.css";
import { fetchPath } from "../../hooks/fetchPaths";
import { useAuthContext } from "../../hooks/useAuthContext";

// import axios from "axios";

function CreateOrderForm() {
  const { user } = useAuthContext();
  const [apparel, setApparel] = useState({
    name: "",
    appareltype: "",
    size: "",
    payment: "",
  });

  const createApparel = async (e) => {
    e.preventDefault();
    console.log(apparel);
    const response = await fetch(fetchPath, {
      method: "POST",
      body: JSON.stringify(apparel),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();
    console.log(json);
    if (response.ok) {
      setApparel({
        name: "",
        appareltype: "",
        size: "",
        payment: "",
      });
      window.location.reload(false);
    }
  };

  return (
    <div className="create-div">
      <h2>Create Order Form</h2>
      <Box>
        <TextField
          helperText="Please enter your name"
          id="demo-helper-text-aligned"
          label="Name"
          value={apparel.name}
          onChange={(event) => {
            setApparel({ ...apparel, name: event.target.value });
          }}
        />
      </Box>
      <br></br>
      <Box>
        <FormControl sx={{ minWidth: "220px" }}>
          <label id="demo-simple-select-label">Apparel Type</label>
          <select
            labelid="demo-simple-select-label"
            id="demo-simple-select"
            value={apparel.appareltype}
            label="Apparel Type"
            onChange={(event) => {
              setApparel({ ...apparel, appareltype: event.target.value });
            }}
          >
            <option value={""}>**apparel type**</option>
            <option value={"Red Hoodie"}>Red Hoodie</option>
            <option value={"Mens Tee"}>Mens Tee</option>
            <option value={"Womens Tee"}>Womens Tee</option>
            <option value={"Womens Crop"}>Womens Crop</option>
          </select>
        </FormControl>
      </Box>
      <br></br>
      <Box>
        <FormControl sx={{ minWidth: "220px" }}>
          <label id="demo-simple-select-label">Size</label>
          <select
            labelid="demo-simple-select-label"
            id="demo-simple-select"
            placeholder="size"
            value={apparel.size}
            label="Size"
            onChange={(event) => {
              setApparel({ ...apparel, size: event.target.value });
            }}
          >
            <option value={""}>**select a size**</option>
            <option value={"Small"}>Small</option>
            <option value={"Medium"}>Medium</option>
            <option value={"Large"}>Large</option>
            <option value={"XLarge"}>XLarge</option>
            <option value={"XXLarge"}>XXLarge</option>
          </select>
        </FormControl>
      </Box>
      <br></br>
      <Box>
        <FormControl sx={{ minWidth: "220px" }}>
          <label id="demo-simple-select-label">Payment</label>
          <select
            labelid="demo-simple-select-label"
            id="demo-simple-select"
            value={apparel.payment}
            label="Payment Type"
            onChange={(event) => {
              setApparel({ ...apparel, payment: event.target.value });
            }}
          >
            <option value={""}>**payment type**</option>
            <option value={"Card"}>Card</option>
            <option value={"Venmo"}>Venmo</option>
            <option value={"Cash"}>Cash</option>
          </select>
        </FormControl>
      </Box>
      <br />
      <button className="create_button" variant="contained" color="primary" onClick={createApparel}>
        Enter Order
      </button>
    </div>
  );
}

export default CreateOrderForm;
