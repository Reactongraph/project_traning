import react from 'react'
import './template9.css'
import img1 from '../images/temp9.1.webp'
import img2 from '../images/temp9.2.webp'
import img3 from '../images/temp9.3.webp'
const Template9 = () => {
   return (
      <div className='bdy9'>
         <div className='img top-left'>
            <img src={img1} alt='image not found' />
         </div>
         <div className='img top-right'>
            <img src={img1} alt='image not find' />
         </div>
         
         <div className='img bottom-left'>
            <img src={img2} alt='image is not found' />
         </div>
         <div className='img bottom-right'>
            <img src={img2} alt='image not found' />
         </div>
         <div className='center-img'>
            <img src={img3} alt='image not found' />
         </div>
         <div className='main-headingdiv'>
         <span className='heading'>Congratulations</span>
         <p className='sub-heading'>Congratulations on your well-deserved graduation! Your hard work has paid off, and I'm so proud of you</p>
         </div>
      </div>
   )
}
export default Template9