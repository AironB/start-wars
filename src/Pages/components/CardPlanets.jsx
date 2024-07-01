
export const CardPlanets = () => {
  return (
    <div className="card" style={{width:'18rem', height:'20rem'}}>
        <div className="card-body">
            <h5 className="card-title">{planet.name}</h5>
            <p className="card-text">Name: {planet.name}</p>
        </div>
    </div>
  )
}
