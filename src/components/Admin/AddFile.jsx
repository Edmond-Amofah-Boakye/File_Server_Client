import { useState, useContext } from "react";
import { Context } from "../../store/AppContext";
import { Container } from "react-bootstrap";
import { AiOutlineArrowLeft, AiOutlineFileImage } from "react-icons/ai";
import { Link } from "react-router-dom";
import server from '../Helpers/Server'
import axios from 'axios'
import swal from "sweetalert2";
import "../../styles/Admin/AddFiles.css";

const AddFile = () => {
  const { getFiles, setGetFiles } = useContext(Context)
  
  const [selectFile, setSelectFile] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [description, setDescription] = useState("");

   //configuration
   const config = {headers:{
    "Authorization": `Bearer ${localStorage.getItem("token")}`
  }}

  const handleSubmit = async (e) =>{
    e.preventDefault()

    const formData = new FormData()
    formData.append("title", title)
    formData.append("description", description)
    formData.append("type", selectFile)
    formData.append("file", file)

    try {
      axios.post(`${server}/file/create`, formData, config).then((res)=>{
        swal.fire({
          icon: "success",
          title: `${res.data.message}`,
        })
        setGetFiles([...getFiles, res.data.createdFile])
      })

    } catch (error) {
      console.log(error);
      swal.fire({
        icon: "error",
        title: `${error.response.data.message}`,
    })}}

  return (
    <>
      <Container className="add-all-files">
        <Link to="/admin/dashboard/files">
          <AiOutlineArrowLeft className="back-arrow" />
        </Link>
        <div className="add-file-header">
          <h1>Add Files</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="file-title">
            <input
              type="text"
              value={title}
              placeholder="File title"
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="file-title">
            <select
              value={selectFile}
              required
              onChange={(e) => setSelectFile(e.target.value)}
            >
              <option value="video">video</option>
              <option value="audio">audio</option>
              <option value="pdf">pdf</option>
              <option value="image">image</option>
            </select>
          </div>
          <div className="file-title">
            <label className="mb-4 text-primary selcet-file" htmlFor="choose-image">
              Select File - File size shlould not be more that 5MB<AiOutlineFileImage />
            </label>
            <input
              type="file"
              id="choose-image"
              style={{ display: "none" }}
              required
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <textarea
            placeholder="File Description"
            value={description}
            required
            onChange={(e) => setDescription(e.target.value)}
          />
          <button>Add</button>
        </form>
      </Container>
    </>
  );
};

export default AddFile;
