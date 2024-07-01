
export const CardStarship = ({Starship}) => {
  return (
    <div className="card" style={{width:'18rem', height:'20rem'}}>
      <div className="card-body">
        <h5 className="card-title">{Starship.name}</h5>
        <p className="card-text">Name: {Starship.name}</p>
      </div>
    </div>
  )
}

export default CardStarship
