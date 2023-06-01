import './App.css';
import Home from "./pages/home";
import Business from "./pages/business";
import Project from "./pages/project";
import Portfolio from "./pages/business/portfolio";
import Employees from "./pages/business/employees";
import Financial from "./pages/business/financial";
import Warehouse from "./pages/business/warehouse";
import Settings from "./pages/business/settings";
import {Route,Routes} from 'react-router-dom';
import AddBusiness from "./pages/business/AddBusiness";
import {useEffect, useState} from "react";
import {LocalData} from "./service/Rest";
import Sidebar from "./Sidebar";



function App() {
    const [initData,setInitData]=useState(null);

    useEffect(()=>{
        const  localData=new LocalData();
        localData.getInitData().then(data=>{
            setInitData(data);
        })
    },[]);


  return (
    <div className="flex h-screen">
        <Sidebar initData={initData}/>

        <div className="flex-1">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/business" element={<Business/>}/>
                <Route path="/business/portfolio" element={<Portfolio/>}/>
                <Route path="/business/employees" element={<Employees/>}/>
                <Route path="/business/financial" element={<Financial/>}/>
                <Route path="/business/warehouse" element={<Warehouse/>}/>
                <Route path="/business/settings" element={<Settings/>}/>
                <Route path="/business/add_business" element={<AddBusiness/>}/>
                <Route path="/home/:content" element={<Home/>}/>
                <Route path="/project/:content" element={<Project/>}/>
            </Routes>

        </div>
    </div>
  );
}

export default App;