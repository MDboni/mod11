import React, { useEffect, useState } from 'react'
import useAuth from '../Hooks/useAuth'
import { Link } from 'react-router-dom'

const PostUserData = () => {

    const [data,setData] = useState([])
    const {user} =useAuth()

    useEffect(()=>{
        fetch(`http://localhost:3000/jobdata?email=${user.email}`)
        .then(res => res.json())
        .then(result => {
            setData(result);
            
        })
    },[user?.email])
  return (
    <div>
        <h2>User Applied jobs : {data.length}</h2>
        
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row  */}
                   {
                    data.map((item,i)=>(
                    <tr key={i}>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>{item.hr_email}</td>
                        <td>
                            <button className='btn '>
                                    <Link to={`/speceficjob/${item._id}`}>
                                        Total Applied
                                    </Link>
                                </button>
                        </td>
                    </tr>
                    ))
                   }
                   
                    </tbody>
                </table>
            </div>
       
    </div>
  )
}

export default PostUserData