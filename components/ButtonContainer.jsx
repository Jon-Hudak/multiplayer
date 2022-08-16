import React from 'react'

function ButtonContainer({ players, filteredPlayers}) {

  function renderButtons(player){
    return <button key={player}> {player} </button>
  }
  console.log(players)

  return (
    <div className='buttonContainer'>
      {players.map(players=>renderButtons(players))}
    </div>
  )
}

export default ButtonContainer