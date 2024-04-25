export default function ResetButton ({ children, resetGame }) {
  return (
    <button
      className={`w-24 p-2 m-6 bg-transparent border border-gray-200 text-gray-200 text-sm
                      rounded transition duration-200 font-bold cursor-pointer
                      hover:bg-gray-200 hover:text-gray-800`}
      onClick={resetGame}
    >
      {children}
    </button>
  )
}
