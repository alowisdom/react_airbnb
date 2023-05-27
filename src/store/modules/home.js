import { getHomeDiscountData, getHomeGoodPriceData, getHomeHighScoreData } from "@/services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 在services封装好网络请求，这里引入使用 --getHomeGoodPriceData
// 并导出
export const fetchHomeDataAction = createAsyncThunk("fetchdata",(payload,{ dispatch }) => {
    // 之前的方法见缓存
    // 这里可以把extrareducers 里面的payload 作为参数，也可以通过dispatch,发送
    getHomeGoodPriceData().then(res => {
        dispatch(changeGoodPriceInfoAction(res))
    })
    getHomeHighScoreData().then(res => {
        dispatch(changeHighScoreInfoAction(res))
    })
    getHomeDiscountData().then(res => {
        dispatch(changeDiscountInfoAction(res))
    })
})


const HomeSlice = createSlice({

    name:'home',
    initialState:{
        goodPriceInfo:{},
        highScoreInfo:{},
        discountInfo:{}
    },
    reducers:{
        changeGoodPriceInfoAction(state,{payload}){
            state.goodPriceInfo = payload
        },

        changeHighScoreInfoAction(state,{payload}){
            state.highScoreInfo = payload
        },

        changeDiscountInfoAction(state,{payload}){
            state.discountInfo = payload
        }

    }
})

export const {
    changeGoodPriceInfoAction,
    changeHighScoreInfoAction,
    changeDiscountInfoAction} = HomeSlice.actions

export default HomeSlice.reducer
