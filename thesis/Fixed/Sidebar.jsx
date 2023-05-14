import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiSettings,FiUsers } from "react-icons/fi";
import { BiBarChartSquare } from "react-icons/bi";

const Sidebar = ({children}) => {
    const[isOpen] = useState(false);
    const menutItem=[
        {
            path:"/",
            name:"Employees",
            icon: <FiUsers/>
        },
        {
            path:"/Reports",
            name:"Reports",
            icon: <BiBarChartSquare/>
        },
        {
            path:"/Settings",
            name:"Settings",
            icon: <FiSettings/>
        },

    ]


    return(
        <div className="container">
            <div style= {{width: isOpen ? "400px" :"90px"}}className="sidebar">
                <div className="top_section">
                    <h1 style={{display: isOpen? "block" : "none"}} className="Cvsu">CVSU Stakeholder's Feedback System</h1>
                        <div style={{marginLeft: isOpen ? "0px" : "0px"}} className="bars">
                            <img src={"./images/Cvsu_logo.png"} alt="Cvsu Logo"/>
                        </div>
                </div>
                
                {
                    menutItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }


            </div>

            <main>{children}</main>
        </div>

    );

};

export default Sidebar;