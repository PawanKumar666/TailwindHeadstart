import Grid from './components/grid'

function App() {
  return (
    <>
    <div className="text-3xl flex justify-around">
      <div className='bg-red-500'>
        <h1>Hello World</h1>
      </div>
      <div className='bg-green-500'>
        <h1>Hello World</h1>
      </div>
      <div className='bg-blue-500'>
        <h1>Hello World</h1>
      </div>
    </div>
    <Grid />
    </>
  )
}

export default App
