import './index.css'

import * as React from 'react'
import { type HeadFC, type PageProps } from 'gatsby'

import BackgroundGradient from '../components/BackgroundGradient'
import Topbar from '../components/Topbar'
import IndexContent from '../containers/IndexContent'
import Bgi from '../assets/bgi.webp'
import { useState } from 'react'
import { Slider } from '@mui/material'

const IndexPage: React.FC<PageProps> = () => {
  const [blur, setBlur] = useState(0)
  const [brightness, setBrightness] = useState(1)
  const [contrast, setContrast] = useState(1)
  const [grayscale, setGrayscale] = useState(1)
  const [saturate, setSaturate] = useState(1)

  return (
    <body className="relative flow-root h-screen w-screen bg-white dark:bg-black">
      <header className="container relative mx-auto px-8">
        <BackgroundGradient />
        <div className="mt-8 h-52 rounded-lg">
          <Topbar />
        </div>
      </header>
      <section className="container relative mx-auto px-8">
        <div className="dark:geist absolute left-[660px] m-auto flex h-[540px] w-[540px] items-center justify-center rounded-full"></div>
        <h1 className="relative text-[80px] font-bold leading-none text-onyx dark:text-white">
          Suna Artemis
        </h1>
        <p className="relative ml-2 mt-10 max-w-[740px] font-sans text-2xl font-normal tracking-wide">
          A front-end engineer and UI/UX designer, I specialize building modern
          mobile and web-based apps.
        </p>
        <div
          className="mt-[48px] h-[312px] w-[500px]"
          style={{
            //
            filter: `blur(${blur}px) brightness(${brightness}) contrast(${contrast}) grayscale(${
              1 - grayscale
            }) hue-rotate(0deg) invert(0%) saturate(${saturate}) sepia(0%)`,
          }}
        >
          <img
            className="w-[500px] rounded-lg"
            data-width={'500px'}
            data-height={'312px'}
            src={Bgi}
          />
        </div>
        <div className="mt-6 w-[500px]">
          <p>blur:</p>
          <Slider
            className="w-[500px]"
            defaultValue={blur}
            step={1}
            marks
            min={0}
            max={8}
            onChange={(_e, value) => {
              setBlur(
                value instanceof Array ? (value.length ? value[0] : 0) : value
              )
            }}
            valueLabelDisplay="auto"
          />
          <p>brightness:</p>
          <Slider
            className="w-[500px]"
            defaultValue={brightness}
            step={0.1}
            marks
            min={0}
            max={1}
            onChange={(_e, value) => {
              setBrightness(
                value instanceof Array ? (value.length ? value[0] : 0) : value
              )
            }}
            valueLabelDisplay="auto"
          />
          <p>contrast:</p>
          <Slider
            className="w-[500px]"
            defaultValue={contrast}
            step={0.1}
            marks
            min={0}
            max={1}
            onChange={(_e, value) => {
              setContrast(
                value instanceof Array ? (value.length ? value[0] : 0) : value
              )
            }}
            valueLabelDisplay="auto"
          />
          <p>grayscale:</p>
          <Slider
            className="w-[500px]"
            defaultValue={grayscale}
            step={0.1}
            marks
            min={0}
            max={1}
            onChange={(_e, value) => {
              setGrayscale(
                value instanceof Array ? (value.length ? value[0] : 0) : value
              )
            }}
            valueLabelDisplay="auto"
          />
          <p>saturate:</p>
          <Slider
            className="w-[500px]"
            defaultValue={saturate}
            step={0.1}
            marks
            min={0}
            max={2}
            onChange={(_e, value) => {
              setSaturate(
                value instanceof Array ? (value.length ? value[0] : 0) : value
              )
            }}
            valueLabelDisplay="auto"
          />
        </div>
      </section>
    </body>
  )
}

export default IndexPage

export const Head: HeadFC = () => {
  return <title>Home Page</title>
}
