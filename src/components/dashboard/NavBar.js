import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import "./dashboard.css";
class NavBar extends Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout(e) {
    window.localStorage.removeItem("token");
  }

  render() {
    return (
      <AppBar position="static" style={{ width: "100%" }}>
        <Toolbar
          style={{
            display: "flexbox",
            justifyContent: "space-between",
            width: "100%"
          }}
        >
          <Typography variant="title" color="inherit">
            Link Brain
          </Typography>
          <Button
            onClick={this.handleLogout}
            color="inherit"
            style={{ backgroundColor: "#0984e3", marginRight: "40px" }}
          >
            <Link to="/sign-in" className="logout-btn">
              Logout
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default NavBar;
