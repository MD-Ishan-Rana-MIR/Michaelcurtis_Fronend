import React from 'react'
import Banner from './Banner'
import Category from './Category'
import TopInsurance from './TopInsurance'

const HomePage: React.FC = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <TopInsurance></TopInsurance>
        </div>
    )
}

export default HomePage