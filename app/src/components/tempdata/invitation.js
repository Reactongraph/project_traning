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


const Invitation = ({ cardValue }) => {
    return (
        <div className="template-div">
            <div className="template">
                <img src={cardValue === "invite" ? template1 : cardValue === "cards" ? template4 : template7} alt="image not found" />
            </div>
            <div className="template">
                <img src={cardValue === "invite" ? template2 : cardValue === "cards" ? template5 : template8} alt="image not found" />
            </div>
            <div className="template">
                <img src={cardValue === "invite" ? template3 : cardValue === "cards" ? template6 : template9} alt="image not found" />
            </div>

        </div>
    )
}

export default Invitation