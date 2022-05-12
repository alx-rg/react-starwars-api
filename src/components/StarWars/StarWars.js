import React from "react";
import { useState } from 'react';
import DisplayInfo from "../DisplayInfo/DisplayInfo"
import DisplayList from "../DisplayList/DisplayList";
import "../StarWars/StarWars.css"
import Button from '@mui/material/Button';
import { ButtonGroup, TextField, Typography, Container, Paper, Grid } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save"
import SearchIcon from "@mui/icons-material/Search"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function StarWars() {
  let [id, setId] = useState(3);
  const [data, setData] = useState(null);
  const [list, setList] = useState([]);
  
  async function fetchCharInfo(id) {
    try {
      const res = await fetch(`https://swapi.dev/api/people/${id}`);
      // if (!res.ok) return [null, new Error(res.statusText)];
      const data = await res.json()
      
      const homeLink = data.homeworld;
      const homeRes = await fetch(homeLink);
      const homeData = await homeRes.json();
      const homeWorld = homeData.name;


      const filmsRes = await Promise.all(data.films.map((film) => fetch(film)));
      const filmsData = await Promise.all(filmsRes.map((filmRes) => filmRes.json()));
      data.films = filmsData;
      const filmsTitle = filmsData.map(film => film.title)
      console.log(filmsTitle)
      // let film = []
      // const filmsArray = data.films.map(film)
      // console.log(filmsArray)
      // const filmsRes = await fetch(filmsArray)
      // const filmsMap = filmsRes.map(filmsRes)
      // const films


      console.log(data)
      const name = data.name
      const height = data.height;
      const birth = data.birth_year;
      const skin_color = data.skin_color;

      setData({
        name,
        height,
        birth,
        skin_color,
        homeWorld,
        filmsTitle,
      })
      return [data, null];
    }catch(err) {
      console.log(err);
    }
  }

  function newCharacter() {
    const newerList = [...list, data]
    console.log(newerList)
    setList(newerList)
  }

  return (
    <Container maxWidth="md"> 
      <div className="StarWars">
        <section className="Input">
          <form onSubmit={e => {
            e.preventDefault()
            if (id < "1") {
              id = "1"
            } else if (id === "17") {
              id = "18"
            } else if (id > "83") {
              id = "83"
            };
          }}>
            
            <Typography variant="h5">
              Search a number:
            </Typography>
            <TextField
              variant="filled" 
              color="primary"
              type="number"
              label="Pick a Number (But not 17)"
              onChange={(e) => setId(e.target.value)}
              value={id}
            />
            {/* <input
              onChange={(e) => setId(e.target.value)}
              value={id}
              /> */}
          </form>
          <ButtonGroup variant="contained" size="large">
          <Button startIcon={<SearchIcon />} onClick={() => fetchCharInfo(id)}>Search</Button>
          <Button startIcon={<SaveIcon />} onClick={() => newCharacter()}>Save</Button>
          </ButtonGroup>
          <br></br>
          {data && <DisplayInfo {...data} />}
          <br></br>
        </section>
        <section className="List">
          <div>
            <DisplayList list={list}/>
          </div>
        </section>
      </div>
    </Container>
  )
}

export default StarWars