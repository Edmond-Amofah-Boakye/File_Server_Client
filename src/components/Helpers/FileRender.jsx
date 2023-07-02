import { AiOutlineFilePdf, AiOutlineFileImage } from "react-icons/ai";
import { MdAudiotrack } from "react-icons/md";
import { FcVlc } from "react-icons/fc";

function viewIcon (icon){
    if(icon === 'video'){
      return <FcVlc className="file-audio-icon video" />
    } else if(icon === 'image'){
      return <AiOutlineFileImage className="file-audio-icon ic image" />
    }else if(icon === 'audio'){
      return <MdAudiotrack className="file-audio-icon ic audio" />
    }else{
      return <AiOutlineFilePdf className="file-audio-icon ic pdf" />
    }
  }

  export default viewIcon