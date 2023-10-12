import React from 'react'
import Profile from './Profile'
import Detail from './Detail'
import Header from './Header'

function Card({name,phone,email,img}) {
    
  return (
    <div>
        <div className="card">
        <div className="top">
          {/* <h2 className="name">{name}</h2> */}
          <Header myName={name}/>
          <Profile newImg={img}/>
        </div>
        <div className="bottom">
          {/* <p className="info">{phone}</p> */}
          <Detail info={phone}/>
          <Detail info={email}/>
          <Detail info="2057/11/11"/>
          
          {/* <p className="info">{email}</p> */}
          
         
        </div>
      </div>
    </div>
  )
}

export default Card