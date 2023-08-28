import React from "react";
import { Button } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";

import { auth } from "../firebase";

function SignOut() {
  return (
    <div className="header">
      <Button
        onClick={() => auth.signOut()}
        style={{ color: "white", fontSize: "15px" }}
      >
        Sign Out
      </Button>
      <h3>{auth.currentUser.displayName}</h3>
      <CallIcon />
    </div>
  );
}

export default SignOut;