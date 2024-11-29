import Sidebar from '../sidebar/sidebar.jsx'
import Output from '../output/outputCode.jsx'
import './homepage.css'

function FinishedOutput({ sidebar }) {

  return (
    <div className="content-side">
      <Sidebar 
        sidebar= {sidebar}
      />
      <Output />
    </div>
  )
}

export default FinishedOutput