import { combineReducers } from 'redux' // 利用combineReducers 合并reducers
import { routerReducer } from 'react-router-redux' // 将routerReducer一起合并管理
import featureA from '../featureA/reducers.js'
// import featureB from '../featureB/reducers'
console.log("featureA",featureA);
export default combineReducers({
    featureA,
    // featureB
})
