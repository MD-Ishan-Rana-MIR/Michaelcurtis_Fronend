import React from 'react'
import TermBanner from './TermBanner'
import TermText from './TermText'

const Page: React.FC = () => {
    return (
        <div className=' bg-[#f9fafb] ' >
            <TermBanner></TermBanner>
            <TermText></TermText>
        </div>
    )
}

export default Page