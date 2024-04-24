import { useState } from 'react'
import { SquareGame } from './components/SquareGame'
import { TURNS } from './constansts/turns'
import { SquareTurn } from './components/SquareTurn'

function App () {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)

  const updateBoard = (index) => {
    // Si la casilla ya está ocupada, no hacemos nada
    if (board[index] !== null) return

    // Actualizamos el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // Cambiamos el turno
    setTurn(turn === TURNS.X ? TURNS.O : TURNS.X)
  }

  return (
    <>
      <main className='h-screen font-sans bg-[#222] text-gray-200 flex justify-center items-center'>
        <article>
          <h1 className='flex justify-center items-center text-4xl font-semibold mb-3'>Tic tac toe</h1>
          <div className='flex justify-center items-center'>
            <button
              className={`w-24 p-2 m-6 bg-transparent border border-gray-200 text-gray-200 text-sm
                      rounded transition duration-200 font-bold cursor-pointer
                      hover:bg-gray-200 hover:text-gray-800`}
            >
              Reset game
            </button>
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
