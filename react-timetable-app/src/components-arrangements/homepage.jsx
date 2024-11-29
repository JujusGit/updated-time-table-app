import Header from '../header/header.jsx'
import Sidebar from '../sidebar/sidebar.jsx'
import Display from '../main-display/main-display.jsx'
import './homepage.css'

function Finished({sidebar, timetable}) {

  return (
   <div className="content-side">
      <Sidebar 
       sidebar= {sidebar}
      />
    <div className="cont">
      <Header />
      <Display 
      timetable = {timetable}
      />
    </div>
   </div>
   
  )
}

export default Finished