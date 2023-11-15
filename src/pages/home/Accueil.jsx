import React from 'react'
import Navbar from '../../components/Navbar';
import Header from '../../components/header/Header';
import Featured from '../../components/featured';
import PropertyList from '../../components/propertyList';
import FeaturedProperties from '../../components/featuredProperries';
import MailList from '../../components/mailList';
import Footer from '../../components/footer';

const Accueil = () => {
  return (
    <div>
     <Navbar/>
     <Header/>
     <div className="homeContainer" style={{
      marginTop: "50px",
      alignItems: "center",
      display: "flex",
      gap: "30px",
      flexDirection:"column"
     }}>
      <Featured/>
      <h1 className="homeTitlte" style={{ width:"1024px", fontSize:" 20px" }}>
      Browse by property type
        </h1>
        <PropertyList/>
        <h1 className="homeTitlte" style={{ width:"1024px", fontSize:" 20px" }}>
        Homes guests love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
     </div>
    </div>
  )
}

export default Accueil
