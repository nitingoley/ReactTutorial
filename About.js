import React, { useState } from "react"
import './About.css'
function About()
{
  let[data , SetData] = useState(null)
return(

    <div className="cont">
    <div className="Login">
        <h2>Login Page </h2>
      
        <br />
        <div className="email-form">
        <label htmlFor="email">  Email Address</label>
      <input type="email" placeholder="Enter Email"/>       
      </div>
      <div className="password-form">
        <label htmlFor="Password" placeholder="Enter Password">  Password</label>
        <input type="password"/>
      </div>   

      <div className="check-box">
        <input type="checkbox"/>
        <label htmlFor="checkbox">Remember me</label>
      </div>
      <div className="btn"> 
      <button>Click Submit</button>
    </div>

</div>


<br />
<br />
<br />
<br />
<div className="Connection">
{
  data?
  <p>For Connect on
  
  <br />
  <a href="https://www.linkedin.com/in/nitin-goley-869322232/">Linkdin</a>
  <br />
  <a href="https://www.instagram.com/nitingole_/?next=%2F">Instagram</a>
  </p>:null
}
<button onClick={()=>SetData(!data)}>Connection Click</button>
</div>
</div>
 

)
}
export default About;