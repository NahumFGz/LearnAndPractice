export function FlexGrowShrink () {
  return (
    <div className='mt-40 mx-80 border py-10'>
      {/* //? flex initial, auto, none */}
      <p className='mt-[20px]'>Flex initial - crece y se reduce hasta maximo su tamaño inicial</p>
      <div className='flex flex-row gap-2'>
        <div className='flex-none border rounded p-2 w-14'>01</div>
        <div className='flex-initial border rounded p-2 w-64'>02</div>
        <div className='flex-initial border rounded p-2 w-32'>03</div>
      </div>

      <p className='mt-[20px]'>Flex 1 - crece y se encoje sin importar su tamaño inicial</p>
      <div className='flex flex-row gap-2'>
        <div className='flex-none border rounded p-2 w-14'>01</div>
        <div className='flex-1 border rounded p-2 w-24'>02</div>
        <div className='flex-1 border rounded p-2 w-32'>03</div>
      </div>

      <p className='mt-[20px]'>Flex auto - crezca y se encoja, teniendo en cuenta su tamaño inicial</p>
      <div className='flex flex-row gap-2'>
        <div className='flex-none border rounded p-2 w-14'>01</div>
        <div className='flex-auto border rounded p-2 w-64'>02</div>
        <div className='flex-auto border rounded p-2 w-32'>03</div>
      </div>

      <p className='mt-[20px]'>Flex none - para evitar que un elemento flexible crezca o se encoja</p>
      <div className='flex flex-row gap-2'>
        <div className='flex-none border rounded p-2 w-14'>01</div>
        <div className='flex-none border rounded p-2 w-64'>02</div>
        <div className='flex-auto border rounded p-2 w-32'>03</div>
      </div>

      {/* //? flex grow */}
      <p className='mt-[70px]'>Grow</p>
      <div className='flex flex-row gap-2'>
        <div className='flex-none border rounded p-2 w-14'>01</div>
        <div className='grow border rounded p-2 w-14'>02</div>
        <div className='flex-none border rounded p-2 w-14'>03</div>
      </div>

      <p className='mt-[20px]'>Don't Grow  --- grow-0</p>
      <div className='flex flex-row gap-2'>
        <div className='grow border rounded p-2 w-14'>01</div>
        <div className='grow-0 border rounded p-2 w-14'>02</div>
        <div className='grow border rounded p-2 w-14'>03</div>
      </div>

      {/* //? flex shrink */}
      <p className='mt-[70px]'>Shrink</p>
      <div className='flex flex-row gap-2'>
        <div className='flex-none border rounded p-2 w-14'>01</div>
        <div className='shrink border rounded p-2 w-64'>02</div>
        <div className='flex-none border rounded p-2 w-14'>03</div>
      </div>

      <p className='mt-[20px]'>Don't Shrink --- shrink-0</p>
      <div className='flex flex-row gap-2'>
        <div className='flex-1 border rounded p-2 w-14'>01</div>
        <div className='shrink-0 border rounded p-2 w-14'>02</div>
        <div className='flex-1 border rounded p-2 w-14'>03</div>
      </div>

    </div>
  )
}
