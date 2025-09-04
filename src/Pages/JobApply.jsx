import React from 'react'
import { useParams } from 'react-router-dom'
import useAuth from '../Hooks/useAuth'

const JobApply = () => {
    const {user} = useAuth()

    const {id} = useParams()

   const SubmitHandel = e => {
     e.preventDefault()

     const name = e.target.name.value
     const address = e.target.address.value
     const link = e.target.link.value
     const job_id = id
     const Applicent_email = user?.email

     const result = {job_id,Applicent_email,name,address,link}
     console.log(result);

     fetch('http://localhost:3000/jobappli',{
        method:'POST',
        headers: { "Content-Type": "application/json" },
        body:JSON.stringify(result)
     })
     .then(res=>res.json())
     .then( data =>{
        if(data.message === 'Already applied'){
           alert("You have already applied for this job");
        }else if(data.message === 'Apply success'){
            alert('Apply Successfully')
        }
     })
     
   }
  return (
    <div>

        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content w-full flex-col lg:flex-row-reverse">
                
                <div className="card  bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body ">
                        <fieldset className="fieldset">
                            <form onSubmit={SubmitHandel}>
                                <div>
                                    <label className="label">User Name</label>
                                    <input type="text" name='name' className="input w-full" placeholder="Name" />
                                </div>
                                <div>
                                    <label className="label">Address</label> 
                                    <input type="text"  name='address' className="input w-full" placeholder="Address" />
                                </div>
                                <div>
                                    <label className="label">job link</label>
                                    <input type="emtextail" name='link' className="input w-full" placeholder="lonk" />
                                </div>
                                <button type='submit' className="btn btn-neutral w-full mt-4">Submit</button>
                            </form>
                            
                            
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>


    </div>
  )
}

export default JobApply