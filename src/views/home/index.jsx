import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'


import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'
import SectionV1 from './c-cpns/home-section-v1'
// import SectionHeader from '@/components/section-header'

import SectionV2 from './c-cpns/home-section-v2'
import { isEmptyO } from '@/utils'



const Home = memo(() => {

    // 组件mount挂载的时候，想从redux中获取数据
    const { goodPriceInfo, highScoreInfo, discountInfo } = useSelector((state) => {
        return {
            goodPriceInfo: state.home.goodPriceInfo,
            highScoreInfo: state.home.highScoreInfo,
            discountInfo: state.home.discountInfo
        }
    }, shallowEqual)


    const dispatch = useDispatch()

    // 副作用只需要请求一次的数据，不需要组件每次更新都请求 
    useEffect(() => {
        dispatch(fetchHomeDataAction())
    }, [dispatch])



    return (
        <HomeWrapper>

            <HomeBanner />

            {/* 对这部分继续做抽离 */}
            <div className="container">
        
                {isEmptyO(discountInfo) && <SectionV2 infoData={discountInfo}/>}
                <SectionV1 infoData={goodPriceInfo} />
                <SectionV1 infoData={highScoreInfo} />
            </div>

        </HomeWrapper>
    )
})

export default Home