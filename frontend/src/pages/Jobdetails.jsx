import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import PageHeader from "./PageHeader";

const JobDetails = () =>{
    const {id} = useParams();
    const [job,setJob] = useState([])
    useEffect(()=>{   
      const items = JSON.parse(localStorage.getItem(id)) ;
      if(items){
        setJob(items)
      }
            
    } ,[])
   //console.log(job);
    

    const handleApply = async() => {
        const { value: email } = await Swal.fire({
            input: "text",
            inputLabel: "Enter Your Name ",
            inputPlaceholder: " Full Name",
            preConfirm: (value) => {
                if (!value) {
                  Swal.showValidationMessage('<i class="fa fa-info-circle"></i> Your name is required')
                }
              },
              
          });
          
          const { value: name } = await Swal.fire({
            input: "email",
            inputLabel: "Enter Your Email Address",
            inputPlaceholder: "Email",
            preConfirm: (value) => {
                if (!value) {
                  Swal.showValidationMessage('<i class="fa fa-info-circle"></i> Your email is required')
                }
              },
          });
          const { value: file } = await Swal.fire({
            input: "file",
            inputAttributes: {
                "accept": "pdf/*",
                "aria-label": "Upload your Resume"
              },
              preConfirm: (value) => {
                if (!value) {
                  Swal.showValidationMessage('<i class="fa fa-info-circle"></i> Your resume is required')
                }
              },
          });
          if (email,name,file) {
            Swal.fire(`Sucessfully Applied to Job Id:  ${id}`,  'success');
          } 
    }

    
    return(
        <>
            <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
        <PageHeader  title={`Applying for ${job.jobTitle} `}/>
        <div className="pt-16">
        <h2><span className="text-xl font-bold text-blue-500">Job Details: </span></h2>
        <h1><span className="text-xl font-display text-gray-900">Role             : &ensp;&emsp;&ensp;&emsp;&ensp;&emsp;&ensp;&emsp;&ensp;&emsp;&ensp;&emsp;
            {job.jobTitle}</span></h1>
        <h1><span className="text-xl font-display text-gray-900">companyName      : &ensp;&emsp;&ensp;&emsp;&emsp;
              {job.companyName}</span></h1>
        <h1><span className="text-xl font-display text-gray-900">Salary           :&ensp;&emsp;&ensp;&emsp;&ensp;&emsp;&ensp;&emsp;&ensp;&emsp;&ensp;&nbsp;&nbsp; 
            {job.minPrice}-{job.maxPrice}</span></h1>
        <h1><span className="text-xl font-display text-gray-900">SalaryType       : &ensp;&emsp;&ensp;&emsp;&ensp;&emsp;&ensp;&emsp;
             {job.salaryType}</span></h1>
        <h1><span className="text-xl font-display text-gray-900">Location         :  &ensp;&emsp;&ensp;&emsp;&ensp;&emsp;&ensp;&emsp;&ensp;&nbsp;
           {job.jobLocation}</span></h1>
        <h1><span className="text-xl font-display text-gray-900">Experience       :  &ensp;&emsp;&ensp;&emsp;&ensp;&emsp;&ensp;&nbsp;&nbsp;
             {job.experienceLevel}</span></h1>
        <h1><span className="text-xl font-display text-gray-900">EmployementType  :  &ensp;&emsp;&ensp; 
           {job.employmentType}</span></h1>
        <h1><span className="text-xl font-display text-gray-900 " >Job Description  : <div > {job.description}</div></span></h1>


</div>
   <span className='pb-10 flex items-center justify-center gap-2 mt-2'><button className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleApply}>
        Apply Now
    </button></span> 

    </div>

     </>
    )
}
export default JobDetails;