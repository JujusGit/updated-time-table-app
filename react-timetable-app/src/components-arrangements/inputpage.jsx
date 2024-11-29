import Sidebar from '../sidebar/sidebar.jsx'
import InputSection from '../input-section/input-section.jsx';
import './homepage.css'

function FinishedInput({ sidebar }) {
  
  return (
   <>
      <div className="content-side">
      <Sidebar 
      sidebar= {sidebar}
      />
      <InputSection />
    </div>
   </>
  )
}

export default FinishedInput
