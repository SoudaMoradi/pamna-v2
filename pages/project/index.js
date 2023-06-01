import React,{useState} from 'react';
import {Menubar} from "primereact/menubar";
import Sidebar from "../../Sidebar";
import {useLocation,useNavigate,useParams} from "react-router-dom";
import Accountants from "./Accountants";
import Calendar from "./Calendar";
import Dashboard from "./Dashboard";
import Documents from "./Documents";
import Gantt from "./Gantt";
import ProjectBoard from "./ProjectBoard";
import ToDoList from "./ToDoList";
import MyConfigs from "../home/MyConfigs";
import {Avatar} from "primereact/avatar";




function MenubarStart() {
    return(
        <div className="flex">
            <span>پروژه راه اندازی تابلو پیام متغیر محور ...</span>
            <span className="pi pi-cog"/>

        </div>
    )

}


function MenubarEnd() {
    return <div className="flex justify-content-end gap-2 ">

        <span className="pi pi-search"/>
        <span className="pi pi-eye"/>
        <span className="pi pi-filter"/>
    </div>;

}


function Index() {
    const params=useParams();
    const navigate=useNavigate();
    const location=useLocation();


    const  contentProjects={
        accountants: <Accountants/>,
        calendar: <Calendar/>,
        dashboard: <Dashboard/>,
        documents: <Documents/>,
        gantt: <Gantt/>,
        project_board: <ProjectBoard/>,
        todolist: <ToDoList/>,
        my_configs: <MyConfigs/>,
    }

    function menuTemplate(item,options) {
        return (

            <div onClick={options.onClick} className={`cursor-pointer p-2 border-round hover:bg-gray-100 mr-1 ml-1 ${location.pathname == item.path ? 'text-primary-500 bg-gray-200' : ''}`}>
                <span className={`${item.icon} text-xs flex align-content-center`}>

                </span>
                <span>{item.label}</span>

            </div>

        );
    }




    const tabItems=[
        {label:'لیست کارها',
            command:()=>{navigate('/project/todolist')},
            path:'/project/todolist',
            template: menuTemplate,
        },

        {label:'برد پروژه',
            command:()=>{navigate('/project/projectwin')},
            path:'/project/projectwin',
            template: menuTemplate,
        },

        {label:'داشبورد',
            command:()=>{navigate('/project/dashboard')},
            path:'/project/dashboard',
            template: menuTemplate,

        },

        {label:'گانت',
            command:()=>{navigate('/project/gantt')},
            path:'/project/gantt',
            template: menuTemplate,

        },

        {label:'تقویم',
            command:()=>{navigate('/project/calendar')},
            path:'/project/calendar',
            template: menuTemplate,
        },

        {label:'حسابدار',
            command:()=>{navigate('/project/accountants')},
            path:'/project/accountants',
            template: menuTemplate,

        },

        {label:'اسناد',
            command:()=>{navigate('/project/documents')},
            path:'/project/documents',
            template: menuTemplate,


        },

        {icon:'pi pi-pencil',
            command:()=>{navigate('/project/my_configs')},
            path:'/project/my_configs',
            template: menuTemplate,
        },

    ];

    return(
        <div className="flex h-full">
            <div className="flex-1">
                <Menubar className="justify-content-center w-full text-xs bg-transparent border-none" model={tabItems} start={<MenubarStart/>} end={<MenubarEnd/>}/>


                <div className="flex justify-content-center align-items-center h-full">{ contentProjects[`${params.content}`]}</div>

            </div>
        </div>
    )

}

export default Index;