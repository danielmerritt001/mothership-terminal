import MarineBarracks from "./crew-habitat/MarineBarracks.jsx";
import Medbay from "./crew-habitat/Medbay.jsx";
import GretaMap from "./command-center/GretaMap.jsx";

function GretaBase() {
  return (
    <details>
      <summary>Greta Base</summary>
      <div className="details--content">
        {/* <MarineBarracks /> */}
        <Medbay />
        <GretaMap />
      </div>
    </details>
  )
}

export default GretaBase