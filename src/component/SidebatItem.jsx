import React from 'react';
import { NavLink } from 'react-router-dom';

const SidebatItem = ({icon, content, isVisible,link}) => {
    console.log("Abcd",content);
  return (
    <>
       <NavLink className={`link `} to={link}>
        <li  className={({ isActive, isPending }) =>
          isActive
            ? "active"
            : isPending
            ? "pending"
            : ""
        `${isVisible ? "list_name" : "list_noName"}`} >
        {icon}
        {isVisible && <span className='sidebar_content'>{content}</span>}
        </li>
       </NavLink>
    </>
  )
}

export default SidebatItem
