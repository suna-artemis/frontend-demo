import { Link, PageProps } from 'gatsby'
import React, { useState } from 'react'

import LinkinIcon from '../assets/LinkinIcon.svg'
import XIcon from '../assets/XIcon.svg'
import GithubIcon from '../assets/GithubIcon.svg'
import SunIcon from '../assets/SunIcon.svg'
import { MenuItem, SvgIcon, MenuProps } from '@mui/material'

interface TopbarProps {}

const Topbar = ({}: TopbarProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const pages = [
    { name: 'About', url: '/about' },
    { name: 'Work', url: '/work' },
    { name: 'Notebook', url: '/notebook' },
    { name: 'Contact', url: '/contact' },
    { name: 'More', url: '/more' },
  ]
  const themes = [{ name: 'light' }, { name: 'dark' }, { name: 'system' }]
  const themeMenuItemList = themes.map(({ name }) => (
    <MenuItem key={name}>{name}</MenuItem>
  ))

  return (
    <div className="flex rounded-xl border border-[#FFFFFF40] bg-[#FFFFFF40] p-4 opacity-70 backdrop-blur-[2px] dark:border-[#18181d00] dark:bg-[#18181D4D]">
      <div className="flex-auto">
        <div className="flex w-[526px] gap-[40px]">
          {pages.map(({ name, url }) => (
            <div key={name}>
              <Link
                className="item-center flex font-sans text-base font-medium dark:text-[#C5C5C5]"
                to={url}
              >
                {name}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-48 gap-6">
        <Link to={'/'}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.556 22.9979H3.44792C2.09813 22.9979 1.00391 21.9037 1.00391 20.5539V3.44584C1.00391 2.09605 2.09813 1.00183 3.44792 1.00183H20.556C21.9058 1.00183 23 2.09605 23 3.44584V20.5539C23 21.9037 21.9058 22.9979 20.556 22.9979ZM16.6797 19.9429H19.9438V13.2376C19.9438 10.4005 18.3355 9.02868 16.0891 9.02868C13.8417 9.02868 12.8959 10.7788 12.8959 10.7788V9.35224H9.75023V19.9429H12.8959V14.3835C12.8959 12.8938 13.5816 12.0074 14.8941 12.0074C16.1005 12.0074 16.6797 12.8592 16.6797 14.3835V19.9429ZM4.05773 6.01118C4.05773 7.0904 4.92598 7.96547 5.99746 7.96547C7.06894 7.96547 7.93668 7.0904 7.93668 6.01118C7.93668 4.93195 7.06894 4.05688 5.99746 4.05688C4.92598 4.05688 4.05773 4.93195 4.05773 6.01118ZM7.65329 19.9429H4.37317V9.35224H7.65329V19.9429Z"
              fill="none"
              className="fill-[#181818] dark:fill-[#c5c5c5]"
            />
          </svg>
        </Link>
        <Link to={'/'}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.2439 2.25H21.5519L14.3249 10.51L22.8269 21.75H16.1699L10.9559 14.933L4.98991 21.75H1.67991L9.40991 12.915L1.25391 2.25H8.07991L12.7929 8.481L18.2439 2.25ZM17.0829 19.77H18.9159L7.08391 4.126H5.11691L17.0829 19.77Z"
              fill="none"
              className="fill-black dark:fill-light-gray"
            />
          </svg>
        </Link>
        <Link to={'https://github.com/suna-artemis/'}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1326_3466)">
              <g clipPath="url(#clip1_1326_3466)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.9642 -1.52588e-05C5.34833 -1.52588e-05 0 5.38774 0 12.0531C0 17.3811 3.42686 21.8912 8.18082 23.4874C8.77518 23.6074 8.9929 23.2281 8.9929 22.909C8.9929 22.6295 8.97331 21.6717 8.97331 20.6738C5.64514 21.3923 4.95208 19.237 4.95208 19.237C4.41723 17.8401 3.62474 17.481 3.62474 17.481C2.53543 16.7427 3.70408 16.7427 3.70408 16.7427C4.91241 16.8225 5.54645 17.9799 5.54645 17.9799C6.61592 19.8157 8.33927 19.297 9.03257 18.9776C9.13151 18.1993 9.44865 17.6606 9.78539 17.3613C7.13094 17.0819 4.33812 16.0442 4.33812 11.4144C4.33812 10.0974 4.81323 9.01982 5.56604 8.18178C5.44727 7.88252 5.03118 6.64505 5.68506 4.9888C5.68506 4.9888 6.69527 4.66945 8.97306 6.22603C9.94827 5.96219 10.954 5.82797 11.9642 5.82684C12.9745 5.82684 14.0042 5.96668 14.9552 6.22603C17.2332 4.66945 18.2434 4.9888 18.2434 4.9888C18.8973 6.64505 18.481 7.88252 18.3622 8.18178C19.1349 9.01982 19.5904 10.0974 19.5904 11.4144C19.5904 16.0442 16.7976 17.0618 14.1233 17.3613C14.5592 17.7404 14.9353 18.4587 14.9353 19.5962C14.9353 21.2126 14.9158 22.5098 14.9158 22.9087C14.9158 23.2281 15.1337 23.6074 15.7278 23.4877C20.4818 21.8909 23.9087 17.3811 23.9087 12.0531C23.9282 5.38774 18.5603 -1.52588e-05 11.9642 -1.52588e-05Z"
                  fill="none"
                  className="fill-black dark:fill-light-gray"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_1326_3466">
                <rect
                  width="24"
                  height="24"
                  fill="none"
                  className="fill-black dark:fill-light-gray"
                />
              </clipPath>
              <clipPath id="clip1_1326_3466">
                <rect
                  width="24"
                  height="23.5102"
                  fill="none"
                  className="fill-black dark:fill-light-gray"
                />
              </clipPath>
            </defs>
          </svg>
        </Link>
        <div className="h-6 border-l-[1px] border-[#00000042] dark:border-[#FFFFFF40]"></div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1335_3476)">
            <path
              d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
              stroke="none"
              className="stroke-black dark:stroke-light-gray"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22"
              stroke="none"
              className="stroke-black dark:stroke-light-gray"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1335_3476">
              <rect width="24" height="24" fill="#181818" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  )
}

export default Topbar
