import { useEffect, useState } from 'react'

function App () {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log('useEffect - enabled:', enabled)

    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove - client:', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('mousemove', handleMove)
    }

    return () => {
      console.log('useEffect - cleanup')
      window.removeEventListener('mousemove', handleMove)
    }
  }, [enabled])

  const handleClick = () => {
    setEnabled(!enabled)
  }

  return (
    <>
      <section className='h-screen flex items-center justify-center'>
        <div>
          <div style={{
            position: 'absolute',
            backgroundColor: 'rgba(0,0,0,0.5)',
            border: '1px solid #fff',
            borderRadius: '50%',
            opacity: 0.8,
            pointerEvents: 'none',
            left: -20,
            top: -20,
            width: 40,
            height: 40,
            transform: `translate(${position.x}px, ${position.y}px)`
          }}
          />

          <button
            className={`border-[2px] px-4 py-1 rounded-lg text-white bg-slate-700
                        hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500`}
            onClick={handleClick}
          >
            {enabled ? 'Desactivar' : 'Activar'} seguir puntero
          </button>
        </div>
      </section>
    </>
  )
}

export default App
