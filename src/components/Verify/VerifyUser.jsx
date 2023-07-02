import server from '../Helpers/Server';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert2'
import { useEffect } from 'react';

const VerifyUser = () => {
    const navigate = useNavigate()
    const params = useParams()
  
    const verifyUser = async () =>{
        axios.get(`${server}/auth/verify/email/${params.token}`, {withCredentials: true})
          .then((res)=>{
            swal.fire({
              icon: "success",
              title: `${res.data.message}`,
              timer: 4000
          })
          navigate('/signin')

          }).catch((error)=>{
            swal.fire({
              icon: "error",
              title: `${error.response.data.message}`,
          })
          navigate('/')
          })
    }

   useEffect(() => {
     verifyUser()
   }, [])
   
    
    
  return (
    <></>
  )
}

export default VerifyUser