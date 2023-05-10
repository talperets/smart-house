import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function NoMatch() {
  return (
    <div>
      <h1>Not Found</h1>
      <p>The page you are looking for could not be found.</p>
      <Link to="/">
        <Button variant="contained">Back to Home Page</Button>
      </Link>
    </div>
  );
}
