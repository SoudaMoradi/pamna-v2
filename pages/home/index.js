import React, {useEffect, useState} from 'react';
import {Menubar} from "primereact/menubar";
import Sidebar from "../../Sidebar";
import MyWorks from "./MyWorks";
import MyActivities from "./MyActivities";
import {useParams,useNavigate,useLocation} from "react-router-dom";
import MyCalendar from "./MyCalendar";
import MyBoard from "./MyBoard";
import Documents from "./Documents";
import TeamActivity from "./TeamActivity";
import ProjectsStatus from "./ProjectsStatus";
import MyConfigs from "./MyConfigs";




function MenubarEnd() {
    return <div className="flex justify-content-end gap-2 ">
        <span className="pi pi-search"/>
        <span className="pi pi-eye"/>
        <span className="pi pi-filter"/>
    </div>;
}


function Index(props) {

    const params=useParams();
    const navigate=useNavigate();
    const location=useLocation();
    // useEffect(()=>{
    //     console.log(props)
    // },[]);



    const contentPage={
        my_activities:<MyActivities/>,
        my_calendar:<MyCalendar/>,
        team_activity: <TeamActivity/>,
        projects_status: <ProjectsStatus/>,
        my_works: <MyWorks/>,
        my_board: <MyBoard/>,
        documents: <Documents/>,
        my_configs:<MyConfigs/>,
    }


    function menuTemplate(item,options) {
        return (
            /* custom element */
            <div onClick={options.onClick} className={`cursor-pointer p-2 border-round hover:bg-gray-100 mr-1 ml-1 ${location.pathname == item.path ? 'text-primary-500 bg-gray-200' : ''}`}>
                <span className={`${item.icon} text-xs flex align-content-center`}>

                </span>
                <span>{item.label}</span>

            </div>
        );
    }

    const tabItems=[




        {
            label:'خلاصه فعالیت های من',
            command:()=>{navigate('/home/my_activities')},
            path:'/home/my_activities',
            template: menuTemplate,
        },

        {
            label:'فعالیت تیم ها',
            command:()=>{navigate('/home/team_activity')},
            path:'/home/team_activity',
            template: menuTemplate,
        },

        {
            label:'وضعیت پروژه ها',
            command:()=>{navigate('/home/projects_status')},
            path:'/home/projects_status',
            template: menuTemplate,

        },


        {
            label:'کارهای من',
            command:()=>{navigate('/home/my_works')},
            path:'/home/my_works',
            template: menuTemplate,
        },

        {
            label:'برد من',
            command:()=>{navigate('/home/my_board')},
            path:'/home/my_board',
            template: menuTemplate,
        },

        {
            label:'تقویم من',
            command:()=>{navigate('/home/my_calendar')},
            path:'/home/my_calendar',
            template: menuTemplate,
        },

        {
            label:'اسناد',
            command:()=>{navigate('/home/documents')},
            path:'/home/documents',
            template: menuTemplate,
        },

        {
            icon:'pi pi-pencil',
            command:()=>{navigate('/home/my_configs')},
            path:'/home/my_configs',
            template: menuTemplate,
        },


    ];



    return(
        <div className="flex h-full">
            <div className="flex-1 flex flex-column">
                <Menubar className="justify-content-center w-full text-xs bg-transparent border-none" model={tabItems} start={<div></div>} end={<MenubarEnd/>}/>
                <div className="flex flex-1 justify-content-center align-items-center">
                    { contentPage[`${params.content}`]}
                </div>
            </div>
        </div>
    )
    
}

export default Index;