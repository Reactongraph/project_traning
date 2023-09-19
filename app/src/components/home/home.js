import React from "react"
import Navbar from "./navigation/navigation"
import '../home/home.css'
import Sidebar from "./sidebar/sidebar"
import {useState} from 'react'
import { CiSearch } from 'react-icons/ci';
import { MdInsertInvitation } from 'react-icons/md';
import { PiCards } from 'react-icons/pi';
import { LiaAddressCardSolid } from 'react-icons/lia';
const Home=()=>{
  const[value,SetVAlue]=useState("")
  const handleValue=(e)=>{
      SetVAlue(e.target.value)
  }
  console.log(value)
   return(
   <>
    <Navbar/>
    <div className="main-div">
    <Sidebar/>
    <div className="upper-div">
      <div className="upper-div-heading">
      <h1>Design Attractive Invitation</h1>
      <div className="input-div">
      <CiSearch className="search-logo"/>
      <input type="text" value={value} placeholder="Search" onChange={handleValue}/>
      </div>
      </div>
      <div className="sub-menu-main">
        <div className="sub-menu">
        <MdInsertInvitation/>
          <h6>Invitations</h6>
        </div>
        <div className="sub-menu">
          <PiCards/>
          <h6>Cards</h6>
          </div>
        <div className="sub-menu">
          <LiaAddressCardSolid/>
          <h6>Postman Cards</h6>
          </div>
      </div>
    </div>
    </div>
    </>
 )
}
export default Home 