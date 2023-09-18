import React from "react";
import './sidebar.css'
import { AiOutlineRight} from 'react-icons/ai';
import {AiOutlineDelete} from 'react-icons/ai';
import {MdOutlineBrandingWatermark} from 'react-icons/md';
import {GoProjectSymlink} from 'react-icons/go'
import {LuLayoutTemplate} from 'react-icons/lu'
const Sidebar=()=>{
 
    return(
       <div className="sidebar-main-div">
        <div className="sidebar-upper">
            <div className="Sidebar-symbol">A</div>
            <div className="sidebar-info">
            <h4>Personal</h4>
          <p>aakashvermartk@gmail.com</p>
          </div>
        </div>
        <div className="hr"></div>
        <div>
        <div className="sidebar-menu"><LuLayoutTemplate/><span>Templates</span><AiOutlineRight className="sidebar-menu-arrows"/></div>
        <div className="sidebar-menu"><GoProjectSymlink/><span>Projects</span><AiOutlineRight className="sidebar-menu-arrows"/></div>
        <div className="sidebar-menu"><MdOutlineBrandingWatermark/><span>Brand</span><AiOutlineRight className="sidebar-menu-arrows"/></div>
        <div className="sidebar-menu"><AiOutlineDelete/><span>Trash</span><AiOutlineRight className="sidebar-menu-arrows"/></div>
        </div>   
        <div>
            </div>     
        
       </div>
    )
}

export default Sidebar