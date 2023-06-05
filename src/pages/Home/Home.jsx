import React, { useState } from 'react'

import styles from './Home.module.css'
import MoveHorizontal from '../../components/Home/MoveHorizontal'
import NewProduct from '../../components/Home/NewProduct'
export default function Home() {
  return (
    <>
      <main className='flex items-center'>
        <div className={`${styles.myungjo} w-5/12 p-4`}>
          <p className=' font-bold text-brown3 animate__animated animate__slideInDown'>
            상시적인 긴장을 깨고
          </p>
          <p className='text-xl font-bold text-brown4 transition  animate__animated animate__slideInDown'>
            나를 위한 풍부하고 <span className='text-brown5'>편안한 시간</span>
            을 선사한다.
          </p>
        </div>
        <img className='w-7/12' src='main_02.jpg' alt='main' />
      </main>
      <div className='py-6 text-center'>
        <h3 className='font-bold'>Fill the skin with Owet</h3>
        <span>얼리 안티에이징을 위한 바디 살결케어</span>
      </div>
      <NewProduct />
    </>
  )
}
