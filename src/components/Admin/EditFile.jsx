import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { AiOutlineArrowLeft, AiOutlineFileImage } from "react-icons/ai";
import { Link, useParams} from "react-router-dom";
import server from '../Helpers/Server'
import axios from 'axios'
import swal from "sweetalert2";
import "../../styles/Admin/AddFiles.css";





const AddFile = () => {
  const { id } = useParams()
   //configuration
 const config = {headers:{
  "Authorization": `Bearer ${localStorage.getItem("token")}`
}} };

  const [selectFile, setSelectFile] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios
      .get(`${server}/file/${id}`, config)
      .then((res) => {
        setTitle(res.data.file.title);
        setDescription(res.data.file.description);
        setSelectFile(res.data.file.type);
        setFile(res.data.file.file);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //handle submit
  const handleSubmit = async (e) =>{
    e.preventDefault()

    const formData = new FormData()
    formData.append("title", title)
    formData.append("description", description)
    formData.append("type", selectFile)
    formData.append("file", file)

   
      axios.patch(`${server}/file/${id}`, formData, config).then((res)=>{
        swal.fire({
          icon: "success",
          title: `${res.data.message}`,
        })
      }).catch((error)=>{
        swal.fire({
          icon: "error",
        title: `${error.response.data.message}`
        })
      })

    } 

  return (
    <>
      <Container className="add-all-files">
        <Link to="/admin/dashboard/files">
          <AiOutlineArrowLeft className="back-arrow" />
        </Link>
        <div className="add-file-header">
          <h1>Edit File</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="file-title">
            <input
              type="text"
              value={title}
              placeholder="File title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="file-title">
            <select
              value={selectFile}
              onChange={(e) => setSelectFile(e.target.value)}
            >
              <option value="video">video</option>
              <option value="audio">audio</option>
              <option value="pdf">pdf</option>
              <option value="image">image</option>
            </select>
          </div>
          <div className="file-title">
            <label className="mb-4 text-primary" htmlFor="choose-image">
              Select File <AiOutlineFileImage />
            </label>
            <input
              type="file"
              id="choose-image"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <textarea
            placeholder="File Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button>Save Changes</button>
        </form>
      </Container>
    </>
  );
};

export default AddFile;
