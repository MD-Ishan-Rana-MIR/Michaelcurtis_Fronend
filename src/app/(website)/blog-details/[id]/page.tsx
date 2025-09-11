import React from 'react'
import BlogDetails from './BlogDetails'
import MoreBlog from './MoreBlog'

const Page: React.FC = () => {
    return (
        <div className=' bg-[#f9fafb] ' >
            <BlogDetails></BlogDetails>
            <MoreBlog></MoreBlog>
        </div>
    )
}

export default Page