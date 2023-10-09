import React from "react";
import { MdOutlineChildFriendly } from 'react-icons/md'
import { LiaShippingFastSolid } from 'react-icons/lia'
import { BiHappyHeartEyes } from 'react-icons/bi'
import './modal.css'
import template1 from '../template/template1'
import { useState } from "react";
import Template1 from "../template/template1";
import Template2 from "../template/template2";
import Template3 from "../template/template3";
import Template4 from "../template/template4";
import Template5 from "../template/template5";
import Template6 from "../template/template6";
import Template7 from "../template/template7";
import Template8 from "../template/template8";
import Template9 from "../template/template9";

const Modal = ({ setShow, showtemp }) => {
    // console.log('id='+showtemp.id)
    const [modalInfo, setModalInfo] = useState(true)
    function handleEdit(){
        setModalInfo(false)
    }


    return (
        <div className="modal-main">

            {modalInfo == true ? <div className="modal-content">

                <span className="close" onClick={() => setShow(false)}>&times;</span>
                <div className="display-main">
                    <div className="display-template"><img src={showtemp.template} alt="image not found" /></div>
                    <div className="display-content">
                        <h1>Hello this website is for template creation </h1>
                        <p className="status">Invitation(Peroid)</p>
                        <button className="edit-btn" onClick={handleEdit} >Customize this template</button>
                        <p className="temp-details"><MdOutlineChildFriendly />&nbsp;High quality eco-friendly printing available</p>
                        <p className="temp-details"><LiaShippingFastSolid />&nbsp;Fast and free standard shipping</p>
                        <p className="temp-details"><BiHappyHeartEyes />&nbsp;Backed by our happiness gaureenty</p>
                    </div>

                </div>
            </div> : null}


            {modalInfo==false?<div className="modal-content modal-content-template">

             <span className="close" onClick={() => setModalInfo(true)}>&times;</span>
              <div className="template-show-div"> {showtemp.id==1?<Template1/>:showtemp.id==2?<Template2/>
                :showtemp.id==3?<Template3/>:showtemp.id==4?<Template4/>:showtemp.id==5?<Template5/>
                :showtemp.id==6?<Template6/>:showtemp.id==7?<Template7/>:showtemp.id==8?<Template8/>
                :showtemp.id==9?<Template9/>:null} </div>
                 </div>:null}
            
            </div>



    )
}

export default Modal