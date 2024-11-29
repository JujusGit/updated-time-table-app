import FinishedInput from '../components-arrangements/inputpage.jsx';
import './app.css'
import { useState } from 'react';

function App2() {
  const [sidebar, ] = useState(
    [
      {
        text: 'Dashboard',
        icon: <i className='bx bx-home'></i>,
        key: "1item"
      },
      {
        text: 'Time Table',
        icon: <i className='bx bx-table' ></i>,
        key: "2item"
      },
      {
        text: 'Scheddule',
        icon: <i className='bx bxs-calendar' ></i>,
        key: "3item"
      },
      {
        text: 'Image Upload',
        icon: <i className='bx bx-image'></i>,
        key: "4item"
      },
      {
        text: 'Configure',
        icon: <i className='bx bx-cog' ></i>,
        key: "5item"
      },
    ]
  )

  return (
   <>
    <FinishedInput 
      sidebar = {sidebar}
    />
   </>
  )
}

export default App2
