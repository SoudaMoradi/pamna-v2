import React, {useEffect, useState} from "react";
import { DataTable } from 'primereact/datatable';
import {Column} from "primereact/column";
import {LocalData} from "../../service/Rest";
import {Checkbox} from "primereact/checkbox";


function ToDoList() {
    const [todoListData,setTodoListData]=useState([]);

    useEffect(()=>{
        const  localData=new LocalData();
        localData.getTodolistData().then(data=>{
            setTodoListData(data);
        })
    },[])

    return(
        <div className="h-full w-full">
            <DataTable value={todoListData}>
                <Column alignHeader={'center'} className="text-center" field="is_done" header="انجام شد" body={<Checkbox/>}/>
                <Column alignHeader={'center'} className="text-center" field="title" header="نام دستور کار"/>
                <Column alignHeader={'center'} className="text-center" field="level" header="سطح اهمیت"/>
                <Column alignHeader={'center'} className="text-center" field="date" header="تاریخ انجام"/>
                <Column alignHeader={'center'} className="text-center" field="attachments" header="فایل ها"/>
                <Column alignHeader={'center'} className="text-center" field="status" header="وضعیت"/>
                <Column alignHeader={'center'} className="text-center" field="progress" header="درصد پیشرفت"/>
                <Column alignHeader={'center'} className="text-center" field="assigned" header="محول شده به"/>
                <Column alignHeader={'center'} className="text-center" field="chats" header="گفتگو"/>
                <Column alignHeader={'center'} className="text-center" field="labels" header="برچسب ها"/>

            </DataTable>


        </div>
    )

}



export default ToDoList;