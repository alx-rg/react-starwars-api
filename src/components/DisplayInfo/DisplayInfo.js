function DisplayInfo(props) {
  const { name, height, birth, skin_color } = props;

  return (
    <div>
      <div>
        <h3>Name: {name}</h3>
        <small>Height: {height} cm</small><br></br>
        <small>DOB: {birth}</small><br></br>
        <small>Metal/Skin Color: {skin_color}</small>
      </div>
    </div>
  )
}

export default DisplayInfo