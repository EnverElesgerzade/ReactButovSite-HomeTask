import React from 'react'
import Button from '../../components/Button/Button'
import img1 from '../../assets/images/img1.png'
import img2 from '../../assets/images/img2.png'
import img3 from '../../assets/images/img3.png'
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
     <div className="threecontent relative top-[260px]">
        <div className="txt">
        <p className='font-[600] text-[48px] text-[#000000]'>Encabezado de sección</p>

        </div>
        <div className="threecards flex gap-[32px] items-center relative top-[30px]">
            <div className="card">
                <div className="img">
                    <img src={img1} alt="" className='w-[400px] rounded-[8px]'/>
                </div>
                <div className="cardtxt relative top-[20px]">
                    <p className='font-[500] text-[24px] text-[#000000]'>Subtítulo</p>
                    <p className='w-[381px] text-[24px] text-[#828282]'>Cuerpo del texto para lo que desees añadir adicionalmente al subtítulo. </p>
                </div>
            </div>

              <div className="card">
                <div className="img">
                    <img src={img2} alt="" className='w-[430px] rounded-[8px]'/>
                </div>
                <div className="cardtxt relative top-[20px]">
                    <p className='font-[500] text-[24px] text-[#000000]'>Subtítulo</p>
                    <p className='w-[381px] text-[24px] text-[#828282]'>Cuerpo del texto para lo que desees añadir adicionalmente al subtítulo. </p>
                </div>
            </div>

              <div className="card">
                <div className="img">
                    <img src={img3} alt="" className='w-[390px] rounded-[8px]'/>
                </div>
                <div className="cardtxt relative top-[20px]">
                    <p className='font-[500] text-[24px] text-[#000000]'>Subtítulo</p>
                    <p className='w-[381px] text-[24px] text-[#828282]'>Cuerpo del texto para lo que desees añadir adicionalmente al subtítulo. </p>
                </div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Home