import React, { useEffect, useState } from 'react'
import "./PlayBoard.css"
import { Button } from '@mui/material';

export default function PlayBoard() {
  
  const [newGame, setNewGame] = useState()
  // eslint-disable-next-line
  const [tilesState, setTilesState] = useState()
  // eslint-disable-next-line
  const [buttonState, setButtonState] = useState()

  

  const tiles = document.querySelectorAll("div.PlayBoard-tile")
  const button = document.querySelectorAll("div.PlayBoard-button-newGame")

  useEffect(() => {
    setTilesState(tiles)
    setButtonState(button)
// eslint-disable-next-line
  }, [newGame]);

  const StartNewGame = () => {
    console.log(tiles)
    setNewGame(true)
    tiles.forEach(element => element.classList.add("displayBlock"))

    setTimeout(function () {
      tiles.forEach(element => element.classList.add("showPlayBoardTile"))
    }, 1); 

    setTimeout(function () {
      tiles.forEach(element => element.classList.add("transitionDelayZero"))
    }, 20);


    setTimeout(function () {
      button.forEach(element => element.classList.add("hiddenPlayBoardButton"))
    }, 0);
  }



  return (
    <div className='PlayBoard'>
      <div className='PlayBoard-title'>
        Tic Tac Toe
      </div>
      <div className='PlayBoard-button-newGame'>
        <Button  className='PlayBoard-button-newGame-button' variant='contained' onClick={StartNewGame}>START NEW GAME</Button>
      </div>
      <div className='PlayBoard-Game'>
        <div className='PlayBoard-row' >
          <div className='PlayBoard-tile displayNone hiddenPlayBoardTile Cross'></div>
          <div className='PlayBoard-tile displayNone hiddenPlayBoardTile Circle'></div>
          <div className='PlayBoard-tile displayNone hiddenPlayBoardTile'></div>
        </div>
        <div className='PlayBoard-row'>
          <div className='PlayBoard-tile displayNone hiddenPlayBoardTile'></div>
          <div className='PlayBoard-tile displayNone hiddenPlayBoardTile'></div>
          <div className='PlayBoard-tile displayNone hiddenPlayBoardTile'></div>
        </div>
        <div className='PlayBoard-row'>
          <div className='PlayBoard-tile displayNone hiddenPlayBoardTile'></div>
          <div className='PlayBoard-tile displayNone hiddenPlayBoardTile'></div>
          <div className='PlayBoard-tile displayNone hiddenPlayBoardTile'></div>
        </div>
      </div>
    </div>
  )
}
