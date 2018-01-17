import { combineReducers } from 'redux'
import TYPES from '../$redux/rootTypes.js' // How to refs it beautiful?

const initialList = {
    theNumber: 0,
    theIcon: "",
    theString: "initial string!",
};


export default combineReducers({
    pageData: function(state = initialList, action) { //�����б�
        // console.log("initList", action);
        switch (action.type) {
            case TYPES.FEATURE_A.ADD_1:
                // 修改位置，判断是否是最大值
                if (state.theNumber < 20) {
                    return Object.assign({}, state, { theNumber: state.theNumber + 1 });
                }
                break;
            case TYPES.FEATURE_A.REDUCE_1:
                // 修改位置，判断是否是最小值
                if (state.theNumber > 0) {
                    return Object.assign({}, state, { theNumber: state.theNumber - 1 });
                }
                break;
            case TYPES.FEATURE_A.SET_NUMBER:
                return Object.assign({}, state, { theNumber: action.value });
                break;
            case TYPES.FEATURE_B.TEST_ACTION:
                return Object.assign({}, state, { theString: theString.split('').reverse().join('') });
                break;
            case TYPES.FEATURE_A.SET_ICON:
                return Object.assign({}, state, { theIcon: action.icon });
            default:
                return state;
        }
    },
})