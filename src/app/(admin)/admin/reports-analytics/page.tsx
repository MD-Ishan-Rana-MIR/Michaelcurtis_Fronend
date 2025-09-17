import React from 'react'
import Report from './Report'
import ProviderChart from './ProviderChart'

const page = () => {
  return (
    <div>
      <div className=' flex flex-row items-center gap-x-4 ' >
        <div className=' flex-1 ' >
          <Report></Report>
        </div>
        <div className=' flex-1 ' >
          <ProviderChart></ProviderChart>
        </div>
      </div>
    </div>
  )
}

export default page