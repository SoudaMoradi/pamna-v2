import React, {useEffect, useState} from "react";
import Sidebar from "../../Sidebar";
import { InputSwitch } from 'primereact/inputswitch';
import {Button} from "primereact/button";
import {Divider} from "primereact/divider";
import {InputText} from "primereact/inputtext";
import { Timeline } from 'primereact/timeline';
import {LocalData} from "../../service/Rest";



function PlanItem(props) {
    return <div className={`w-3 h-full border-round-lg border-1 border-gray-100 shadow-1 ${props.className ? props.className:'bg-white'}`}>
        <div className="text-center p-4 font-bold">
            {props.title}

        </div>
        <div className="flex-1">
            <ul className="text-xs">
                {props.features.map((f)=>{
                    return(
                        <li>{f}</li>
                    )
                })}
            </ul>
        </div>

    </div>;
}

function SelectPlan() {
    return <div className="w-8 flex gap-3 pt-4">
        <PlanItem title={"تیمی"}
                  features={[" تعریف پروژه(3پروژه)", "تعریف کاربر(5نفر)", "تقویم پروژه", "لیست کارها", "برد کانبان", "داشبورد پروژه", "15,0 مگابایت فضای ذخیره", "گفتگو", "اپلیکیشن پروژه",]}/>
        <PlanItem className={"bg-primary-600 text-white"} title={"استارت آپی"}
                  features={["تعریف پروژه(20پروژه)", "تعریف کاربر(10نفر)", "تقویم پروژه", "لیست کارها", "برد کانبان", "داشبورد پروژه", "نمایش وضعیت کلی پروژه ها", " گزارش گیری پیشرفته", "تحلیل گر پیشرفته", "مدیریت و تحلیلگر مالی", "دستیار حسابدار", "5 گیگابایت فضای ذخیره", "گفتگو", "اپلیکیشن پروژه"]}/>
        <PlanItem title={"شرکتی"}
                  features={[" تعریف پروژه(3پروژه)", "تعریف کاربر(5نفر)", "تقویم پروژه", "لیست کارها", "برد کانبان", "داشبورد پروژه", "15,0 مگابایت فضای ذخیره", "گفتگو", "اپلیکیشن پروژه",]}/>
        <PlanItem title={"سازمانی"}
                  features={[" تعریف پروژه(3پروژه)", "تعریف کاربر(5نفر)", "تقویم پروژه", "لیست کارها", "برد کانبان", "داشبورد پروژه", "15,0 مگابایت فضای ذخیره", "گفتگو", "اپلیکیشن پروژه",]}/>

    </div>;
}

function BusinessInfo() {
    const  localData=new LocalData()
    const [avatars,setAvatars]=useState([])
    const [selectedAvatar,setSelectedAvatar]=useState()

    useEffect(()=>{
        localData.getAvatars().then((result)=>{
            setAvatars(result)

        })

    },[])


    return <div className="flex flex-column justify-content-center align-items-center w-8">

        <div>
            <img className={`${selectedAvatar&&selectedAvatar.color} m-2 w-7rem h-7rem border-circle`}  src={`${process.env.PUBLIC_URL}/${selectedAvatar&&selectedAvatar.url}`}/>

        </div>

        <div>
            {
                avatars.map((avatar)=>{
                    return(
                      <img onClick={()=>{setSelectedAvatar(avatar)}}  className={`${avatar.color} m-2 w-3rem h-3rem border-circle cursor-pointer`}  src={`${process.env.PUBLIC_URL}/${avatar.url}`}/>
                    )
                })
            }
        </div>

        <div className="flex flex-wrap w-8">
            <div className="w-6 p-1">
                                <span className="p-float-label">
                                <InputText className="w-full"/>
                                <label>نام کسب و کار</label>
                                 </span>
            </div>
            <div className="w-6 p-1">
                                <span className="p-float-label">
                                <InputText className="w-full"/>
                                <label>نام کسب و کار</label>
                            </span>
            </div>
            <div className="w-6 p-1">
                                <span className="p-float-label">
                                <InputText className="w-full"/>
                                <label>نام کسب و کار</label>
                            </span>
            </div>
            <div className="w-6 p-1">
                                <span className="p-float-label">
                                <InputText className="w-full"/>
                                <label>نام کسب و کار</label>
                            </span>
            </div>
        </div>

    </div>;
}

function AddBusiness() {

    const [content,setContent]=useState('business_info');
    const contentPages={
        business_info:<BusinessInfo/>,
        select_plan:<SelectPlan/>
    }

    return(
        <div className="flex h-full">

            <div className="flex-1 flex flex-column">
                {/*header*/}
                <div>
                    <h4 className="text-center">افزودن کسب و کار</h4>
                    <div className="flex justify-content-center gap-2">
                        <span>ماهیانه</span>
                        <InputSwitch checked={'true'}/>
                        <span>سالیانه</span>
                    </div>
                </div>
                {/*content*/}
                <div className="flex-1 flex">
                    <div className="w-2 flex align-items-center">
                        <Timeline marker={<i className={`pi pi-circle-fill ${' text-green-500'}`}/>} className="text-xs"
                                  value={['مشخصات', 'انتخاب پلن']} content={(item) => item}/>
                    </div>
                    {contentPages[`${content}`]}
                </div>

                {/*footer*/}
                <div className="flex flex-column gap-3 p-4">
                    <div className="flex justify-content-center">
                        <Divider className="w-8" type={'dashed'}/>

                    </div>
                    {
                        content==='select_plan'&&(
                            <div className="flex justify-content-center gap-7">
                                <span>مبلغ قابل پرداخت با احتساب 9% مالیات</span>
                                <span className="text-green-500">235,000 هزار تومان</span>
                            </div>
                        )
                    }
                    <div className="flex">
                        <div className="w-4">
                            <Button className="p-button-text text-red-500" label={'مرحله قبلی'}
                                    icon="pi pi-angle-right"/>
                        </div>
                        <div className="w-4 flex justify-content-center gap-3">
                            <Button className="w-full p-button-outlined p-button-danger flex-1 p-0 p-button-sm" onClick={()=>{setContent(content==='select_plan'?'business_info':'business_info')}} label={'لغو'}/>
                            <Button className={` w-full flex-1 p-0 p-button-sm ${content==='business_info'?'p-button-primary':' p-button-success'} ` } onClick={()=>{setContent(content==='business_info'?'select_plan':'select_plan')}} label={content==='business_info'?'بعدی' :'پرداخت ' }/>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    )
}

export default AddBusiness;