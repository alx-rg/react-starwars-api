function DisplayInfo(props) {
  const { name, height, birth, skin_color, homeWorld } = props;
  const filmList = props.filmsTitle.map((title) => {
    return (
      <li key={title}>{title}</li>
    )
  })


  return (
    <div>
      <div>
        <h3>Name: {name}</h3>
        <p>Height: {height} cm</p><br></br>
        <p>DOB: {birth}</p><br></br>
        <p>Metal/Skin Color: {skin_color}</p>
        <p>Homeworld: {homeWorld}</p>
        <p>{name} appears in:</p>
        <ul>{filmList}</ul>
      </div>
    </div>
  )
}

export default DisplayInfo