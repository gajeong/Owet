import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import ProductCard from '../Product/ProductCard'

export default function NewProduct() {
  const {
    isLoading,
    error,
    data: newItems,
  } = useQuery(
    ['new-product'],
    async () =>
      axios
        .get('/data/new-product.json')
        .then((res) => res.data.data),
    { staleTime: 1000 * 60 * 100 }
  )

  return (
    <main className='p-4'>
      {isLoading && <p>Loading</p>}
      {error && <p>Error</p>}
      {newItems && (
        <div className='grid grid-cols-4 gap-4 max-sm:grid-cols-2'>
          <div className="bg-[url('https://o-wet.com/web/upload/drawcode/d_img/list.jpg')] bg-cover playfair text-white text-4xl p-4 text-end font-semibold">
            New
          </div>

          {newItems?.map((item) => (
            <ProductCard key={item.id} data={item} />
          ))}
        </div>
      )}
    </main>
  )
}
