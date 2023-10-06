import React from "react";
import './invitation.css'
import template1 from '../images/template1.png'
import template2 from '../images/template2.png'
import template3 from '../images/template3.png'
import template4 from '../images/template4.png'
import template5 from '../images/template5.png'
import template6 from '../images/template6.png'
import template7 from '../images/template7.png'
import template8 from '../images/template8.png'
import template9 from '../images/template9.png'

const AllInvitaion = ({setShow,setShowTemp}) => {
    //allInvitation handleEdit
    
    return (
        <div className="template-div">
            <div className="template-sub-div">
            <div className="template">
                <img src={template1}  alt="image not found" onClick={() => {
                    setShow(true)
                    setShowTemp({
                        template:template1,
                        id:1
                    });
                }} />
            </div>
            <div className="template">
                <img src={ template2}  alt="image not found" onClick={() => {
                    setShow(true)
                    setShowTemp({
                        template: template2,
                        id:2
                    });
                }} />
            </div>
            <div className="template">
                <img src={ template3}  alt="image not found" onClick={() => {
                    setShow(true)
                    setShowTemp({
                        template: template3,
                        id:3
                    });
                }} />
            </div>
            </div>
            <div className="template-sub-div">
            <div className="template">
                <img src={ template4 } alt="image not found" onClick={() => {
                    setShow(true)
                    setShowTemp({
                        template:template4,
                        id:4
                    });
                }} />
            </div>
            <div className="template">
                <img src={ template5} alt="image not found" onClick={() => {
                    setShow(true)
                    setShowTemp({
                        template: template5,
                        id:5
                    });
                }} />
            </div>
            <div className="template">
                <img src={template6} alt="image not found" onClick={() => {
                    setShow(true)
                    setShowTemp({
                        template:template6,
                        id:6
                    });
                }} />
            </div>
            </div>
            <div className="template-sub-div">
            <div className="template">
                <img src={template7}  alt="image not found" onClick={() => {
                    setShow(true)
                    setShowTemp({
                        template:template7,
                        id:7
                    });
                }} />
            </div>
            <div className="template">
                <img src={template8} alt="image not found" onClick={() => {
                    setShow(true)
                    setShowTemp({
                        template:template8,
                        id:8
                    });
                }} />
            </div>
            <div className="template">
                <img src={template9} alt="image not found" onClick={() => {
                    setShow(true)
                    setShowTemp({
                        template: template9,
                        id:9
                    });
                }} />
            </div>
            </div>
             
        </div>
    )
    
}
export default AllInvitaion