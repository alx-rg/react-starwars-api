import React from "react";
import DisplayInfo from "../DisplayInfo/DisplayInfo";
import "../DisplayList/DisplayList.css"

function DisplayList(props) {
  const { list } = props;
  const savedCharacters = list.map((actor) => (
    <div key={actor.name}>
      <DisplayInfo {...actor}/>
      <hr></hr>
    </div>
  ))

  return(
    <div className="List">
      {list.length > 0 && <h2>Saved Characters</h2>}
      <div className="CharacterCard">
        {savedCharacters}
      </div>
    </div>
  )
}

export default DisplayList;