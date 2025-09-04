import React, { useState, useEffect } from 'react'
import useAuth from '../Hooks/useAuth'

const UserApplyedJob = () => {

    
    const { user } = useAuth()
    const [dataa, setData] = useState([])  // empty array দিয়ে initialize
    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/jobappli?tata=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log("Applied job",data);
                    
                    setData(data)
                })
                .catch(err => console.error(err))
        }
    }, [user?.email])  // user.email change হলে fetch হবে


    const DeleteHandel = id=>{
        console.log(id);


         fetch(`http://localhost:3000/jobappli/${id}`, {
          method: "DELETE",
         }) 
         .then(res => res.json())
         .then(data => {
            console.log(data);
            setData(prev => prev.filter(job=> job._id !== id))
            
         })

    }

    return (
        <div>
            <h2>Applied Jobs Count: {dataa.length}</h2>
            <div>
                {dataa.map(job => (
                    <div key={job._id} style={{border: '1px solid gray', margin: '10px', padding: '10px'}}>
                        <h3>{job.job_id}</h3>
                        <p>{job.Applicent_email}</p>
                        <p>{job.name}</p>
                        <button onClick={()=>DeleteHandel(job._id)} className='btn'>X</button>
                        <button className='btn'>Update</button>
                
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserApplyedJob
