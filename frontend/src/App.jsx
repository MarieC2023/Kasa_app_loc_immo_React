import './App.css'

import Home from '@/pages/Home'
import About from '@/pages/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Error from '@/_utils/Error'
import Layout from '@/pages/Layout'


function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
