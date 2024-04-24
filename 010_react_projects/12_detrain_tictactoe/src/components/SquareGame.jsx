export const SquareGame = ({ children, updateBoard, index }) => {
  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div
      className='w-24 h-24 flex items-center justify-center border-2 border-gray-200 text-4xl rounded-md'
      onClick={handleClick}
    >
      {children}
    </div>
  )
}
