import useChangeTheme from './hooks/useChangeTheme'

function App () {
  const { handleChangeTheme } = useChangeTheme()

  return (
    <div className='h-screen flex items-center justify-center dark:bg-neutral-900'>
      <button
        className={`bg-slate-200 px-4 py-2 rounded 
                    hover:bg-slate-300 
                    dark:bg-slate-950 dark:text-white dark:hover:bg-slate-800`}
        onClick={handleChangeTheme}
      >
        Change Theme
      </button>
    </div>
  )
}

export default App
