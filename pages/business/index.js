import React,{useState} from 'react';
import {Menubar} from "primereact/menubar";
import Sidebar from "../../Sidebar";
import {useNavigate,useLocation,useParams} from 'react-router-dom';
import {Button} from "primereact/button";
import BusinessSidebar from "./BusinessSidebar";





function MenubarEnd() {
    return <div className="flex justify-content-end gap-2 ">
        <span className="pi pi-search"/>
        <span className="pi pi-eye"/>
        <span className="pi pi-filter"/>
    </div>;
}


function Index() {
    const params=useParams();


    const tabItems=[
        {label:'خلاصه فعالیت های من'},

        {label:'فعالیت تیم ها'},

        {label:'وضعیت پروژه ها'},

        {label:'کارهای من'},

        {label:'برد من'},

        {label:'تقویم من'},

        {label:'اسناد'},
        {icon:'pi pi-pencil'},

    ];

    return(
        <div className="flex h-full">
            <div className="flex-1 flex">
                <BusinessSidebar/>
                <div className="flex justify-content-center align-items-center h-full flex-1">business</div>
                <Menubar className="justify-content-center w-full text-xs bg-transparent border-none" model={tabItems} start={<div></div>} end={<MenubarEnd/>}/>
            </div>
        </div>
    )
    
}








export default Index;