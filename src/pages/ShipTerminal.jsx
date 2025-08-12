import PlanetData from "./samsa-vi/briefing-docs/PlanetData.jsx";
import Timeline from "./samsa-vi/briefing-docs/timeline.jsx";

function ShipTerminal() {

  return (
   <div class="padding-bottom">
    <details>
      <summary>Ship Terminal</summary>
      <div className="details--content">
        Data provided by the Company located aboard the <em>Metamorphosis</em>
      </div>
      <div className="details--content">
        <PlanetData />
        <Timeline />
      </div>
    </details>
   </div>
  )
}

export default ShipTerminal
