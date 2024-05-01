export function FlexOrder () {
  return (
    <div className='mt-40 mx-80 border py-10'>
      {/* //? flex order */}
      <p>flex order</p>
      <div className='flex flex-row justify-between'>
        <div className='order-last border rounded p-2 w-24'>01</div>
        <div className='border rounded p-2 w-24'>02</div>
        <div className='border rounded p-2 w-24'>03</div>
        <div className='border rounded p-2 w-24'>04</div>
      </div>

      {/* //? flex -order */}
      <p className='mt-[20px]'>flex -order</p>
      <div className='flex flex-row justify-between'>
        <div className='order-1 border rounded p-2 w-24'>01</div>
        <div className='border rounded p-2 w-24'>02</div>
        <div className='border rounded p-2 w-24'>03</div>
        <div className='border rounded p-2 w-24'>04</div>
      </div>

    </div>
  )
}
