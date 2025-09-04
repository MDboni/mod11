import React from 'react'
import { Link } from 'react-router-dom'

const JobData = ({item}) => {
    const {company_logo,company ,requirements,_id} = item
  return (                                                              
    <div>
        <div className="hero bg-base-200 p-4">
            <div className="hero-content  text-center">
                <div className="w-full">
                    <div className='flex w-[80%] mx-auto'>
                        <div>
                            <img src={company_logo} className='w-[60px]' alt="" />
                        </div>
                        
                        <div className='pl-3'>
                            <h3>
                                {company}
                            </h3>
                            <p className='text-blue-300'> New York, US</p>
                        </div>
                    </div>
                    <h1 className="text-5xl font-bold">Hello there</h1>
                    <div className='flex gap-2 '>
                        {
                            requirements.map((item,i)=>(
                                <p key={i} >#{item}</p>
                            ))
                        }
                    </div>
                    <button  className="btn btn-primary mt-4">
                        <Link to={`/applydetail/${_id}`}>Apply</Link>
                    </button>
                </div>
            </div>
        </div>
</div>
  )
}

export default JobData