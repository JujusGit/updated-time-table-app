import './header.css'


function Header(){
  return(

  <div className="header-container">
      <div className="content">

        <div className="button-section">
          <button className="adminBtn">Admin Panel</button>
          <button>View Timetable</button>
          <button>Create New</button>
        </div>

        <div className="logout-section">
          <button className="logoutbtn"> <i class='bx bx-log-out-circle' ></i> Logout</button>
          <img className="userimage" src="../../public/images/user.png" alt="" />
        </div>

      </div>
  </div>
  )
}


export default Header
