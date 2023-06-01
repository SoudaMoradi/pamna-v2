import React from 'react';
import Sidebar from "../../../Sidebar";
import BusinessSidebar from "../BusinessSidebar";



function Index(props) {
    return(
        <div className="flex h-full">
            <div className="flex-1 flex">
                <BusinessSidebar/>
                <div className="flex justify-content-center align-items-center h-full flex-1">settings</div>
                {/*<Menubar className="justify-content-center w-full text-xs bg-transparent border-none" model={tabItems} start={<div></div>} end={<MenubarEnd/>}/>*/}
            </div>
        </div>


    )

}


export default Index;