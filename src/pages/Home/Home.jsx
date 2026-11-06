import React from 'react'
import Button from '../../components/Button/Button'
import img1 from '../../assets/images/img1.png'
import img2 from '../../assets/images/img2.png'
import img3 from '../../assets/images/img3.png'
import stekan from '../../assets/images/stekan.png'
import imggg from '../../assets/images/imggg.png'
import fiveimg1 from '../../assets/images/fiveimg1.png'
import fiveimg2 from '../../assets/images/fiveimg2.png'
import daireimg1 from '../../assets/images/daireimg1.png'
import daireimg2 from '../../assets/images/daireimg2.jpg'
import daireimg3 from '../../assets/images/daireimg3.png'
const Home = () => {
  return (
    <div className='container relative top-[70px] left-[60px]'>
     <div className="txt">
        <p className='font-[700] text-[#000000] text-[54px]'>Título de la página de inicio</p>
        <p className='text-[24px] text-[#000000BF] relative top-[24px] w-[804px]'>Subtítulo que establece el contexto, comparte más información sobre el sitio web o, en general, motiva a la gente a seguir navegando. </p>
       
    <Button position="relative" left="top-[50px]"/>
     </div>

     <div className="imgdiv">
<img src={stekan} alt="" className='w-[86%] relative h-[600px] top-[100px] object-cover'/>
     </div>
     <div className="threecontent relative top-[260px]">
        <div className="txt">
        <p className='font-[600] text-[48px] text-[#000000]'>Encabezado de sección</p>

        </div>
        <div className="threecards flex gap-[32px] items-center relative top-[30px]">
            <div className="card">
                <div className="img">
                    <img src={img1} alt="" className='w-[400px] rounded-[8px] object-cover'/>
                </div>
                <div className="cardtxt relative top-[20px]">
                    <p className='font-[500] text-[24px] text-[#000000]'>Subtítulo</p>
                    <p className='w-[381px] text-[24px] text-[#828282]'>Cuerpo del texto para lo que desees añadir adicionalmente al subtítulo. </p>
                </div>
            </div>

              <div className="card">
                <div className="img">
                    <img src={img2} alt="" className='w-[430px] rounded-[8px] object-cover'/>
                </div>
                <div className="cardtxt relative top-[20px]">
                    <p className='font-[500] text-[24px] text-[#000000]'>Subtítulo</p>
                    <p className='w-[381px] text-[24px] text-[#828282]'>Cuerpo del texto para lo que desees añadir adicionalmente al subtítulo. </p>
                </div>
            </div>

              <div className="card">
                <div className="img">
                    <img src={img3} alt="" className='w-[390px] rounded-[8px] object-cover'/>
                </div>
                <div className="cardtxt relative top-[20px]">
                    <p className='font-[500] text-[24px] text-[#000000]'>Subtítulo</p>
                    <p className='w-[381px] text-[24px] text-[#828282]'>Cuerpo del texto para lo que desees añadir adicionalmente al subtítulo. </p>
                </div>
            </div>
        </div>
     </div>
     <div className="fourcontent relative top-[340px] flex items-center">
        <div className="fourtxt">
            <div className="fourptxt">
        <p className='font-[600] text-[48px] text-[#000000]'>Encabezado de sección</p>

            </div>
            <div className="fourthreetxt relative top-[35px]">
                <div className="txt1">
                    <p className='font-[500] text-[24px] text-[#000000]'>Subtítulo</p>
                    <p className='w-[515px] text-[24px] text-[#828282]'>Cuerpo del texto para lo que desees ampliar sobre el tema principal. </p>
                    
                </div>
                 <div className="txt2">
                    <p className='font-[500] text-[24px] text-[#000000]'>Subtítulo</p>
                    <p className='w-[515px] text-[24px] text-[#828282]'>Cuerpo del texto para lo que quieras decir. Añade puntos clave, citas y anécdotas. </p>
                    
                 </div>
                 <div className="txt3">
                    <p className='font-[500] text-[24px] text-[#000000]'>Subtítulo</p>
           <p className='w-[516px] text-[24px] text-[#828282]'>Cuerpo del texto para lo que quieras añadir más al punto principal. Proporciona detalles, explicaciones y contexto.</p>
                 </div>
            </div>
            <div className="btndivvv flex items-center gap-[10px] relative top-[50px]">
                <Button />
                <button className='w-[193px] h-[41px] rounded-[8px] bg-[#E6E6E6] text-[#000000]'>Botón secundario</button>
            </div>
        </div>
           <div className="imgbox relative left-[170px] top-[30px]">
            <img src={imggg} alt="" className='w-[600px] h-[560px] object-cover'/>
           </div>
     </div>
         <div className="fivecontent relative top-[480px]">
            <div className="fivetxt">
        <p className='font-[600] text-[48px] text-[#000000]'>Encabezado de sección</p>
                
            </div>
            <div className="fiveimgbox flex gap-[31px] relative top-[41px]">
                <div className="fiveimgg1">
                    <img src={fiveimg1} alt="" className='w-[624px] h-[340px] object-cover'/>
                    <div className="fivetxt1 relative top-[27px]">
                    <p className='font-[500] text-[24px] text-[#000000]'>Subtítulo</p>
                   <p  className='w-[546px] text-[24px] text-[#828282]'>Cuerpo del texto para lo que desees añadir adicionalmente al subtítulo. </p>
                    </div>
                </div>
                <div className="fiveimgg2">
                    <img src={fiveimg2} alt="" className='w-[624px] h-[340px] object-cover'/>
                      <div className="fivetxt2 relative top-[27px]">
                    <p className='font-[500] text-[24px] text-[#000000]'>Subtítulo</p>
                   <p  className='w-[546px] text-[24px] text-[#828282]'>Cuerpo del texto para lo que desees ampliar sobre el tema principal. </p>
                    </div>
                </div>
            </div>
         </div>
         <div className="sixcontent relative top-[700px]">
            <div className="sixtxt">
        <p className='font-[600] text-[48px] text-[#000000]'>Encabezado de sección</p>

            </div>
            <div className="sixthreedivs flex gap-[32px] relative top-[30px]">
                <div className="sixdiv1 justify-center   border-[#E6E6E6] rounded-[12px] border-[1px] w-[400px] h-[190px]">
                    <div className="sixtxt2">
                    <p className='text-[#000000] font-[500] text-[24px] relative top-[22px] left-[10px]'>«Un magnífico elogio»</p>

                    </div>
                    <div className="sixdivdown1 flex relative top-[81px] gap-[12px] left-[13px]">
<div className="siximg1">
    <img src={daireimg1} alt="" className='w-[45px] h-[45px] rounded-[50%]'/>
</div>
<div className="sixtwotxt">
    <p className='font-[500] text-[16px] text-[#000000]'>Nombre</p>
    <p className='text-[#828282] text-[16px] font-[500]'>Descripción</p>
</div>
                    </div>
                </div>

                  <div className="sixdiv2 border-[#E6E6E6] rounded-[12px] border-[1px] w-[400px] h-[190px]">
                    <div className="sixtxt2">
                    <p className='text-[#000000] font-[500] text-[24px] relative top-[22px] left-[10px]'>«Un magnífico elogio»</p>

                    </div>
                    <div className="sixdivdown2 flex gap-[12px] relative top-[81px] left-[13px]">
<div className="siximg1">
    <img src={daireimg2} alt="" className='w-[45px] rounded-[50%] h-[45px]'/>
</div>
<div className="sixtwotxt">
    <p className='font-[500] text-[16px] text-[#000000]'>Nombre</p>
    <p className='text-[#828282] text-[16px] font-[500]'>Descripción</p>
</div>
                    </div>
                </div>


                  <div className="sixdiv3 border-[#E6E6E6] rounded-[12px] border-[1px] w-[400px] h-[190px] ">
                    <div className="sixtxt2">
                    <p className='text-[#000000] font-[500] text-[24px] relative top-[22px] left-[10px]'>«Un magnífico elogio»</p>

                    </div>
                    <div className="sixdivdown3  flex gap-[12px] relative top-[81px] left-[13px]">
<div className="siximg1">
    <img src={daireimg3} alt="" className='w-[45px] h-[45px] rounded-[50%]'/>
</div>
<div className="sixtwotxt">
    <p className='font-[500] text-[16px] text-[#000000]'>Nombre</p>
    <p className='text-[#828282] text-[16px] font-[500]'>Descripción</p>
</div>
                    </div>
                </div>
            </div>
         </div>
         <div className="sevencontent relative top-[800px] flex items-center">
            <div className="seventxt relative left-[30px]">
        <p className='font-[600] text-[48px] text-[#000000]'>Encabezado de sección</p>

            </div>
            <div className="sevenbtns flex relative left-[430px] gap-[24px]">
                <Button />
                <button className='w-[193px] h-[41px] rounded-[8px] bg-[#E6E6E6] text-[#000000]'>Botón secundario</button>
            </div>
         </div>
    </div>
  )
}

export default Home