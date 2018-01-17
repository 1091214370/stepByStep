import TYPES from '../$redux/rootTypes.js'

export function addNum() {
    return (dispatch) => {
        dispatch(addNumWithStore());
        //你可以在此处向服务器请求数据
    }
}
export const addNumWithStore = () => {
    return { type: TYPES.FEATURE_A.ADD_1 }
}

export function reduceNum() {
    return (dispatch) => {
        dispatch(reduceNumWithStore());
        //你可以在此处向服务器请求数据
    }
}
export const reduceNumWithStore = () => {
    return { type: TYPES.FEATURE_A.REDUCE_1 }
}

export function setNum(value) {
    return (dispatch) => {
        dispatch(setNumWithValue(value));
        //你可以在此处向服务器请求数据
    }
}
export const setNumWithValue = (value) => {
    return { type: TYPES.FEATURE_A.SET_NUMBER, value }
}
export function setIcon(icon) {
    return (dispatch) => {
        dispatch(setIconWithValue(icon));
    }
}
export const setIconWithValue = (icon) => {
    return { type: TYPES.FEATURE_A.SET_ICON, icon }
}