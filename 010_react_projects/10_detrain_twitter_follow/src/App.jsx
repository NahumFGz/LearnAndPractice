import TwitterFollowCard from './components/TwitterFollowCard'

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
  return (
    <>
      <div className='text-white flex flex-col gap-3'>
        {users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            name={name}
            initialIsFollowing={isFollowing}
          />
        ))}
      </div>
    </>
  )
}
