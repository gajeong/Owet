import React from 'react'
import { Outlet } from 'react-router-dom'
import TopSaleBar from '../../components/Navbar/TopSaleBar'
import HorizontalBar from '../../components/Navbar/HorizontalBar'
export default function Home() {
  return (
    <>
      <TopSaleBar />
      <HorizontalBar />
      <Outlet />
    </>
  )
}
