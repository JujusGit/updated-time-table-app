import './sidebar.css'

function Sidebar({ sidebar }) {

  function clicked(text){
    sidebar.map((item) => {
      if(item.text === text){
        window.location.href = `${text}.html`
      }
    })
  }

  return (

    <div className="sidebar-container">
      <div>
      <div className="color-side">
        <p className='logoName'>
          K<span className='rest'>SUSTA</span>
        </p>
      </div>

      <div className="list-section">
        <ul className='sidebar-writing'>
          {sidebar.map((obj) => (
            <li key={obj.key} onClick={() => {clicked(obj.text)}}>
              <i>{obj.icon}</i> {obj.text}
            </li>
          ))}
        </ul>
      </div>
      </div>
 
      
      <div className="contact-section">
        <span className='red'></span>

        <p>Need Help?</p>

        <span className='contact-info'>
          +234 913 860 8968
         <a href="alhassanmuhammad714@gmail.com">
           alhassanmuhd@dev.com
         </a>
        </span>

        <a href="#" className='visit'>
          Visit FAQ
        </a>

      </div>

    </div>
  );
}

export default Sidebar
