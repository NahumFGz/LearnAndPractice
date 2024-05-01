function App () {
  return (

    <div className='mt-40 mx-80 border py-10'>
      {/* //? flex basis */}
      <p>Flex basis</p>
      <div className='flex flex-row gap-2'>
        <div className='basis-1/2 border rounded p-2 w-24'>01</div>
        <div className='basis-1/4 border rounded p-2 w-24'>02</div>
        <div className='basis-1/4 border rounded p-2 w-24'>03</div>
      </div>

      {/* //? flex direction */}
      <p className='mt-[20px]'>Flex direction row</p>
      <div className='flex flex-row gap-2'>
        <div className='border rounded p-2 w-24'>01</div>
        <div className='border rounded p-2 w-24'>02</div>
        <div className='border rounded p-2 w-24'>03</div>
      </div>

      <div className='flex flex-row-reverse gap-2'>
        <div className='border rounded p-2 w-24'>01</div>
        <div className='border rounded p-2 w-24'>02</div>
        <div className='border rounded p-2 w-24'>03</div>
      </div>

      {/* //? flex direction column */}
      <p className='my-[20px]'>Flex direction column</p>
      <div className='flex flex-col gap-2'>
        <div className='border rounded p-2 w-24'>01</div>
        <div className='border rounded p-2 w-24'>02</div>
        <div className='border rounded p-2 w-24'>03</div>
      </div>

      <div className='flex flex-col-reverse gap-2'>
        <div className='border rounded p-2 w-24'>01</div>
        <div className='border rounded p-2 w-24'>02</div>
        <div className='border rounded p-2 w-24'>03</div>
      </div>

      {/* //? flex wrap */}
      {/* Por defecto */}
      <p className='my-[20px]'>Flex wrap</p>
      <div className='flex flex-row flex-nowrap'>
        <div className='border rounded p-2 w-24'>01</div>
        <div className='border rounded p-2 w-24'>02</div>
        <div className='border rounded p-2 w-24'>03</div>
        <div className='border rounded p-2 w-24'>04</div>
        <div className='border rounded p-2 w-24'>05</div>
        <div className='border rounded p-2 w-24'>06</div>
        <div className='border rounded p-2 w-24'>03</div>
        <div className='border rounded p-2 w-24'>07</div>
      </div>

      <div className='mt-10 flex flex-row flex-wrap'>
        <div className='border rounded p-2 w-24'>01</div>
        <div className='border rounded p-2 w-24'>02</div>
        <div className='border rounded p-2 w-24'>03</div>
        <div className='border rounded p-2 w-24'>04</div>
        <div className='border rounded p-2 w-24'>05</div>
        <div className='border rounded p-2 w-24'>06</div>
        <div className='border rounded p-2 w-24'>03</div>
        <div className='border rounded p-2 w-24'>07</div>
      </div>

      <div className='mt-10 flex flex-row flex-wrap-reverse'>
        <div className='border rounded p-2 w-24'>01</div>
        <div className='border rounded p-2 w-24'>02</div>
        <div className='border rounded p-2 w-24'>03</div>
        <div className='border rounded p-2 w-24'>04</div>
        <div className='border rounded p-2 w-24'>05</div>
        <div className='border rounded p-2 w-24'>06</div>
        <div className='border rounded p-2 w-24'>03</div>
        <div className='border rounded p-2 w-24'>07</div>
      </div>

    </div>
  )
}

export default App
