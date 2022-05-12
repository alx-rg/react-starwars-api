import React from "react";
import { Typography, AppBar, Toolbar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/StarBorder"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Home = () => {
  return(
    <AppBar color="primary">
      <Toolbar>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Typography color="primary" >
          <h3>Alex Ross / ACS-3330-Single-Page-Web-Applications / Final</h3>
        </Typography>
      </Toolbar>
    </AppBar>

  )
}

export default Home