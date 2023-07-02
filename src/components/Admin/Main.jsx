/* eslint-disable react/prop-types */
import logOutUser from '../Helpers/Logout'
import '../../styles/Admin/Main.css'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { Outlet } from 'react-router-dom'
import { AiOutlineLogout } from "react-icons/ai";
import { Context } from '../../store/AppContext';
import { useContext } from 'react';



const Main = ({ menuInflate }) => {
 
 const {search, setSearch} = useContext(Context)

  return (
  <div className="dashboard">
    <div className="top">
        <AiOutlineMenu className=" sidebar-toggle" onClick={menuInflate}/>
        <div className="search-box">
            <AiOutlineSearch className="search-icon" />
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
        </div>
      <AiOutlineLogout className="icon " style={{margin: "0 2rem"}} onClick={logOutUser} />    
    </div>
    <div><Outlet /></div>
</div>
  )
}

export default Main