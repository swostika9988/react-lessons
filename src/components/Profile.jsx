import React from 'react'

function Profile({newImg}) {
  return (
    <div>
         <img
            className="circle-img"
            src={newImg}
             alt="avatar_img"
          />
        </div>
  )
}

export default Profile