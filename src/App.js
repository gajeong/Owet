import React from 'react'
import { Outlet } from 'react-router-dom'
import TopSaleBar from './components/Navbar/TopSaleBar'
import HorizontalBar from './components/Navbar/HorizontalBar'
import MoveHorizontal from './components/Home/MoveHorizontal'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()
function App() {
  return (
    <section className='relative min-h-screen'>
      <TopSaleBar />
      <QueryClientProvider client={queryClient}>
        <HorizontalBar />

        <Outlet />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
      <MoveHorizontal />
    </section>
  )
}

export default App
