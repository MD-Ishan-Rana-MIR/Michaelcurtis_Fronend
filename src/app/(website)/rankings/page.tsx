import React from 'react'
import RankingBanner from './RankingBanner'
import RankingInsurance from './RankingInsurance'
import RakingReview from './RakingReview'

const Page: React.FC = () => {
    return (
        <div>
            <RankingBanner />
            <RankingInsurance></RankingInsurance>
            <RakingReview></RakingReview>
        </div>
    )
}

export default Page