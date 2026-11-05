import React from 'react'

const Button = ({left, right, position}) => {
  return (
    <div>
        <button className={`text-[16px] text-[#FFFFFF] bg-[#000000] rounded-[8px] pl-[18px] pr-[18px] pt-[7px] pb-[7px] ${left} ${right} ${position}  `}>Botón</button>
    </div>
  )
}

export default Button