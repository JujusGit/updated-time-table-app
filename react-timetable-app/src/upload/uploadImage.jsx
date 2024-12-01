import { useRef, useState } from 'react';
import './uploadImage.css'


function UploadImage(){

  const [updateSection, setUpdateSection] = useState(false);
  const [profileSection, SetProfileSection] = useState(true);

  function renderUpdatePage(){
    setUpdateSection(true)
    SetProfileSection(false)
  }

  function renderProfilePage(){
    setUpdateSection(false)
    SetProfileSection(true)
  }

  const fileInputRef = useRef(null);

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      alert(`File selected: ${selectedFile.name}`);
    }
  };

  return(
    <div className="big-upload-container">

<div className="container">
  
  
    { updateSection && ( 
      <>
        <div className="top">
        <div className="left">Update Files</div>
        <div className="right">
        <i className='bx bx-x'></i>
        </div>
        </div>

        <div className="bottom">
          <div className="buttom-left">

            <div className='image-file-container'>

            <div className='center-content'>

              <i className='bx bx-cloud-upload' ></i>

              <div className="text">
                
                <div>Drop file to upload</div>
                <div>
                or <a href="" className='blue-icon' onClick={handleBrowseClick}>browse</a>
                </div>
                
              </div>
            </div>
            <input 
                type="file"
                ref={fileInputRef} 
                onChange={handleFileChange}
              />
            </div>
            
          </div>

          <div className="buttom-right">

          <div className="right-top">
            <p className='ap blue-hover' onClick={renderUpdatePage}>Update</p>
            <p className='ap' onClick={renderProfilePage}>Profile</p>
            <p className='ap' >Advanced</p>
          </div>

          <div className="input-section">

            <div className="email-addres-input">
              <p className='long-text gg'>Enter valid email</p>
              <input type="email" name="" id="" className='email-input' />
            </div>

            <div className="name-pnoneNumber">

              <div>
                <p className='gg'>
                  Postcode
                </p>
                <input type="text" name="" id=""  />
              </div>

              <div>
                <p className='gg'>
                  Phone Number
                </p>
                <input type="text" />
              </div>

            </div>
          </div>

          <div className="agreement-section">
            <p className='information-p'>
            <span style={{fontWeight: 700}}>Note</span> Your saved information will be   updated
            </p> 

            <div className='checkbox-div'>
            <input type="checkbox" name="" id="" />
            <p> Approve Changes</p>
            </div>
            
          </div>

          <div className="button-sect">
            <div className="buttons">
              <button style={{color:'white', backgroundColor: 'rgb(0, 166, 255)'}}>Upload files</button>
              
              <button style={{color:'grey', backgroundColor: 'white'}}>Cancel</button>
            </div>

            <p>Having problems? Try the <a href="" className='blue-icon'>Basic uploader</a></p>

          </div>

          </div>

        
        </div>
      </>
     )
    }

    {
       profileSection && (
       <>
       <div className="profilesect-top">

       </div>

       <div className="profilesect-bottom">
          <div className="profilesect-left">

            <div className="profilesect-top-image-area">
              <div className="position-relative">
                <img src="public/images/profile.jpg" alt="" className='profilesect-profile-image'/>
                <button className='position-relative-button'> 
                  <i className='bx bxs-camera'></i>
                </button>
              </div>
             

              <span style={{fontWeight: 'bolder', fontSize: '9px'}}>Alhassan Muhammad</span>
              <span style={{fontSize: '8px'}}>Head programmer</span>

            </div>

            <div className="entries">
              <span>
                opportunities applied
              </span>
              <span style={{color: 'orange'}}>
                12
              </span>
            </div>
            <div className="entries">
              <span>
                opportunities won
              </span>
              <span style={{color: 'green'}}>
                30
              </span>
            </div>
            <div className="entries last">
              <span>
                current opportunities
              </span>
              <span>
                6
              </span>
            </div>

          </div>

          <div className="profilesect-right">
            <div className="profilesect-right-top">
              <p onClick={renderUpdatePage}>Update</p>
              <p onClick={renderProfilePage} className='blue-hover'>Profile</p>
              <p>Advanced</p>
            </div>

            <div className="profilesect-right-bottom">
              <div className="profilesect-right-bottom-left">
                <div className="first-Name">
                  <p>First Name</p>
                  <div className="text-area">
                    Muhammad
                  </div>
                </div>

                <div className="phone-number">
                  <p>Phone Number</p>
                  <div className="text-area">
                    +234 913 860 8965
                  </div>
                </div>

                <div className="city">
                  <p>City</p>
                  <div className="text-area">
                    Abuja
                  </div>
                </div>

                <div className="post-code">
                  <p>Postcode</p>
                  <div className="text-area">
                    913453
                  </div>
                </div>
              </div>

            <div className="profilesect-right-bottom-left">
              <div className="last-name">
                <p>Last Name</p>
                <div className="text-area">
                  Alhassan
                </div>
              </div>

              <div className="email-address">
                <p>Email address</p>
                <div className="text-area">
                  alhassanmuhammad714@gmail.com
                </div>
              </div>

              <div className="LGA">
                <p>LGA</p>
                <div className="text-area">
                  Nasarawa
                </div>
              </div>

              <div className="country">
                <p>Country</p>
                <div className="text-area">
                  Nigeria
                </div>
              </div>
            </div>
            </div>
            

          </div>

       </div>
       </>
       )
    }
    </div>
  </div> 
   
  )
}


export default UploadImage