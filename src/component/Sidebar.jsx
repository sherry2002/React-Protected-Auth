import React,{ useEffect, useState, useContext } from 'react'
import './sidebar.css';
import { UserRoleContext } from '../context/User';
import SidebatItem from './SidebatItem';
import { IoMdMenu } from "react-icons/io";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

const Sidebar = () => {
    const { role } = useContext(UserRoleContext);
    const adminData = [
      {
        icon: <i className="bi bi-speedometer2"></i>,
        name: "Dashboard",
        link: "/dashboard"
      },
      {
        icon: <i className="bi bi-people"></i>,
        name: "Employee",
        link : "/employee"
      },
      {
        icon:<i className="bi bi-columns"></i>,
        name: "Category",
        link : "/category"
      },
      {
        icon:<i className="bi bi-person"></i>,
        name: "Profile",
        link : "/profile"
      },
      {
        icon:<i className="bi bi-power"></i>,
        name: "logout",
        link : "/"
      }
    ];
    const userData = [
        {
          icon: <i className="bi bi-speedometer2"></i>,
          name: "Traing",
          link: "/"
        },
        {
          icon: <i className="bi bi-people"></i>,
          name: "user",
          link : "/user"
        },
      
    ];
    const [list, setList]  = useState(null)
    const [toggle,setToggle] =useState(false);
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    const handleResize = ()=> {
      setWindowDimensions(getWindowDimensions());
    }

    useEffect(()=>{
     window.addEventListener('resize', handleResize);
    
     // Clean up the event listener when the component unmounts
     return () => {
       window.removeEventListener('resize', handleResize);
     };  
    },[])

    useEffect(()=>{
      setList(role && role.user_type === "admin" ? adminData : userData)
    },[role])

    useEffect(()=>{
     if(windowDimensions.width <= 650){
        setToggle(true)
     }
    },[windowDimensions]);


  return (
    <React.Fragment>
       {
        window.location.pathname !== "/" &&
        window.location.pathname !== "/employeeLogin" &&
        window.location.pathname !== "/login" &&
        window.location.pathname !== "/reset-password" &&
        window.location.pathname !== "/register" && (
          <div className={`main_sidebar ${toggle ? "min_width" : "full_width"}`}>
            <IoMdMenu className="list_icon" onClick={()=>setToggle(!toggle)} />
            <div>
             <ul className="sidebar_list">
               { list &&
                  list.map((list,index)=>{
                    return <SidebatItem key={index} icon={list.icon} content={list.name} link={list.link} isVisible={!toggle}/>
                  })
               }
             </ul>
            </div>
          </div>
        )
       }
    </React.Fragment>
  )
}


export default Sidebar;
