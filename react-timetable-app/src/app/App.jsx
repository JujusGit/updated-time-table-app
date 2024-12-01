import Finished from '../components-arrangements/homepage.jsx'
import './app.css'
import { useState } from 'react';

function App() {
  const [sidebar, ] = useState(
    [
      { 
        text: 'Dashboard', 
        icon: <i className='bx bx-home'></i>, 
        key: "1item", 
        PageName: 'index' 
      },

      { 
        text: 'Time Table', 
        icon: <i className='bx bx-table'></i>, 
        key: "2item", 
        PageName: 'Timetable' 
      },

      { 
        text: 'Add Data', 
        icon: <i className='bx bx-folder-plus'></i>, 
        key: "3item", 
        PageName: 'entries' 
      },

      { 
        text: 'Update Info', 
        icon: <i className='bx bxs-user-account'></i>, key: "4item", 
        PageName: 'Updateuser' 
      },

      { 
        text: 'Configure', 
        icon: <i className='bx bx-cog'></i>, key: "5item", 
        PageName: 'configure' 
      },
    ]
  )

  return (
   <>
    <Finished 
      sidebar = {sidebar}
    />
   </>
  )
}

export default App
