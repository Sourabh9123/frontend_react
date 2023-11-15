import axios from 'axios'
import React from 'react'






export default function LoginForm() {

 let   onClickHandel = () => {
      let  userName = document.getElementById('userName')
      let userpassword = document.getElementById('userpassword')

    axios.post('/api/account/ login/',{'email':userName, 'passowrd':userpassword})
    console.log('pass',userName, userpassword)
    }

  return (
    <div className='container log-in-from'>
      <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input required type="email" className="form-control" id="userName" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input required type="password" className="form-control" id="userpassword"/>
  </div>
 
  <button type="submit" onClick={onClickHandel} className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
