import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";

import Sliders from "../components/Slider/Sliders";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import Campaigns from "../components/Campaigns/Campaigns";
import React from "react";
import Blogs from "../components/Blogs/Blogs";
import Brands from "../components/Brands/Brands";
import CampaignSingle from "../components/CampaignSingle/CampaignSingle";

const HomePage = () => {
  return (

    <React.Fragment> <Header />
     <Sliders/>
     <Categories/>
     <Products/>
    <Campaigns/>
    <Products/>
    <Blogs/>
    <Brands/>
    <CampaignSingle/>
      
      <Footer/></React.Fragment>
    
      
  
  )
}

export default HomePage
