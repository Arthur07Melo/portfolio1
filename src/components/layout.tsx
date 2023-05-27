import { ReactNode } from 'react'
import { Karma } from 'next/font/google'
import Navbar from './navbar'
import Head from 'next/head'

type propsType = {
  children: ReactNode
}

const karmaFont = Karma({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  style: ['normal'],
})

export default function Layout(props: propsType) {
  return (
    <div
      className={`${karmaFont.className} h-screen w-screen overflow-scroll bg-mainbg text-white`}
    >
      <Head>
        <title>Arthur Ian - Portfolio</title>
      </Head>
      <Navbar />
      <main>{props.children}</main>
    </div>
  )
}
