import DiceRoller from "./meta/DiceRoller.jsx";
import PlanetData from "./samsa-vi/briefing-docs/PlanetData.jsx";
import Timeline from "./samsa-vi/briefing-docs/Timeline.jsx";

function ShipTerminal() {

  return (
   <div className="padding-bottom">
    <details>
      <summary>Ship Terminal</summary>
      <div className="details--content">
        Data provided by The Company located aboard the <em>Metamorphosis</em>
      </div>
      <div className="details--content">
        <PlanetData />
        <Timeline />
        <DiceRoller />
      </div>
    </details>
   </div>
  )
}

export default ShipTerminal
