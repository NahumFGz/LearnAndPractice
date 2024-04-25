import { useState } from 'react'
import { SquareGame } from './components/SquareGame'
import { TURNS } from './constansts/turns'
import { SquareTurn } from './components/SquareTurn'
import ResetButton from './components/ResetButton'
import { checkWinnerFrom, checkEndGame } from './logic/board'

function App () {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    // Si la casilla ya está ocupada, no hacemos nada
    if (board[index] !== null || winner) return winner ? console.log('Hay un ganador') : console.log('Casilla ocupada')

    // Actualizamos el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // Cambiamos el turno
    setTurn(turn === TURNS.X ? TURNS.O : TURNS.X)

    // Comprobamos si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <>
      <main className='h-screen font-sans bg-[#222] text-gray-200 flex justify-center items-center'>
        <article>
          <h1 className='flex justify-center items-center text-4xl font-semibold mb-3'>Tic tac toe</h1>
          <div className='flex justify-center items-center'>
            <ResetButton
              resetGame={resetGame}
            >
              Reset game
            </ResetButton>
          </div>

          <section className='grid grid-cols-3 gap-2'>
            {
              Array.from({ length: 9 }).map((_, index) => (
                <SquareGame
                  key={index}
                  index={index}
                  updateBoard={updateBoard}
                >
                  {board[index]}
                </SquareGame>
              ))
            }
          </section>

          <section className='mt-5 flex items-center justify-center'>

            <SquareTurn isTurn={turn === TURNS.X}>
              {TURNS.X}
            </SquareTurn>
            <SquareTurn isTurn={turn === TURNS.O}>
              {TURNS.O}
            </SquareTurn>

          </section>
        </article>
      </main>
    </>
  )
}

export default App
