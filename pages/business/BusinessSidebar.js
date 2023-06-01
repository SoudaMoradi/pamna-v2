import {useNavigate} from "react-router-dom";
import {Button} from "primereact/button";
import React from "react";


function BusinessSidebar(props) {
    const navigate=useNavigate();
    return(
        <div className="flex flex-column justify-content-center align-items-center h-full bg-white border-left-2 border-gray-300 gap-2 p-1">
            <Button className="p-button-text text-sm w-full" label={"پورتفولیو"} onClick={()=>{navigate('/business/portfolio')}} icon="pi pi-th-large" iconPos="top"/>
            <Button className="p-button-text text-sm w-full" label={"کارکنان"} onClick={()=>{navigate('/business/employees')}} icon="pi pi-users" iconPos="top"/>
            <Button className="p-button-text text-sm w-full" label={"مالی"} onClick={()=>{navigate('/business/financial')}} icon="pi pi-wallet" iconPos="top"/>
            <Button className="p-button-text text-sm w-full" label={"انبار"} onClick={()=>{navigate('/business/warehouse')}} icon="pi pi-shopping-cart" iconPos="top"/>
            <Button className="p-button-text text-sm w-full" label={"تنظیمات"} onClick={()=>{navigate('/business/settings')}} icon="pi pi-cog" iconPos="top"/>
        </div>
    );
}
export default BusinessSidebar;