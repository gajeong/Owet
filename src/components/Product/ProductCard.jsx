import React from 'react'

export default function ProductCard({ data }) {
  return (
    <div className='cursor-pointer'>
      <img
        src={data.url}
        alt={data.itemNm}
        className='hover:drop-shadow-md'
      />
      <div className='p-1'>
        <h3 className='text-gray-700 text-base'>
          {data.itemNm}
        </h3>
        <div className='flex justify-between py-2'>
          <dl className='text-xs text-gray-500 '>
            {data.sort}
          </dl>
          <dl className='text-base text-gray-700'>
            {data.price.toLocaleString()}원
          </dl>
        </div>
      </div>
    </div>
  )
}
