export const SquareTurn = ({ children, isTurn }) => {
  const baseClass = 'w-16 h-16 flex items-center justify-center text-4xl rounded-md'
  const turnClass = isTurn ? `${baseClass} bg-cyan-700` : baseClass

  return (
    <div
      className={turnClass}
    >
      {children}
    </div>
  )
}
