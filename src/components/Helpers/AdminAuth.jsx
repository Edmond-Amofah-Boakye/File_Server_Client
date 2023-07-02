/* eslint-disable react/prop-types */
import {Navigate} from 'react-router-dom';

const Auth = ({children}) => {
  
  const getData = localStorage.getItem("role")
  
  if(!getData || getData !== "admin"){
    return <Navigate to='/signin' />
  }

  return children

}

export default Auth