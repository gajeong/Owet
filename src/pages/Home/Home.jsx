import React from 'react'
import styles from './Home.module.css'
export default function Home() {
  return (
    <main className='flex'>
      <div className={`${styles.jeju} w-5/12`}>
        <p className='text-lg italic font-bold text-beige'>
          상시적인 긴장을 깨고
        </p>
        <p className='text-2xl italic font-bold text-brown'>
          나를 위한 풍부하고 편안한 시간을 선사한다
        </p>
      </div>

      <img className='w-7/12' src='main_02.jpg' alt='main' />
    </main>
  )
}
