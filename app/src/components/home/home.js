import React from "react"
import Navbar from "./navigation/navigation"
import '../home/home.css'
import Sidebar from "./sidebar/sidebar"
import { useState } from 'react'
import { CiSearch } from 'react-icons/ci';
import { MdInsertInvitation } from 'react-icons/md';
import { PiCards } from 'react-icons/pi';
import { LiaAddressCardSolid } from 'react-icons/lia';
import Invitation from "../tempdata/invitation"
import Modal from "../Modal/modal"
import Allinvitaion from "../tempdata/allinvitaion"

const Home = () => {
  const [value, SetVAlue] = useState("");
  const [cardValue, setCardValue] = useState("");
  const [show, setShow] = useState(false)
  const[showtemp,setShowTemp]=useState({ 
    template:"",
    id:null
  })
  const handleValue = (e) => {
    SetVAlue(e.target.value)
  }
  function handlemodal() {
    return (
      <Modal  setShow={setShow} showtemp={showtemp} />
      //<Modal>
          // ChildComponent
      // </Modal>
    )
  }
  //console.log(value)
  function handletemplate() {
    switch (cardValue) {
      case "invite":
        {
          return (
            <Invitation cardValue={cardValue} setShowTemp={setShowTemp}  setShow={setShow}/>
          )
        }
      case "cards":
        {
          return (
            <Invitation cardValue={cardValue} setShowTemp={setShowTemp} setShow={setShow} />
          )
        }
      case "postcards":
        {
          return (
            <Invitation cardValue={cardValue}  setShowTemp={setShowTemp} setShow={setShow}/>
          )
        }
      case "showall":
        {
          return <Allinvitaion setShowTemp={setShowTemp} setShow={setShow}/>
        }

      default:
        {
          return null;

        }
    }
  }

  return (
    <>
      <Navbar />
      <div className="main-div">
        <Sidebar  setCardValue={setCardValue}/>
        <div className="content-div">
          <div className="upper-div">
            <div className="upper-div-heading">
              <h1>Design Attractive Invitation</h1>
              <div className="input-div">
                <CiSearch className="search-logo" />
                <input type="text" value={value} placeholder="Search" onChange={handleValue} />
              </div>
            </div>
            <div className="sub-menu-main">
              <div className="sub-menu" onClick={() => setCardValue("invite")}>
                <MdInsertInvitation />
                <h6>Invitations</h6>
              </div>
              <div className="sub-menu" onClick={() => setCardValue("cards")}>
                <PiCards />
                <h6 >Cards</h6>
              </div>
              <div className="sub-menu" onClick={() => setCardValue("postcards")}>
                <LiaAddressCardSolid />
                <h6 >Postman Cards</h6>
              </div>
            </div>
          </div>
          <div className="template-maindiv">
            {handletemplate()}
            {/* <button onClick={() => { setShow(true) }}>clcik me</button> */}
            
          </div>
        </div>
      </div>
      {show === true ? handlemodal() : ''}
    </>
  )
}
export default Home 