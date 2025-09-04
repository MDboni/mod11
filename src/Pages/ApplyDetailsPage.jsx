import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const ApplyDetailsPage = () => {
    const data = useLoaderData()
    
    
  return (
    <div>
        <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">{data._id}</h1>
      <p className="mb-5">
        {
            data.title
        }
      </p>
      <button className="btn btn-primary">
        <Link to={`/jobapply/${data._id}`}>Apply</Link>
      </button>
    </div>
  </div>
</div>
    </div>
  )
}

export default ApplyDetailsPage