import React from 'react'
import CommunityBanner from './CommunityBanner'
import CoreTerm from './CoreTerm'

const Page: React.FC = () => {
    return (
        <div className=' bg-[#f9fafb] ' >
            <CommunityBanner></CommunityBanner>
            <CoreTerm></CoreTerm>
        </div>
    )
}

export default Page