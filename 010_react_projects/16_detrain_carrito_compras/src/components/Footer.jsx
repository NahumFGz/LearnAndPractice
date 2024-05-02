export function Footer ({ filters }) {
  return (
    <footer className='fixed left-4 bottom-4 text-left bg-black bg-opacity-90 p-2 rounded-lg'>
      {
        JSON.stringify(filters)
      }
      {/*
      <h4 className='text-white text-sm sm:text-base'>
        Prueba técnica de React ⚛️ － <span className='text-blue-500'>@midudev</span>
      </h4>
      <h5 className='text-white text-xs sm:text-sm'>Shopping Cart con useContext &amp; useReducer</h5>
      */}
    </footer>
  )
}

// bg-opacity-70 p-2 sm:p-4 rounded-full shadow-lg backdrop-blur-md
