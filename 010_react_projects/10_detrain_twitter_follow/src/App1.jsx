export default function App () {
  const users = [
    {
      userName: 'midudev',
      name: 'Miguel Ángel Durán',
      isFollowing: true
    },
    {
      userName: 'josi_09_01',
      name: 'Jossy TS',
      isFollowing: true
    },
    {
      userName: 'nahumfgz',
      name: 'Nahum Flores',
      isFollowing: false
    },
    {
      userName: 'pheralb',
      name: 'Pablo H.',
      isFollowing: false
    }
  ]

  const imgSource = (userName) => `https://unavatar.io/${userName}`

  return (
    <>
      <div className='text-white flex flex-col gap-3'>
        {users.map(({ userName, name, isFollowing }) => (
          <article key={userName} className='flex gap-4'>
            <header className='flex items-center gap-2'>
              <img
                className='w-12 h-12 rounded-full'
                alt={`El avatar de ${userName}`}
                src={imgSource(userName)}
              />
              <div className='flex flex-col text-sm w-[150px]'>
                <strong>{name}</strong>
                <span>{`@${userName}`}</span>
              </div>
            </header>

            <aside className='flex items-center ml-auto'>
              <button
                className={`border border-white px-10 py-1 rounded-full text-sm font-bold relative duration-200 ease-all
                  ${isFollowing ? 'bg-transparent hover:bg-opacity-10 hover:bg-red-500 hover:text-red-700 hover:border-red-900' : 'text-black bg-white hover:opacity-80'}`}
              >
                <span>
                  {isFollowing ? 'Siguiendo' : 'Seguir'}
                </span>
                {isFollowing &&
                (
                  <span className='hidden'>
                    Dejar de seguir
                  </span>
                )}
              </button>
            </aside>
          </article>
        ))}
      </div>
    </>
  )
}
