import { ADDNUM } from '../types/index'

const rootState = {
    num: 0
}
export default function reducers(state = rootState, actions) {
    switch (actions.type) {
        case ADDNUM: {
            return { ...state, num: state.num + 1 }
        }
        default:
            return state
    }
}