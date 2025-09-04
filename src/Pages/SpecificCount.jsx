import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SpecificCount = () => {
    const data = useLoaderData()

  return (
    <div>
        <h2>applied: {data.length}</h2>
    </div>
  )
}

export default SpecificCount