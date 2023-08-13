import React from 'react'

interface IndexContentProps {}

const IndexContent = ({}: IndexContentProps) => {
  return (
    <main>
      <h1 className="text-[80px] font-bold leading-none text-onyx dark:text-white">
        Suna Artemis
      </h1>
      <p className="ml-2 mt-2 font-sans text-2xl font-normal tracking-wide text-[#80808080]">
        A front-end engineer.
      </p>
    </main>
  )
}

export default IndexContent
