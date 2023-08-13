import './index.css'

import * as React from 'react'
import { type HeadFC, type PageProps } from 'gatsby'

import BackgroundGradient from '../components/BackgroundGradient'
import Topbar from '../components/Topbar'
import IndexContent from '../containers/IndexContent'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <body className="relative flow-root h-screen w-screen bg-white dark:bg-black">
      <header className="container relative mx-auto px-8">
        <BackgroundGradient />
        <div className="mt-8 h-52 rounded-lg">
          <Topbar />
        </div>
      </header>
      <div className="h-[200px]"></div>
      <section className="container relative mx-auto px-8">
        <svg
          className="absolute left-[786px] top-[86px] m-auto"
          width="288"
          height="344"
          viewBox="0 0 288 344"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="dark:opacity-10"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M144 0C64.471 0 0 64.471 0 144V328C0 336.837 21.4903 344 48 344C74.5097 344 96 336.837 96 328H96.0007C96.0007 336.837 117.491 344 144.001 344C170.421 344 191.856 336.885 192 328.089C192.144 336.885 213.579 344 239.999 344C266.509 344 287.999 336.837 287.999 328H288V144C288 64.471 223.529 0 144 0Z"
            fill="#D9D9D9"
            // fill-opacity="0.1"
          />
        </svg>
        <div className="dark:geist absolute left-[660px] m-auto flex h-[540px] w-[540px] items-center justify-center rounded-full"></div>
        <h1 className="relative text-[80px] font-bold leading-none text-onyx dark:text-white">
          Suna Artemis
        </h1>
        <p className="relative ml-2 mt-10 max-w-[740px] font-sans text-2xl font-normal tracking-wide dark:text-dark-gray">
          A front-end engineer and UI/UX designer helping startups turn their
          visions into a digital reality. I specialize in designing and building
          modern mobile and web-based apps.
        </p>
      </section>
      {/* <hr className="mt-16 text-[#FFFFFF1A]" /> */}
      {/* <footer>© 2023 suna artemis. All Rights Reserved.</footer> */}
    </body>
  )
}

export default IndexPage

export const Head: HeadFC = () => {
  return <title>Home Page</title>
}
