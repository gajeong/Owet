import React from 'react'

export default function MoveHorizontal() {
  return (
    <div
      className='flex fixed bottom-0 overflow-x-hidden '
      style={{ animation: 'ticker 120s linear infinite' }}
    >
      <img src='horizontal_banner.jpg' className='w-8/12' alt='owet' />
      <img src='horizontal_banner.jpg' className='w-8/12' alt='owet' />
    </div>
  )
}
