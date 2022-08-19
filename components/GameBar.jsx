import React from 'react'
import { GameBarSt } from './Styles/GameBarSt'

function GameBar( { children }) {
  return (<>
     { <GameBarSt>{children}</GameBarSt> }
     </>
  )
}

export default GameBar