

import axios from 'axios'
import React from 'react'

export default function StudentForm() {

  let dataTransfer =   (event) => {
    
   let  stuName = event.target.studentName.value;
   let  age = event.target.studentAge.value;
   let gender = event.target.studentGender.value;
    console.log(stuName, age, gender)
    console.log("got data")


    
  axios.post('/api/students/',{'name' : stuName, 'age': age,  'gender' :gender})
    .then((response)=>{
      console.log(response)
      event.target.reset()
    })
  }

 


 



  return (
    <div className='container' id='contactUs-div-main'>
        <form  onSubmit={dataTransfer}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Student Name</label>
                <input  required name='studentName' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your name"/>
                
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Student Age</label>
                <input  required name='studentAge' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Age"/>
                
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Student Gender</label>
                <input   required name='studentGender' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Gender"/>
                
              </div>
              <button type="submit" className="btn btn-primary mt-2">Submit</button>
        </form>
    </div>
  )
}











// export default function StudentForm() {

//     let  [studentData, setstudentData] = useState([])

//     // useEffect(() =>{
//     //     transferData()
//     //     transferData()

//     // },[])

//     let AboutToGoData = async () =>{
       
//         await transferData()
//        await sendData()
        

//     }

//     let sendData = async () => {
//         console.log('I m Send data')
//     let response = await fetch('http://127.0.0.1:8000/api/students/', {
//         method : "POST",
//         headers :{
//             'Content-Type': "application/json"
//         },
//         body: JSON.stringify(studentData)
        
        
        
//     });
//     // let  studentGender =  document.getElementById("StudentGender") ;
//     //     studentGender.value = " "

//         if (response.ok) {
//             console.log('Data sent successfully');
//             // You can handle the response from the server here if needed
//         } else {
//             console.error('Failed to send data');
//             // Handle the error here
//         }
    
//     }

//     let transferData = async () =>{
//         console.log('I m transfer data , i suppose to come first')
//        let  studentName = await  document.getElementById("StudentName").value;
//        let  studentAge = await document.getElementById("StudentAge").value;
//        let  studentGender =  await document.getElementById("StudentGender").value;

//         await setstudentData({
//         'name' : studentName,
//         "age" : studentAge,
//         'gender' :studentGender
//        })
       
      
//         console.log('I m transfer data , i suppose to come first', studentAge, studentGender , studentName)

//         console.log(typeof studentData)
//         studentName = ''
//        studentAge = ''
//        studentGender = ''
//     }

    
//     // let handleStudentGenderChange = () =>{
//     //     studentGender = document.getElementById("StudentGender").value;
//     // }

//   return (
//     <div>
//       <div className="container" id="contactUs-div-main">
//         <div className="mb-3">
//           <label htmlhtmlFor="exampleFormControlInput1" className="form-label">
//             Student Name
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="StudentName"
//             placeholder="Student Name"
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlhtmlFor="exampleFormControlInput1" className="form-label">
//             Student Age
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="StudentAge"
//             placeholder="Student Age"
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlhtmlFor="exampleFormControlInput1" className="form-label">
//             Student Gender
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="StudentGender"
//             placeholder="Student Gender"
//           />

//           {/* <select
//                 className="form-select"
//                 id="StudentGender"
//             >
//                 <option value="">Select Gender</option>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//                 <option value="unknown">Other</option>
//             </select> */}
//         </div>
       
//         <div></div>
//         <button type="button" onClick={AboutToGoData }  className="btn btn-primary btn-sm">
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// }
