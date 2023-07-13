import { AiFillHome} from 'react-icons/ai'
import { SiFiles } from 'react-icons/si'
import { HiUsers } from 'react-icons/hi'
import { Context } from '../../store/AppContext'
import { useContext } from 'react'
import Chart from './LineChart'
import { Link } from 'react-router-dom'

const MainDetails = () => {
    const { getUsers, getFiles } = useContext(Context)
  return (
    <div className="dash-content">
        <div className="overview">
            <div className="title">
                <Link to='/'>
                    <AiFillHome className="dashboard-icon"/>
                </Link>
                <span className="text">Dashboard</span>
            </div>
            <div className="boxes">
                <div className="box box1">
                    <SiFiles className="files" />
                    <span className="text">Total Files</span>
                    <span className="number">{getFiles.length}</span>
                </div>
                <div className="box box3">
                  <HiUsers className="users" />
                    <span className="text">Number of Users</span>
                    <span className="number">{getUsers.length}</span>
                </div>
                <div className="box box1">
                    <SiFiles className="files" />
                    <span className="text">Number of File Types</span>
                    <span className="number">4</span>
                </div>
            </div>
        </div>
        <div className="chart" style={{padding: "4rem 0"}}>
           <Chart />
        </div>
    </div>
  )
}

export default MainDetails
