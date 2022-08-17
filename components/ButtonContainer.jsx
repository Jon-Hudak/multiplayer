import React from 'react'

function ButtonContainer({ players, filteredPlayers}) {
  
  function renderButtons(player){
    return <button onClick={e=>handleClick(e.target.value)} value={player} className="btn" key={player}> {player} </button>
  }

  function handleClick(e){

  }

  return (
    <div className='buttonContainer'>
      {players.map(players=>renderButtons(players))}
    </div>
  )
}

export default ButtonContainer