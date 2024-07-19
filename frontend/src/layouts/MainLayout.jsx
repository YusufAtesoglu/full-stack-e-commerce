import Footer from "../components/Layout/Footer/Footer"
import Header from "../components/Layout/Header/Header"
import propTypes from "prop-types"
import React, { useState } from "react"
import Search from "../components/Modals/Search/Search"
import Dialog from "../components/Modals/Dialog/Dialog"
const MainLayout = ({children}) => {
const [isSearchShow, setIsSearchShow]=useState(false)
const [isDialogShow, setIsDialogShow]=useState(true)
  return (
    <div className="main-layout">
      <Dialog isDialogShow={isDialogShow} setIsDialogShow={setIsDialogShow} />
      <Search isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow} />
      <Header setIsSearchShow={setIsSearchShow}/>
 {children}
      <Footer/>
    </div>
  )
}

export default MainLayout
MainLayout.ropTypes={
    children:propTypes.node
}
