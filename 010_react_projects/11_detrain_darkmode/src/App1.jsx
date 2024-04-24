import { useEffect, useState } from 'react'

function App () {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }

    return 'light'
  })

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  }, [theme])

  const handleChangeTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
    console.log('Theme changed to:', theme)
  }

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
