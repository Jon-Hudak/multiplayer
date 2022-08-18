import React, { useEffect } from 'react'
import { PlayerButton } from './Styles/Button';
import { BtnBox } from './Styles/BtnBox'
import { BtnCont } from './Styles/BtnCont';
import { ButtonText } from './Styles/ButtonText';

function ButtonContainer({ players, filter, setFilter }) {
  
  useEffect(() => {
    console.log(filter);
  
  },[filter])
  

  function renderButtons(player){
    let buttonToggle = "orange"
    if (filter[player]===true){
      buttonToggle = "green"

    }
    if(player=="undefined"){
      return null;
    }
    return <PlayerButton className={`btn ${buttonToggle}`} onClick={e=>handleClick(e.target.value, filter)}   value={player} key={player}>	<BtnBox onClick={e=>handleClick(e.target.value, filter)} inputColor={buttonToggle} className={`${buttonToggle} btnBox`}>■ </BtnBox><ButtonText>{player}</ButtonText></PlayerButton> 
  }

  function handleClick(e, filtered){
    filtered[e]=!filtered[e];
    console.log(filtered[e]);
    
    setFilter(old=>({...old, filtered}));
    
    
  }

  return (
    <BtnCont>
      {Object.keys(players).map(players=>renderButtons(players))}
      
      
      
    </BtnCont>
  )
}

export default ButtonContainer