import React from 'react'
import Button from '../../components/ui/Button'
import OAuthLogin from '../../components/Login/OAuthLogin'
export default function LoginPage() {
  return (
    <main className='flex justify-center'>
      <section className='h-screen '>
        <form className='mt-20 w-fit flex-col'>
          <h3 className='text-xl playfair text-center font-bold'>
            Login
          </h3>
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
          <Button
            text='로그인'
            outline='brown5'
            color='brown5'
            bg='brown4'
            width='w-60'
            textColor='white'
          />
        </form>
        <div className='mt-12'>
          <OAuthLogin />
        </div>
      </section>
    </main>
  )
}
