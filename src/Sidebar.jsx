import React from 'react';
import { BiSolidAnalyse } from 'react-icons/bi';
import {
    BsListCheck, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
    BsCart3, BsMenuButtonWideFill, BsFillGearFill,
    BsClockHistory
} from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsListCheck className='icon_header' /> MENU
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="#">
                    <BsGrid1X2Fill className='icon' /> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="#">
                    <BsClockHistory className='icon' /> History
                </a>
            </li>
             <li className='sidebar-list-item'>
                <a href="#">
                    <BiSolidAnalyse className='icon' /> Insights
                </a>
            </li>
            {/*<li className='sidebar-list-item'>
                <a href="#">
                    <BsPeopleFill className='icon' /> Customers
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="#">
                    <BsListCheck className='icon' /> Inventory
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="#">
                    <BsMenuButtonWideFill className='icon' /> Reports
                </a>
            </li> */}
            <li className='sidebar-list-item'>
                <a href="#">
                    <BsFillGearFill className='icon' /> Settings
                </a>
            </li>
        </ul>
    </aside>
  );
}

export default Sidebar;
