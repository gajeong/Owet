import React, { useState } from 'react'

export default function NewProductPage() {
  const options = ['body-lotion', 'body-oil', 'body-scrub']
  const [productData, setProductData] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setProductData({ ...productData, [name]: value })
  }

  return (
    <section>
      <form className='p-4'>
        <h2 className='text-center text-xl p-4'>
          신규 상품 등록
        </h2>

        <div className='flex max-sm:flex-col '>
          <div className='block w-1/3 grow-0 max-md:w-1/2 max-sm:w-full'>
            {productData?.file && (
              <img
                src='https://i.namu.wiki/i/E6VnzIwt4nZvWAQoMQB9NrdmTqFTzbE95aOi_6FGPrWYI6fsz4MmsA4LJm-YwjU48gg26thy98En3WBnNwlMYKm3qtl543QAp-Jklixoees_USfE61NJ3N6-DrQS5VsnTXbcMPrO25kk9D5DGxbyow.webp'
                alt=''
              />
            )}
          </div>

          <aside className='w-2/3 shrink-0 grid grid-rows-3  gap-2 self-end mb-4 max-md:1/2 max-sm:w-full'>
            <input
              type='file'
              name='file'
              accept='image/*'
              onChange={handleChange}
            />
            <input
              type='text'
              name='itemNm'
              placeholder='상품명'
              onChange={handleChange}
              required
            />
            <input
              type='text'
              name='price'
              placeholder='가격'
              onChange={handleChange}
              required
            />
            <select placeholder='분류' required>
              <option value=''>
                --------- 상품 종류 ---------
              </option>
              {options.map((op, index) => (
                <option key={index} value={op}>
                  {op}
                </option>
              ))}
            </select>
          </aside>
        </div>
        <textarea
          className='w-full'
          type='text'
          name='detail'
          onChange={handleChange}
          required
        />
      </form>
    </section>
  )
}
