// import { FlexBasisWrap } from './components/FlexBasisWrap'
// import { FlexGrowShrink } from './components/FlexGrowShrink'
// import { FlexOrder } from './components/FlexOrder'
// import { GridColumns } from './components/GridColumns'

function App () {
  return (
  // <FlexBasisWrap />
  // <FlexGrowShrink />
  // <FlexOrder />
  // <GridColumns />

    <div className='mt-40 mx-80 border py-10'>
      {/* //? grid rows */}
      <p>grid rows (Importante usar grid-flow-col)</p>
      <div className='grid grid-rows-4 grid-flow-col gap-4'>
        <div className='border rounded p-2'>01</div>
        <div className='border rounded p-2'>02</div>
        <div className='border rounded p-2'>03</div>
        <div className='border rounded p-2'>04</div>
        <div className='border rounded p-2'>05</div>
        <div className='border rounded p-2'>06</div>
        <div className='border rounded p-2'>07</div>
        <div className='border rounded p-2'>08</div>
        <div className='border rounded p-2'>09</div>
      </div>

      {/* //? subgrid */}
      <p className='mt-[30px]'>subgrid</p>
      <div className='grid grid-rows-4 grid-flow-col gap-4'>
        <div className='border rounded p-2'>01</div>
        <div className='border rounded p-2'>02</div>
        <div className='border rounded p-2'>03</div>
        <div className='border rounded p-2'>04</div>
        <div className='border rounded p-2'>05</div>
        <div className='grid grid-rows-subgrid gap-4 row-span-3'>
          <div className='row-start-2 border rounded p-2'>06</div>
        </div>
        <div className='border rounded p-2'>07</div>
        <div className='border rounded p-2'>08</div>
        <div className='border rounded p-2'>09</div>
        <div className='border rounded p-2'>10</div>
      </div>

    </div>

  )
}

export default App
