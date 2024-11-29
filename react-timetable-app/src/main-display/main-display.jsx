import './main-display.css';
import { useState, useEffect } from 'react';

function Display() {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('timetable');
    if (data) {
      setTables(JSON.parse(data));
    }

  }, []);

  function deleteItem(courseId) {
    const updatedTables = tables.filter((item) => item.courseId !== courseId);
    setTables(updatedTables);
    localStorage.setItem('timetable', JSON.stringify(updatedTables));
  }
 

  return(
    <div className="main-display-container">
      <div className="cards">
        <div className="container1">
          <div className="text-area-con-1">
            <div>Contact Supervisor/planner</div>
            <div>53,879 / 879</div>
          </div>
          <div className="logo-area">
            <i className="bx bxl-facebook"></i>
          </div>
        </div>

        <div className="container1">
          <div className="text-area-con-1">
            <div>Total users online</div>
            <div>03</div>
          </div>
          <div className="logo-area">
            <i className="bx bxs-user-account"></i>
          </div>
        </div>

        <a href="entries.html">
          <div className="container1">
            <div className="text-area-con-1">
              <div>Add new data</div>
              <div></div>
            </div>
            <div className="logo-area">
              <i className="bx bxs-file-plus"></i>
            </div>
          </div>
        </a>

        <div className="container1">
          <div className="text-area-con-1">
            <p>Total data entries</p>
            <p>600/670</p>
          </div>
          <div className="logo-area">
            <i className="bx bxs-data"></i>
          </div>
        </div>
      </div>

      <div className="main-content">
        <div className="main-content-header">
          <div className="left">
            <p className="blue-color">All Entries:</p>
            <p className="total">{tables ? tables.length : 0} Total</p>
          </div>
          <div className="right">
            <button className="color-button">New</button>
            <button className="grey">Edited</button>
            <button className="grey">Deleted</button>
            <button className="grey">All</button>
          </div>
        </div>

        <div className="main-content-display">

        <ul className="lists-of-items-title">
              <li>S.N</li>
              <li>Code</li>
              <li>Title</li>
              <li>CourseID</li>
              <li>Date</li>
              <li>Venue</li>
              <li>Time</li>
              <li>Custom</li>
            </ul>

          {tables && tables.length > 0 ? (

          tables.map((item) => (
            <div key={item.courseId} className='little-grid'>
              <ul className="lists-of-items">
                <li>{item.serialNumber}</li>
                <li>{item.courseName}</li>
                <li>{item.courseCode}</li>
                <li>{item.courseId}</li>
                <li>{item.date}</li>
                <li>{item.venue}</li>
                <li>{item.time}</li>
                <li>
                  <button className="deletebtn" onClick={() => deleteItem(item.courseId)}>Delete</button>
                </li>
               <li>
                <button className="editBtn">Edit</button>
               </li>
              </ul>
            </div>
              
            ))
          ) : (
            <div className='altEntry'>
                <i className='bx bxs-edit-alt'></i>
                <p>No Data Available</p>
            </div>
            
          )}
        </div>
      </div>
    </div>
  );
}

export default Display;
