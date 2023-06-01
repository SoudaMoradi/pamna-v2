import React, {useEffect, useState} from "react";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {Checkbox} from "primereact/checkbox";
import {LocalData} from "../../service/Rest";
import {Dropdown} from "primereact/dropdown";
import { TabMenu } from 'primereact/tabmenu';
import {Button} from "primereact/button";







function Accountants() {

    const items = [
        {label: 'هزینه ها'},
        {label: 'درآمدها'},
    ];


    const [accountantsData,setAccountantsData]=useState();
    const [tabMenu,setTabMenu]=useState();


    useEffect(()=>{
        const  localData=new LocalData();
        localData.getAccountantsData().then(data=>{
            setAccountantsData(data);
        })
    },[])

 return(
     <div className="h-full w-full">
         <Button onClick={()=>{setTabMenu('0')}} className="p-button-text" label="هزینه ها"/>
         <Button onClick={()=>{setTabMenu('1')}} className="p-button-text" label="درآمد ها" />

         <DataTable value={accountantsData}>
             <Column alignHeader={'center'} className="text-center" field="number" header="ردیف" />
             <Column alignHeader={'center'} className="text-center" field="date" header="تاریخ"/>
             <Column alignHeader={'center'} className="text-center" field="Amount" header="مبلغ"/>
             <Column alignHeader={'center'} className="text-center" field="result" header="حاصل از"/>
             <Column alignHeader={'center'} className="text-center" field="to_account" header="به حساب"/>
             <Column alignHeader={'center'} className="text-center" field="document_number" header="شماره سند/پیگیری"/>
             <Column alignHeader={'center'} className="text-center" field="description" header="توضیحات"/>
             <Column alignHeader={'center'} className="text-center" field="status" header="وضعیت" body={<Dropdown panelClassName="p-0" options={[{id:1,label:'واریز شده' , className:'shabnam-font'}]} optionLabel={'label'} optionValue={'id'} value={1}/>}/>
             <Column alignHeader={'center'} className="text-center" field="attachments" header="فایل ها"/>
         </DataTable>



     </div>

 )
}




export default Accountants;