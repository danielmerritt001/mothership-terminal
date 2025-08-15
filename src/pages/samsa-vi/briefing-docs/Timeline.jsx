function Timeline() {

  return (
   <details>
    <summary>Timeline</summary>
    <div className="details--content">
      Information deemed pertinent and necessary for completion of mission. Dates are provided in relation to start of mission using Earth Time.
    </div>
    <div className="details--content">
      <details>
        <summary>9 Years, 11 months, and 3 days prior </summary>
        <div className="details--content">
          Client detects signs of biochemistry on Samsa VI and decided to send scouting team to investigate.
        </div>
      </details>
      <details>
        <summary>1 year, 2 months prior</summary>
        <div className="details--content">
          Skeleton crew of researchers, engineers, and marines arrived on Samsa VI to establish Greta Base and Heron Terraforming Station. They discovered a species of arthropods, labeled as carcinids or “carcs,” and proceeded to terminate on sight.
        </div>
      </details>
      <details>
        <summary>9 months, 1 week, 4 days prior</summary>
        <div className="details--content">
          Colonists captured carc larva for experimentation and study.
        </div>
      </details>
      <details>
        <summary>6 months prior</summary>
        <div className="details--content">
          Greta Base ceased all communications with Client.
        </div>
      </details>
      <details>
        <summary>3 months prior</summary>
        <div className="details--content">
          Client hired The Company to investigate situation.
        </div>
      </details>
      <details>
        <summary>5 weeks, 6 days prior</summary>
        <div className="details--content">
          The <em>Metamorphosis</em> entered Samsa Solar system and found Greta Base unresponsive to hailing.
        </div>
      </details>
      <details>
        <summary>Mission Start</summary>
        <div className="details--content">
          Crew will be ferried onto Samsa VI via dropship. Torrential rainpour expected. No response to radio communication. Mission objectives are:
          <ol>
            <li>Rendezvous with 2ndLt Kaplan, the marine commander of the colony, and assist them in repairing the situation.</li>
            <li>Re-establish satellite communications and get the terraformer back online.</li>
            <li>If all else fails, evacuate Dr. Edem, the mission specialist, as well as the colony’s synthetic science officer, Hinton (or at least retrieve his logic core). The Client has stated that the lives of the rest of the colony are not "mission critical"</li>
          </ol>
        </div>
      </details>
    </div>
  </details>
  )
}

export default Timeline