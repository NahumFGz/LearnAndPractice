export function GridColumns () {
  return (
    <div className='mt-40 mx-80 border py-10'>
      {/* //? grid columns */}
      <p>grid columns</p>
      <div className='grid grid-cols-4 gap-4'>
        <div className='border rounded p-2 w-24 '>01</div>
        <div className='border rounded p-2 w-24'>02</div>
        <div className='border rounded p-2 w-24'>03</div>
        <div className='border rounded p-2 w-24'>04</div>
        <div className='border rounded p-2 w-24'>05</div>
        <div className='border rounded p-2 w-24'>06</div>
        <div className='border rounded p-2 w-24'>07</div>
        <div className='border rounded p-2 w-24'>08</div>
        <div className='border rounded p-2 w-24'>09</div>
      </div>

      {/* //? grid Subgrid */}
      <p className='mt-[20px]'>grid subgrid</p>
      <div className='grid grid-cols-4 gap-4'>
        <div className='border rounded p-2 w-24'>01</div>
        <div className='border rounded p-2 w-24'>02</div>
        <div className='border rounded p-2 w-24'>03</div>
        <div className='border rounded p-2 w-24'>04</div>
        <div className='border rounded p-2 w-24'>05</div>

        <div className='grid grid-cols-subgrid col-span-3'>
          <div className='col-start-2 border rounded p-2 w-24'>06</div>
        </div>
      </div>

      {/* //? grid spanning columns */}
      <p className='mt-[20px]'>grid spanning columns</p>
      <div className='grid grid-cols-3 gap-4'>
        <div className='border rounded p-2'>01</div>
        <div className='border rounded p-2'>02</div>
        <div className='border rounded p-2'>03</div>
        <div className='col-span-2 border rounded p-2'>04</div>
        <div className='border rounded p-2'>05</div>
        <div className='border rounded p-2'>06</div>
        <div className='col-span-2 border rounded p-2'>07</div>
      </div>

      {/* //? grid starting and ending lines */}
      <p className='mt-[20px]'>grid startinf and ending lines</p>
      <div className='grid grid-cols-6 gap-4'>
        <div className='col-start-2 border rounded p-2'>01</div>
        <div className='col-start-1 col-end-3 border rounded p-2'>02</div>
        <div className='col-end-7 border rounded p-2'>03</div>
        <div className='col-start-1 col-end-7 border rounded p-2'>04</div>
      </div>

    </div>
  )
}
