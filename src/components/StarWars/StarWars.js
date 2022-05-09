import React from "react";
import { useState } from 'react';
import DisplayInfo from "../DisplayInfo/DisplayInfo"


function StarWars() {
  const [id, setId] = useState(3);
  const [data, setData] = useState(null);
  const [list, setList] = useState([]);
  
  let newList = [];

  async function fetchCharInfo(id) {
    try {
      const res = await fetch(`https://swapi.dev/api/people/${id}`);
      // if (!res.ok) return [null, new Error(res.statusText)];
      const data = await res.json()

      console.log(data)
      const name = data.name

      setData({
        name,
      })
      return [data, null];
    }catch(err) {
      console.log(err);
    }
  }

  function newCharacter() {
    newList.push(data);
    setList(newList);
  }

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
      }}>
        <input
          onChange={(e) => setId(e.target.value)}
          value={id}
        />
        <button onClick={() => fetchCharInfo(id)}>Submit</button>
      </form>
      {data && <DisplayInfo {...data} />}
      <button onClick={() => newCharacter()}>Save</button>
    </div>
  )
}

export default StarWars