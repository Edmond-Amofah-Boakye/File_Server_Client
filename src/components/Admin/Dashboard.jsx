import { useState } from 'react'
import Main from "./Main"
import Sidebar from "./Sidebar"
import '../../styles/Admin/Dashboard.css'
import '../../styles/Admin/Sidebar.css'

const Dashboard = () => {
    const [menu, setMenu] = useState(false)
    
    function menuInflate (){
        return setMenu(!menu)
    }

  return (
    <div className="admin-dashboard">
        <Sidebar menu = {menu} /> 
        <Main menuInflate = { menuInflate } menu = {menu}/>
    </div>
  )
}

export default Dashboard