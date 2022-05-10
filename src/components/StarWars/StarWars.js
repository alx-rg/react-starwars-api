import React from "react";
import { useState } from 'react';
import DisplayInfo from "../DisplayInfo/DisplayInfo"
import DisplayList from "../DisplayList/DisplayList";
import "../StarWars/StarWars.css"


function StarWars() {
  const [id, setId] = useState(3);
  const [data, setData] = useState(null);
  const [list, setList] = useState([]);
  
  async function fetchCharInfo(id) {
    try {
      const res = await fetch(`https://swapi.dev/api/people/${id}`);
      // if (!res.ok) return [null, new Error(res.statusText)];
      const data = await res.json()

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
          e.preventDefault();
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