import React,{useState} from "react";
import Header from "../components/header/Header";
import LeftNavi from "../components/rehabilitation/LeftNavi";
import Card from "../components/rehabilitation/Card";
import useLeftnavi from "../hooks/useLeftnavi";



function RehabilitationPage() {
    const {selectedCategories, selectedItem,setSelectedCategories, handleSelect, handleItemClick, rehabCategories} = useLeftnavi();

    return ( 
        <>
        <Header />
        <div style={{backgroundColor:"#FFFBEB", width:"100%",height:"100vh",display:"flex"}}>
            
            <LeftNavi selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} handleSelect={handleSelect} handleItemClick={handleItemClick}  rehabCategories={rehabCategories}/>
            {/* <SpineDetectioncard/> */}
            <Card name={selectedItem}/>
         
        </div>
        </>
    );
}

export default RehabilitationPage;