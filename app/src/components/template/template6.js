import react from 'react'
import './template6.css'
import corner_img from '../images/temp6.webp'
const Template6=()=>{
    return(
      <div className='bdy6'>
       <div className='corner-img img-left'>
         <img src={corner_img} alt="image not found"/>
       </div>
       <div className='corner-img img-right'>
         <img src={corner_img}  alt="image not found"/>
       </div>
       <div className='corner-img img-bottom-left'>
         <img src={corner_img} alt="image not found"/>
       </div>
       <div className='corner-img img-bottom-right'>
          <img src={corner_img} alt="image not found"/>
       </div>
      <div className='span-div'> <span className='span'>Happy Birthday to you</span></div>
      </div>
    )
}

export default Template6