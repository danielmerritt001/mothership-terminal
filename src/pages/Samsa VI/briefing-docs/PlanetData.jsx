function PlanetData() {

  return (
   <details>
    <summary>Planet Data</summary>
    <div className="details--content">
      Samsa VI s a super Earth exoplanet that orbits an M-type star. Its mass is 1.2 Earths  and is 0.0649 AU from its star. 
    </div>
    <div className="details--content">
      <details>
        <summary>Orbit Cycle</summary>
        <div className="details--content">
          It takes 19.5 Earth days to complete one orbit of its star,
        </div>
      </details>
      <details>
        <summary>Day Cycle</summary>
        <div className="details--content">
          A day on Samsa VI takes 35 Earth hours.
        </div>
      </details>
    </div>
  </details>
  )
}

export default PlanetData