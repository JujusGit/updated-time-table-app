import  FinishedOutput from '../components-arrangements/timetablepage.jsx'
import { useState } from 'react'

function App3(){
  
    const [sidebar] = useState(    [
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
    ]);

  return(
    <>
      <FinishedOutput 
        sidebar = {sidebar}
      />
    </>
  )
}

export default App3