import React from 'react'
import "./user.css"

 function usercard  ()  {
    const photo = "https://w0.peakpx.com/wallpaper/314/578/HD-wallpaper-dark-bg-bg-wp-abstract-dark.jpg"
    const name = "Abdullah"
    const mail = "abdullahm6270@gmail.com"
    const phonenumber = "1977567809"
    const address = "fuwydna street, fulsiknabia"
  return (

    <>
           <div className='card'>
                <img src={photo} alt="404 not found" className='img'/>
                 <h1>{name}</h1>
                 <p>{mail}</p>
                 <p>{phonenumber}</p>
                 <p>{address}</p>

            </div>
    </>
    
  )
}

export default usercard

