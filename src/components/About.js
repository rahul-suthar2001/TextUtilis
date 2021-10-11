import React from 'react'

function About(props) {
    return (
   <>
  
   <div className="card my-5 mx-5 " style={{backgroundColor : props.mode==="dark"?"#121212":"white" , color : props.mode==="dark"?"white":"black"}} >
  <h5 className="card-header">Created By Rahul</h5>
  <div className="card-body">
    <h5 className="card-title">TexUtilis</h5>
    <p className="card-text">TextUtilis use for manipulating text  </p>
   
  </div>
</div>

   </>
    )
}

export default About
