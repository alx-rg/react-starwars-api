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
        <p>Name: {name}</p>
        <p>Height: {height} cm</p>
        <p>DOB: {birth}</p>
        <p>Metal/Skin Color: {skin_color}</p>
        <p>Homeworld: {homeWorld}</p>
        <p>{name} appears in:</p>
        <ul>{filmList}</ul>
      </div>
    </div>
  )
}

export default DisplayInfo