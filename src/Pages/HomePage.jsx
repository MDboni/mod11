import React from 'react'
import Banner from '../Components/Banner'
import { useLoaderData } from 'react-router-dom'
import JobData from '../Components/JobData'

const HomePage = () => {
  const data = useLoaderData()
  console.log(data);
  
  return (
    <div>
      <Banner ></Banner>
      <div className='grid grid-cols-3 gap-3 w-8/10 mx-auto'>
        {
          data.map((item,i)=><JobData key={i} item={item}/>)
        }
      </div>
    </div>
  )
}

export default HomePage
