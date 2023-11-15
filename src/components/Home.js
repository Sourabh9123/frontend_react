import React, { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("/api/students/");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const studentData = await response.json();
      setData(studentData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>I'm Home</h1>
      {data.map((sdata, index) => {
        return (
          <div className="container" key={index}>
            <input  
              className="form-control"
              id="content-student"
              value={sdata.name}
              
            />
             <input 
              className="form-control"
              id="content-student"
              value= {sdata.gender}
            />
              <input 
              className="form-control"
              id="content-student"
              value=  {sdata.age}
            />
          </div>
        );
      })}
    </div>
  );
}

{
  /* {data.map((sData, index) => (
        <div className='container' id='main-div-home' key={index}>
          <div className='first-div-name'>{sData.name}</div>
          <div className='second-div-gender'>{sData.gender}</div>
          <div className='third-div-age'>{sData.age}</div>
        </div>
      ))} */
}

// import React from 'react'
// import { useState, useEffect } from 'react'

// export default function Home() {
//   let  [data, setdata] = useState([])

//   useEffect(()=>{
//     getData()
//   },[])

// let getData = async () => {
//   // let response = await fetch('api/students/')
//   let response = await fetch('/api/students/')
//   console.log("data is ",response)
//   let studentData = await response.json()
//   setdata(studentData)

// }
//   return (
//     <div >
//         <h1>i'm Home</h1>

//         {data.map((sData, index) => (

//           <div className='container' id='main-div-home'>

//             <div className='first-div-name' > <div/>

//             <div className='second-div-gender'> </div>

//             <div className='third-div-age'> </div>
//         </div>

//         ))}

//     </div>
//   )
// }

// {/* <div key={index}>
// <h5>  name : {sData.name}
// age : {sData.age}
// gender : {sData.gender}
// </h5>
// </div> */}
