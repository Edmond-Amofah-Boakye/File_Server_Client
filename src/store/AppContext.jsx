/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import server from "../components/Helpers/Server";

export const Context = createContext();




const AppContext = ({ children }) => {
  const [role, setRole] = useState("");
  const [search, setSearch] = useState("")
  const [getMe, setGetMe] = useState({});
  const [getUsers, setGetUsers] = useState([]);
  const [getFiles, setGetFiles] = useState([]);

 //configuration
 const config = {headers:{
  "Authorization": `Bearer ${localStorage.getItem("token")}`
}}


  useEffect(() => {
   axios.get(`${server}/auth/me`, config)
    .then((res)=>{
      setGetMe(res.data.user);
    }).catch(error=>console.log(error))
  }, [])


  useEffect(() => {
    axios.get(`${server}/user`, config)
     .then((res)=>{
       setGetUsers(res.data.users);
     }).catch(error=>console.log(error))
   }, [])
  

   
  useEffect(() => {
    axios.get(`${server}/file`, config)
     .then((res)=>{
       setGetFiles(res.data.files);
     }).catch(error=>console.log(error))
   }, [])
  





  return (
    <Context.Provider value={{ role, setRole, getMe, getUsers, setGetUsers, getFiles, setGetFiles, search, setSearch }}>{children}</Context.Provider>
  );
};

export default AppContext;
