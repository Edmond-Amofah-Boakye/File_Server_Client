/* eslint-disable react/prop-types */
import logOutUser from '../Helpers/Logout'
import { AiFillSetting, AiOutlineLogout } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { SiFiles } from "react-icons/si";
import { HiUsers } from "react-icons/hi";
import { Link } from "react-router-dom";
import "../../styles/Admin/Sidebar.css";
import { useContext } from 'react';
import { Context } from '../../store/AppContext';


const Sidebar = ({ menu }) => {
  const {getMe} = useContext(Context)

  return (
    <nav className={menu ? "close" : ""}>
      <div className="logo-name">
        <span className="logo_name">{getMe.name}</span>
      </div>

      <div className="menu-items">
        <ul className="nav-links">
          <li>
            <Link to='/admin/dashboard'>
              <MdDashboard className="icon" />
              <span className="link-name">Dahsboard</span>
            </Link>
          </li>
          <li>
            <Link to='/admin/dashboard/files'>
              <SiFiles className="icon" />
              <span className="link-name">Files</span>
            </Link>
          </li>
          <li>
            <Link to='/admin/dashboard/users'>
              <HiUsers className="icon" />
              <span className="link-name">Users</span>
            </Link>
          </li>
          <li>
            <Link to='/admin/dashboard/settings'>
              <AiFillSetting className="icon" />
              <span className="link-name">Settings</span>
            </Link>
          </li>
        </ul>
        <ul className="logout-mode" onClick={logOutUser}>
          <li>
            <Link>
              <AiOutlineLogout className="icon" />
              <span className="link-name">Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
