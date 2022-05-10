import React from "react";
import { useState } from 'react';
import DisplayInfo from "../DisplayInfo/DisplayInfo"
import DisplayList from "../DisplayList/DisplayList";
import "../StarWars/StarWars.css"


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
          <input
            onChange={(e) => setId(e.target.value)}
            value={id}
            />
          <button onClick={() => fetchCharInfo(id)}>Submit</button>
        </form>
        <br></br>
        {data && <DisplayInfo {...data} />}
        <br></br>
        <button onClick={() => newCharacter()}><i className="save icon"></i>Save</button>
      </section>
      <section className="List">
        <div>
          <DisplayList list={list}/>
        </div>
      </section>
    </div>
  )
}

export default StarWars