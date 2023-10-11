import React from "react";
import "./template2.css"
import flower from '../images/flower.jpeg'
import { useState } from "react";
const Template2 = (edit) => {
    const [content, setContent] = useState({
        name: "Harper Russo & Margarita Perez",
        date: "Sun,22 june 2024",
        time: "2 Am"
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setContent({ ...content, [name]: value })
    }
    return (
        <div className="bdy1">
            <div className="img1">
                <img src={flower} />

            </div>
            {/* <div className="contant-div"> */}
            <p>Please join us in the celebration of our wedding</p>
            <h1>{edit ?
                <input type="text" name="name" value={content.name} onChange={handleChange} /> : content.name}</h1>
            <h5 className="h5">Save the date</h5>
            <h6>{edit ?
                <input type="text" name="date" value={content.date} onChange={handleChange} /> : content.date}</h6>
            <h5 className="h5">{edit ?
                <input type="text" name="time" value={content.time} onChange={handleChange} /> : content.time}</h5>
            {/* </div> */}
            <div className="img2">
                <img src={flower} />
            </div>
        </div>
    )
}

export default Template2