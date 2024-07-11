import Grid from './components/grid'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShopHome from './components/Shop/ShopHome';
import Mui from './components/Mui';

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
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
          } />
          <Route path="/shop" element={<ShopHome />} />
          <Route path="/mui" element={<Mui />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App
