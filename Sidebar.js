import React, {useEffect, useState} from "react";
import {Divider} from "primereact/divider";
import {Avatar} from "primereact/avatar";
import {Button} from "primereact/button";
import {useNavigate,useLocation} from 'react-router-dom';
import {Tag} from "primereact/tag";


function BusinessItem(props) {

    const navigate=useNavigate();

    const [expanded, setExpanded] = useState(false);

    return <div>

        <div className="flex align-items-center gap-1">
            <Avatar/>
            <Button className="flex-1 p-1 p-button-text text-xs" onClick={props.onClick} label={props.title}/>
            <Button className="w-fit p-1 p-button-text text-xs" onClick={()=>{setExpanded(!expanded)}} icon={`${expanded ?'pi pi-chevron-up':'pi pi-chevron-down'}`}/>
        </div>

        <div className={`text-xs ${!expanded && 'hidden'}`}>
            {
                props.items.map((e)=>{return(<div onClick={()=>{navigate(`/project/${e.id}`)}} className="p-2 cursor-pointer">{e.name}</div>)})
            }
        </div>
    </div>;
}
function SidebarItem(props){

    const location=useLocation();

    return <div className={`flex align-items-center p-1 gap-2 ${props.onClick && 'cursor-pointer'} ${location.pathname==props.pathName && 'bg-gray-100 border-right-3 border-primary'} `}  onClick={props.onClick}>
        {
            props.icon && (<Avatar icon={props.icon}/>)
        }
        {
            props.image && (<Avatar image={props.image} className="avatar-sm"/>)
        }

        <div className={props.className ? props.className :'text-sm'}>{props.title}</div>
        {
            props.tag && (<Tag severity={"danger"} className="flex align-items-center justify-content-center" style={{width:'1.5rem',height:"1.5rem"}} rounded>{props.tag}</Tag>)
        }

    </div>;
}


function Sidebar(props) {

    const navigate=useNavigate();

    return(
        <div className="w-2 flex flex-column justify-content-between border-left-2 border-gray-300 p-2 bg-white">
            <div className="flex flex-column gap-2">
                <SidebarItem title={'پمنا'} image={`${process.env.PUBLIC_URL}/assets/image/pmna.png`}/>
                <Divider className="m-0"/>
                <SidebarItem title={'خانه'} pathName={'/'} onClick={()=>{navigate('/')}} image={`${process.env.PUBLIC_URL}/assets/icons/home.svg`}/>
                <SidebarItem className={'text-sm'} title={'کسب و کارها'}/>
                {
                    props.initData && props.initData.businesses.map((b)=>{
                        return(
                            <BusinessItem title={b.name} onClick={()=>{navigate('/business/portfolio')}} items={b.projects}/>

                        )
                    })
                }
                <SidebarItem className={'text-xs'} title={'افزودن کسب و کار'}  onClick={()=>{navigate('/business/add_business')}} image={`${process.env.PUBLIC_URL}/assets/icons/plus.svg`}/>
            </div>
            <div className="flex flex-column gap-2">
                <SidebarItem title={'جدید'} image={`${process.env.PUBLIC_URL}/assets/icons/plus.svg`}/>
                <SidebarItem title={'راهنما'} image={`${process.env.PUBLIC_URL}/assets/icons/info.svg`}/>
                <SidebarItem title={'اعلانات'} tag={props.initData && props.initData.notifications.length} image={`${process.env.PUBLIC_URL}/assets/icons/notification.svg`}/>
                <SidebarItem title={props.initData && (props.initData.user.name+' '+props.initData.user.family)} image={`${process.env.PUBLIC_URL}/assets/image/avatar_female.png`}/>
            </div>
        </div>

    )

}

export default Sidebar;