import React from 'react'
import { Outlet } from 'react-router-dom'
import TopSaleBar from './components/Navbar/TopSaleBar'
import HorizontalBar from './components/Navbar/HorizontalBar'

function App() {
  return (
    <section className='relative'>
      <TopSaleBar />
      <HorizontalBar />

      <Outlet />
    </section>
  )
}

export default App
