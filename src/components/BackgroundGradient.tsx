import React from 'react'

interface BackgroundGradientProps {}

const BackgroundGradient = ({}: BackgroundGradientProps) => {
  return (
    <>
      <div
        className="absolute left-[230px] top-[-61.9px] h-[178px] w-[598px] rounded-[598px]
bg-light-blue blur-[118px]"
      ></div>
      <div
        className="absolute left-[465px] top-[-82.9px] h-[263px] w-[598px] rounded-[598px]
bg-light-red blur-[118px]"
      ></div>
      <div
        className="absolute left-[643px] top-[-61.9px] h-[178px] w-[598px] rounded-[598px]
bg-light-yellow blur-[118px]"
      ></div>
    </>
  )
}

export default BackgroundGradient
