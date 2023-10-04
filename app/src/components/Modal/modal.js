import React from "react";
import  ReactDOM  from "react-dom";
import { useCallback } from "react";
import { MdOutlineChildFriendly } from 'react-icons/md'
import {LiaShippingFastSolid} from 'react-icons/lia'
import {BiHappyHeartEyes} from 'react-icons/bi'
import './modal.css'
import temp from '../images/template9.png'
const Modal = ({setShow,showtemp}) => {
    //console.log('Modal is '+show)
     
     
  

    return (
        <div className="modal-main">
            <div className="modal-content">
                <span className="close" onClick={()=>setShow(false)}>&times;</span>
                <div className="display-main">
                <div className="display-template"><img src={showtemp} alt="image not found"/></div>
                <div className=
                "display-content">
                    <h1>Hello this website is for template creation </h1> 
                    <p className="status">Invitation(Peroid)</p>
                    <button className="edit-btn" onClick={opennewtab}>Customize this template</button>
                    <p className="temp-details"><MdOutlineChildFriendly/>&nbsp;High quality eco-friendly printing available</p>
                    <p className="temp-details"><LiaShippingFastSolid/>&nbsp;Fast and free standard shipping</p>
                    <p className="temp-details"><BiHappyHeartEyes/>&nbsp;Backed by our happiness gaureenty</p>
                    </div>
                </div>

            </div>

        
        </div>
    )
}

export default Modal