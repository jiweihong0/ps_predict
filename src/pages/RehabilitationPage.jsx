import React,{useState} from "react";
import Header from "../components/header/Header";
import LeftNavi from "../components/rehabilitation/LeftNavi";
import Card from "../components/rehabilitation/Card";
import useLeftnavi from "../hooks/useLeftnavi";



function RehabilitationPage() {
    const {loading,isimage, selectedItemdetails,sport,startdefault,selectedCategories, selectedItem,setSelectedCategories, handleSelect, handleItemClick, rehabCategories} = useLeftnavi();
    console.log(selectedItemdetails);
    return ( 
        <>
        <Header />
        <div style={{backgroundColor:"#FFFBEB", width:"100%",height:"100vh",display:"flex"}}>
            
            <LeftNavi sport={sport} startdefault={startdefault} selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} handleSelect={handleSelect} handleItemClick={handleItemClick}  rehabCategories={rehabCategories}/>
            {/* <SpineDetectioncard/> */}
            <Card name={selectedItem} selectedItemdetails={selectedItemdetails} isimage={isimage} loading={loading}/>
         
        </div>
        </>
    );
}

export default RehabilitationPage;