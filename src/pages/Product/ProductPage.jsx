import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/Product/ProductCard'

export default function ProductPage() {
  const { sort } = useParams()
  const title = {
    'body-lotion': 'Body Lotion',
    'body-oil': 'Body Oil',
    'body-scrub': 'Body Scrub',
  }
  const data = [
    {
      id: 593579,
      itemNm: '파인 샤워오일 (DENSE)',
      detail: '설명 들어갑니다',
      price: 38000,
      url: 'https://o-wet.com/web/product/big/202304/63c702658133d8e7387109ac7661542a.jpg',
      sort: 'body-oil',
    },
    {
      id: 593572,
      itemNm: '퍼밍 바디로션 (DENSE)',
      detail: '설명 들어갑니다',
      price: 30000,
      url: 'https://o-wet.com/web/product/big/202304/f7a8c664cbe0dfa142fc820324824d7f.jpg',
      sort: 'body-lotion',
    },
    {
      id: 593523,
      itemNm: '휩드 바디스크럽',
      detail: '설명 들어갑니다',
      price: 35000,
      url: 'https://o-wet.com/web/product/big/202304/33ba1c459e3a0f51cddf16d4a00a90f7.jpg',
      sort: 'body-scrub',
    },
    {
      id: 5935123,
      itemNm: '파인 샤워오일 (COME TO MIND)',
      detail: '설명 들어갑니다',
      price: 38000,
      url: 'https://o-wet.com/web/product/big/202304/63c702658133d8e7387109ac7661542a.jpg',
      sort: 'body-oil',
    },
    {
      id: 593345,
      itemNm: '퍼밍 바디로션 (DENSE)',
      detail: '설명 들어갑니다',
      price: 30000,
      url: 'https://o-wet.com/web/product/big/202304/f7a8c664cbe0dfa142fc820324824d7f.jpg',
      sort: 'body-lotion',
    },
  ]

  const products = data.filter((item) => {
    if (sort === 'all') return item
    else return item.sort === sort
  })

  return (
    <>
      <h1 className='text-xl text-brown4 font-semibold text-center p-4 playfair'>
        {title[`${sort}`]}
      </h1>
      <hr />
      <main className='px-4 py-8'>
        <p className='text-xs'>{products.length} items</p>
        <div className=' grid grid-cols-3 gap-4 max-sm:grid-cols-2'>
          {products.map((item) => (
            <ProductCard data={item} key={item.id} />
          ))}
        </div>
      </main>
    </>
  )
}
