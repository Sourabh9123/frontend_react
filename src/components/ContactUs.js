import React from 'react'

export default function ContactUs() {
  return (

  
        <div className='container' id='contactUs-div-main'>
      <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Your Name</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Name"/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div>
    
</div>
        <button type="button" className="btn btn-primary btn-sm">Submit</button>

</div>
   
    
  )
}
