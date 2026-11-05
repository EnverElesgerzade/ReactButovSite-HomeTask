import React from 'react'
import Button from '../../components/Button/Button'
import stekan from '../../assets/images/stekan.png'
const Home = () => {
  return (
    <div className='container relative top-[70px] left-[60px]'>
     <div className="txt">
        <p className='font-[700] text-[#000000] text-[54px]'>Título de la página de inicio</p>
        <p className='text-[24px] text-[#000000BF] relative top-[24px] w-[804px]'>Subtítulo que establece el contexto, comparte más información sobre el sitio web o, en general, motiva a la gente a seguir navegando. </p>
       
    <Button position="relative" left="top-[50px]"/>
     </div>

     <div className="imgdiv">
<img src={stekan} alt="" className='w-[86%] relative h-[600px] top-[100px]'/>
     </div>
    </div>
  )
}

export default Home