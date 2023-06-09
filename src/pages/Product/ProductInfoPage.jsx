import React from 'react'

export default function ProductInfoPage() {
  return (
    <>
      <form>
        <h2>신규 상품 등록</h2>
        <img src='' alt='' />
        <aside>
          <input type='text' name='id' required />
          <input type='text' name='itemNm' required />
          <input type='text' name='detail' required />
          <input type='text' name='price' required />
          <input option name='sort' required />
        </aside>
      </form>
    </>
  )
}
