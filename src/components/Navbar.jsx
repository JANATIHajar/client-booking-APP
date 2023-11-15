import React from 'react';
const Navbar = () => {
    return (
      <div className="navbar" style={{ 
        height: '50px',
        backgroundColor: '#003580',
        display: 'flex',
        justifyContent: 'center'}}>
        <div className="navContainer" style={{
              width: '100%',
              maxWidth: '1024px',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
        }}>
          <span className="logo" style={{fontWeight: '500'}}>Booking</span>
          <div className="navItems">
            <button className="navButton" style={{
                marginLeft: '20px',
                border: 'none',
                padding:'5px 10px',
                cursor: 'pointer',
                color: '#003580'}}>Register</button>
            <button className="navButton" style={{
                marginLeft: '20px',
                border: 'none',
                padding:'5px 10px',
                cursor: 'pointer',
                color: '#003580'}}>Login</button>
          </div>
        </div>
      </div>
    )
  }
  
  export default Navbar
 
