import axios from 'axios'
import server from '../Helpers/Server'


const LogOutUser = () =>{
   axios.get(`${server}/auth/logout`, {withCredentials: true})
    .then(()=>{
        localStorage.removeItem("role")
        localStorage.removeItem("token")
        window.location.reload(true)
    })
    .catch((error)=>console.log(error))
}

export default LogOutUser
