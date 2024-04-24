import { useState } from 'react'

export default function TwitterFollowCard ({ name, userName = 'unknown', initialIsFollowing = false }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
  const imgSource = `https://unavatar.io/${userName}`

  const handleClick = () => {
    setIsFollowing(!isFollowing)
    console.log('isFollowing', isFollowing)
  }

  return (
    <article key={userName} className='flex gap-4'>
      <header className='flex items-center gap-2'>
        <img
          className='w-12 h-12 rounded-full'
          alt={`El avatar de ${userName}`}
          src={imgSource}
        />
        <div className='flex flex-col text-sm w-[150px]'>
          <strong>{name}</strong>
          <span>{`@${userName}`}</span>
        </div>
      </header>

      <aside className='flex items-center ml-auto text-sm font-bold'>
        {
            isFollowing
              ? (
                <button
                  className={`w-40 py-1 group/follow border border-white rounded-full bg-transparent 
                        hover:bg-opacity-10 hover:bg-red-500 hover:text-red-600 hover:border-red-600
                        transition ease-in-out delay-50`}
                  onClick={handleClick}
                >
                  <span className='block group-hover/follow:hidden'>Siguiendo</span>
                  <span className='hidden group-hover/follow:block'>Dejar de seguir</span>
                </button>
                )
              : (
                <button
                  className='w-20 py-1 border border-white rounded-full text-black bg-white hover:opacity-80'
                  onClick={handleClick}
                >
                  <span>Seguir</span>
                </button>
                )
        }
      </aside>
    </article>
  )
}
