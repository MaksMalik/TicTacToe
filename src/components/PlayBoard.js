import React, { useEffect, useState } from 'react'
import "./PlayBoard.css"
import { Button, getTouchRippleUtilityClass } from '@mui/material';

export default function PlayBoard() {
  
  const [newGame, setNewGame] = useState()
  // eslint-disable-next-line
  const [tilesState, setTilesState] = useState(document.querySelectorAll("div.PlayBoard-tile"))
  // eslint-disable-next-line
  const [buttonState, setButtonState] = useState(document.querySelectorAll("div.PlayBoard-button-newGame"))
  // eslint-disable-next-line
  const [xwinning, setXwinning] = useState(0)
    // eslint-disable-next-line
  const [owinning, setOwinning] = useState(0)
    // eslint-disable-next-line
  const [isX, setIsX] = useState(getTouchRippleUtilityClass)
      // eslint-disable-next-line
  const [playArray, setPlayArray] = useState(Array(9).fill(null))

  const buttonNewGame = document.querySelectorAll("div.PlayBoard-winning")

    // eslint-disable-next-line
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

  useEffect(() => {
    setTilesState(document.querySelectorAll("div.PlayBoard-tile"))
    setButtonState(document.querySelectorAll("div.PlayBoard-button-newGame"))
// eslint-disable-next-line
  }, [newGame]);

  const StartNewGame = () => {
    setNewGame(true)
    tilesState.forEach(element => element.classList.add("displayBlock"))

    setTimeout(function () {
      tilesState.forEach(element => element.classList.add("showPlayBoardTile"))
    }, 1); 

    setTimeout(function () {
      tilesState.forEach(element => element.classList.add("transitionDelayZero"))
    }, 20);


    setTimeout(function () {
      buttonState.forEach(element => element.classList.add("hiddenPlayBoardButton"))
    }, 0);
  }

/*     playArray.filter((element) => (element === null)).length === 0  ? tilesState.forEach(element => element.classList.remove("Cross", "Circle")) : console.log("dasdas")
 */

  function handleClick(event) {
    playArray[event.target.id] === null ? ((playArray[event.target.id] = isX ? 'X' : "O") && setIsX(!isX)) : window.alert("This tile is already taken")
    !event.target.classList.contains('Cross', 'Circle') && event.target.classList.add(isX ? "Cross" : "Circle")
    console.log(playArray)
    playArray.filter((element) => (element === null)).length === 0 && tilesState.forEach(element => element.classList.add("pointerNone"))
    playArray.filter((element) => (element === null)).length === 0 && buttonNewGame.forEach(element => element.classList.remove("hiddenPlayBoardButtonRestart"))

  }

  function handleNewGame(event) {
    playArray.filter((element) => (element === null)).length === 0 && tilesState.forEach(element => element.classList.remove("pointerNone", "Circle", "Cross"))
    playArray.filter((element) => (element === null)).length === 0 && setPlayArray(Array(9).fill(null))
    buttonNewGame.forEach(element => element.classList.add("hiddenPlayBoardButtonRestart"))
  }




  return (
    <div className='PlayBoard'>
      <div className='PlayBoard-title'>
        Tic Tac Toe
      </div>
      <div className='PlayBoard-ScoreBoard'>
        <div>x: {xwinning}</div>
        <div>o: {owinning}</div>

      </div>
      <div className='PlayBoard-button-newGame'>
        <Button  className='PlayBoard-button-newGame-button' variant='contained' onClick={StartNewGame}>START NEW GAME</Button>
      </div>
      <div className='PlayBoard-Game'>
        <div className='PlayBoard-row' >
          <div className='PlayBoard-tile displayNone hiddenPlayBoardTile' id="0" value={playArray[0]} onClick={handleClick}></div>
          <div className='PlayBoard-tile displayNone hiddenPlayBoardTile' id="1" value={playArray[1]} onClick={handleClick}></div>
          <div className='PlayBoard-tile displayNone hiddenPlayBoardTile' id="2" value={playArray[2]} onClick={handleClick}></div>
        </div>
        <div className='PlayBoard-row'>
          <div className='PlayBoard-tile displayNone hiddenPlayBoardTile' id="3" value={playArray[3]} onClick={handleClick}></div>
          <div className='PlayBoard-tile displayNone hiddenPlayBoardTile' id="4" value={playArray[4]} onClick={handleClick}></div>
          <div className='PlayBoard-tile displayNone hiddenPlayBoardTile' id="5" value={playArray[5]} onClick={handleClick}></div>
        </div>
        <div className='PlayBoard-row'>
          <div className='PlayBoard-tile displayNone hiddenPlayBoardTile' id="6" value={playArray[6]} onClick={handleClick}></div>
          <div className='PlayBoard-tile displayNone hiddenPlayBoardTile' id="7" value={playArray[7]} onClick={handleClick}></div>
          <div className='PlayBoard-tile displayNone hiddenPlayBoardTile' id="8" value={playArray[8]} onClick={handleClick}></div>
        </div>
      </div>

      <div className='PlayBoard-winning hiddenPlayBoardButtonRestart'>
        <Button className="PlayBoard-winning-button " variant="contained" onClick={handleNewGame}>Start new game</Button>
      </div>

    </div>
  )
}
