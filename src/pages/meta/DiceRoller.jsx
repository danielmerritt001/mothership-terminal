import { useState } from 'react';


function DiceRoller() {

  const [diceRoll, setDiceRoll] = useState(3);
  const [now, setNow] = useState(null); 

  function rollDice(e) {
    const die = e.target.id
    const roll = Math.floor(Math.random()*die + 1);
    displayRoll(roll)
  }

  function displayRoll(roll) {
    setDiceRoll(".")
    setTimeout(() => { setDiceRoll("..") }, 500);
    setTimeout(() => { setDiceRoll("...") }, 1000);
    setTimeout(() => { setDiceRoll(roll) }, 2000);
  }

  return (
   <div className="padding-bottom">
    <details>
      <summary>Dice Roller</summary>
      <div className="details--content">
        Company provided digital dice for recreational purposes ONLY
      </div>
      <div className="button-group">
        <button className="button-group__button" id="10" onClick={rollDice}>1d10</button>
        <button className="button-group__button" id="20" onClick={rollDice}>1d20</button>
        <button className="button-group__button" id="100" onClick={rollDice}>1d100</button>
      </div>
      <div className='dice-display'>{ diceRoll }</div>
    </details>
   </div>
  )
}

export default DiceRoller
