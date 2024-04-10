import confetti from 'canvas-confetti'

import { useState } from 'react'
import { Square } from './components/Square'
import { WinnerModal } from './components/WinnerModal'

import { TURNS } from './constants.js'
import { checkWinnerFrom, checkEndGame } from './logic/board.js'

function App () {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const updateBoard = (index) => {
    // no actualizamos estado si ya hay valor
    if (board[index] || winner) return winner ? console.log('hay ganador') : console.log('hay datos')

    // Actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // ! GUARDAR PARTIDA
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', turn)

    // Revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      // Actualiza el estado de forma asincrona
      setWinner(newWinner)
      confetti()
    } else if (checkEndGame(newBoard)) {
      // TODO: Verificar si el juego acabó
      setWinner(false)
    }
  }

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset game</button>
      <section className='game'>
        {
          board.map((_, index) => (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {board[index]}
            </Square>
          )
          )
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
