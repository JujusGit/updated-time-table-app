import Finished from '../components-arrangements/homepage.jsx'
import './app.css'
import { useState } from 'react';

function App() {
  const [sidebar, ] = useState(
    [
      {
        text: 'Dashboard',
        icon: <i className='bx bx-home'></i>,
        key: "1item"
      },
      {
        text: 'Timetable',
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
    <Finished 
      sidebar = {sidebar}
    />
   </>
  )
}

export default App
