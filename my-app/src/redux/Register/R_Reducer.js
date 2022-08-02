import { REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "./R_type"

const initialState = {
    loading: false,
    users: [],
    error: '',
    active: "",
    authenticate: false,
    nameOfAdmin: "",
    reportCard: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ''
            }
        case REGISTER_USER_FAILURE:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            }
        case "active":
            return {
                ...state, active: action.payload
            }

        case "userIsLogin":
            return {
                authenticate: true
            }
        case "adminName":
            console.log(action.payload, "reducer")
            return {
                ...state, nameOfAdmin: action.payload
            }
        case "report":
            return {
                ...state, reportCard: action.payload
            }
        default: return state
    }
}
export default reducer