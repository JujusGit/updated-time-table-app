import './output.css';
import { useState, useEffect } from 'react';

function Output() {
  const [lecture, setLecture] = useState([]);

  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem('timetable')) || [];
    setLecture(existingData);
  }, []);


  function getLectureData(day, time) {
    const data = lecture.find((item) => item.date === day && item.time === time);
    return data ? (
      <span className="time-table-text">
        <p className="MediumSize">{data.courseCode}</p>
        <p className="venue-small">{data.venue}</p>
      </span>
    ) : null;
  }

  const timeSlots = [
    ['8-9 am', '08:00AM - 09:00AM'],
    ['9-10 am', '09:00AM - 10:00AM'],
    ['10-11 am', '10:00AM - 11:00AM'],
    ['11-12 noon', '11:00AM - 12:00PM'],
    ['1-2 pm', '01:00PM - 02:00PM'],
    ['2-3 pm', '02:00PM - 03:00PM'],
    ['3-4 pm', '03:00PM - 04:00PM'],
    ['4-5 pm', '04:00PM - 05:00PM'],
    ['5-6 pm', '05:00PM - 06:00PM'],
  ];

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <>
      <div className="bigcontainer">
        <div className="button-section">
          <button className="downloadPdf">
            <i className="bx bxs-file-pdf"></i> Download PDF
          </button>
        </div>

        <div className="time-table-section">
          <div className="upper-text">
            <img className="ksusta-logo" src="../../public/images/ksusta.png" alt="KSUSTA Logo" />
            <p className="big-p">KEBBI STATE UNIVERSITY OF SCIENCE AND TECHNOLOGY, ALERO</p>
            <p className="little-p">
              Faculty of Physical Sciences Second Semester Undergraduate Lecture Timetable - 2023/2024 Session
            </p>
          </div>

          <div className="time-table-content">
            <div className="top">
              <div className="empty"></div>
              <div className="time">
                {timeSlots.map(([label]) => (
                  <div key={label}      className="div">
                    {label}
                  </div>
                ))}
              </div>
            </div>

            <div className="bottom">
              <div className="day">
                {days.map((day) => (
                  <div key={day} className={day.toLowerCase()}>
                    {day.toUpperCase()}
                  </div>
                ))}
              </div>

              <div className="content">
                {timeSlots.map(([label, time]) => (
                  <div
                    key={time}
                    className={`time-slot ${label.replace(/\s+/g, '-').toLowerCase()} flexspace`}
                  >
                    {label === '1-2 pm' ? (
                      <div className="break">
                        <p>K</p>
                        <p>A</p>
                        <p>E</p>
                        <p>R</p>
                        <p>B</p>
                      </div>
                    ) : (
                      days.map((day) => (
                        <div key={`${day}-${time}`} className="day-slot">
                          {getLectureData(day, time)}
                        </div>
                      ))
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Output;
