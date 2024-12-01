import Sidebar from '../sidebar/sidebar.jsx'
import UploadImage from '../upload/uploadImage.jsx'
import './homepage.css'

function FinishedOutput({ sidebar }) {

  return (
    <div className="content-side">
      <Sidebar 
        sidebar= {sidebar}
      />
      <UploadImage />
    </div>
  )
}

export default FinishedOutput