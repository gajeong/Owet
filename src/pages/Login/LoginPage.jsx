import React from 'react'

export default function LoginPage() {
  return (
    <section>
      <h3>로그인</h3>
      <form>
        <input
          type='text'
          name='id'
          id='id'
          className='p-2 outline outline-1 block selection:bg-slate-50 bg-inherit'
        />
        <input type='password' name='pw' id='pw' />
        <button>로그인</button>
      </form>
    </section>
  )
}
