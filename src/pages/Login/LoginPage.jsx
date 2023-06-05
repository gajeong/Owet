import React from 'react'

export default function LoginPage() {
  return (
    <section className='h-screen flex justify-center'>
      <form className='mt-36'>
        <h3 className='text-xl text-center playfair font-bold'>Login</h3>
        <input
          type='text'
          name='id'
          id='id'
          className='p-2 outline outline-1 block outline-brown4 selection:bg-slate-50 bg-inherit w-60 mt-1 text-s placeholder:text-xs'
          placeholder='아이디'
        />
        <input
          type='password'
          name='pw'
          id='pw'
          className='p-2 outline outline-1 block outline-brown4 selection:bg-slate-50 bg-inherit w-60 mt-1 text-s placeholder:text-xs'
          placeholder='패스워드'
        />
        <button className='bg-brown5 p-3 outline outline-1 outline-brown5 w-60 mt-1 text-white text-xs'>
          로그인
        </button>
      </form>
    </section>
  )
}
