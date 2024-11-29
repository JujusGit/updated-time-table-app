import { useState } from 'react';
import './input-section.css';

function InputSection() {

  const [timetable, setTimeTable] = useState({
    serialNumber: 0,
    courseName: '',
    courseCode: '',
    courseId: crypto.randomUUID(),
    date: '',
    venue: '',
    time: '',
  });

  const [warning, setWarning] = useState({
    message: '',
    className: '',
    icon: '',
  })

const [showWarning, setShowWarning] = useState(false);

  const [errorMessage, setErrorMessage] = useState({
    message: '',
    className: '',
    icon: '',
  });

  const [showError, setShowError] = useState(false)
  

  function saveInputText(event) {
    const { name, value } = event.target;

    setTimeTable((prevTimetable) => ({
      ...prevTimetable,
      [name]: value,
    }));
  }

  function addData(){

    const existingData = JSON.parse(localStorage.getItem('timetable')) || [];

    const isDuplicate = existingData.some(
      (item) => item.date === timetable.date && item.time === timetable.time
    );

    if (!timetable.courseName || !timetable.courseCode || !timetable.date || !timetable.venue || !timetable.time) {
      setWarning({
        message: 'Please fill all fields before adding!',
        className: 'red-color-long',
        icon: <i className="bx bxs-x-circle"></i>,
      });
    
      setShowError(true)
  
      setTimeout(() => {
        setShowError(false)
      }, 3000)

      return;
    }

    if(isDuplicate){
      setWarning({
        message: 'This entry already exists!',
        className: 'red-color-long',
        icon: <i className="bx bxs-x-circle"></i>,
      });

      setShowError(true)
  
      setTimeout(() => {
        setShowError(false)
      }, 3000)

      return;
      
    }
    
    else{
      setWarning({
        message: 'Entry added successfully!',
        className: 'green-color-long',
        icon: <i className="bx bxs-check-circle"></i>,
      });
      
      setShowError(true)
  
      setTimeout(() => {
        setShowError(false)
      }, 3000)
    }

    let statusOf = {
      message: '',
      className: '',
      icon: null,
    };

    existingData.forEach((item) => {
      if(item.date === timetable.date && item.time === timetable.time && item.venue === timetable.venue){
        statusOf.message = `Unavailable`;
        statusOf.className = 'red-color';
        statusOf.icon = <i className="bx bxs-x-circle"></i>;
      }
      else{
        statusOf.message = `Verified`;
        statusOf.className = 'green-color';
        statusOf.icon = <i className="bx bxs-check-circle"></i>;
      }
    }
    );

    setErrorMessage(statusOf)

    setShowWarning(true);

    setTimeout(() => {
      setShowWarning(false);
    }, 3000);

    const updatedData = [
      ...existingData,
      {
        ...timetable,
        serialNumber: existingData.length + 1,
        courseId: crypto.randomUUID(),
      },
    ];

    localStorage.setItem('timetable', JSON.stringify(updatedData));

    setTimeTable({
      serialNumber: 0,
      courseName: '',
      courseCode: '',
      courseId: crypto.randomUUID(),
      date: '',
      venue: '',
      time: '',
    });

  }


  return (
    <div className='inputContainer'>

    <div className="main-content">
      <div className="top">

        <span className='search-btn-position'>
          <input type="text" placeholder='search' className='search-btn' />
          <i className='bx bx-search'></i>
        </span>

        <div className='icon-section'>
          <button className='other-icons red'>
            <i className='bx bx-envelope' ></i>
            <span className='notification-red'>
            </span>
          </button>

          <button className='other-icons'>
            <i className='bx bx-bell'></i>
          </button>
        </div>


        <div className='small-section'>
          <img src="../../public/images/user.png" alt="" className='small-image'/>

          <div className="user-info">
            <span className='name'>Alhassan Muhammad</span>
            <span className='email'>alhassanmuhammad714@gmail.com</span>
          </div>
        </div>


      </div>

      <div className="middle">
        Add Exam Record
      </div>

      <div className="big-bottom">

        {
          showError && (
          <div className={warning.className}>
          {warning.message} {warning.icon}
          </div>)
        }
        
  
      <div className="buttom">

      <div className="text-container">
        <p>
          Course Name
        </p>

        <input
          type="text"            
          name="courseName"
          value={timetable.courseName}
          onChange={saveInputText}
        />

        <i className='bx bx-book-open'></i>
      </div>

      <div className="text-container">              
      <p>
     Course Code
      </p>

      <input
      type="text"             
      name="courseCode"
      value={timetable.courseCode}
      onChange={saveInputText}
      />

      <i className='bx bx-book'></i> 
      </div>

      <div className="text-container">

      <div className='explanation'>
      <p>
      Date
      </p>


      { showWarning && (
      <div className={`${errorMessage.className}`}>
      <div>{errorMessage.message}</div>  <div>{errorMessage.icon}</div>
      </div>)
      }             


      </div>


      <select name="date" value={timetable.date} onChange={saveInputText}>
      <option value="" disabled>Select a date</option>
        <option value="Mon">Monday</option>
        <option value="Tue">Tuesday</option>
        <option value="Wed">Wednesday</option>
        <option value="Thu">Thursday</option>
        <option value="Fri">Friday</option>
        <option value="Sat">saturday</option>
      </select>
      
      </div>

      <div className="text-container">
      <div className='explanation'>
      <p>
      Venue
      </p>
        
      {
      showWarning && (
      <div className={`${errorMessage.className}`}>
      <div>{errorMessage.message}</div>  <div>{errorMessage.icon}</div>
      </div>)
      }    

      </div>

      <select name="venue" value={timetable.venue} onChange={saveInputText}>
        <option value="" disabled>Choose venue</option>
        <option value="SLH">SLH</option>
        <option value="CTT">CTT</option>
        <option value="ELH 1">ELH 1</option>
        <option value="ELH 2">ELH 2</option>
        <option value="STT 1">STT 1</option>
        <option value="STT 2">STT 2</option>
        <option value="EDS 1">EDS 1</option>
        <option value="EDS 2">EDS 2</option>
        <option value="BLOCK A1">BLOCK A1</option>
        <option value="BLOCK A2">BLOCK A2</option>
      </select>

      <i className='bx bxs-school' ></i>
      </div>

      <div className="text-container">
      <div className='explanation'>
      <p>
      Time
      </p>
        
      {showWarning &&(
      <div className={`${errorMessage.className}`}>
      <div>{errorMessage.message}</div>  <div>{errorMessage.icon}</div>
      </div>)
      }    

      </div>

      <select name="time" value={timetable.time} onChange={saveInputText}>
      <option value="" disabled>Select a time</option>
        <option value="08:00AM - 09:00AM">08:00AM - 09:00AM</option>
        <option value="09:00AM - 10:00AM">09:00AM - 10:00AM</option>
        <option value="10:00AM - 11:00AM">10:00AM - 11:00AM</option>
        <option value="11:00AM - 12:00AM">11:00AM - 12:00AM</option>
        <option value="12:00AM - 01:00PM">12:00AM - 01:00PM</option>
        <option value="02:00PM - 03:00PM">02:00PM - 03:00PM</option>
        <option value="03:00PM - 04:00PM">03:00PM - 04:00PM</option>
        <option value="04:00PM - 05:00PM">04:00PM - 05:00PM</option>
        <option value="05:00PM - 06:00PM">05:00PM - 06:00PM</option>
      </select>

      <i className='bx bx-time-five' ></i>

      </div>

      <div className='bottom-button-section'>
      <button onClick={addData} className='green-button'>
      <i className='bx bx-check-double'></i>
      Add

      </button>
      <a href="index.html">
      <button className='blue-button'>
      <i className='bx bx-folder' ></i>
      view
      </button>
      </a>

      </div>

      </div>

      <div className="bottom-text">
      Stay organized and on top of your schedule with ease. All times are displayed in your local timezone, so you never miss an important event. Remember to review your timetable regularly to keep it accurate and up to date. Need help or have feedback? Contact us at alhassanmuhd@dev.com or share your thoughts directly in the app we’d love to hear from you! Sync your timetable across devices for seamless planning and make every minute count. Plan ahead, stay ahead, and let AFMAM TECH help you make the most of your time
      </div>

      </div>

    </div>
    </div>
    );
}

export default InputSection;