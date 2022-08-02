import axios from "axios"
import { REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "./R_type"

// export const REGISTERUsersRequest = () => {
//     return {
//         type: REGISTER_USER_REQUEST
//     }
// }

// export const REGISTERUsersSuccess=users=>
// {
//     return {
//         type:REGISTER_USER_SUCCESS,
//         payload:users
//     }
// }

export const REGISTERUsersFailure = error => {
    return {
        type: REGISTER_USER_FAILURE,
        payload: error
    }
}

export const registerUsers = (newUser) => {

    return (dispatch) => {

        dispatch({
            type: REGISTER_USER_REQUEST
        })
        axios.post('http://localhost:3004/NewUsers', newUser)
            .then(response => {
                console.log(response.data)


                // dispatch({
                //     type: REGISTER_USER_SUCCESS,

                // })
            }).catch(error => {
                const errorMsg = error.message
                dispatch(REGISTERUsersFailure(errorMsg))
            })
    }
}

export const loginUsers = () => {
    return (dispatch) => {

        dispatch({
            type: REGISTER_USER_REQUEST
        })
        axios.get('http://localhost:3004/NewUsers')
            .then(response => {
                const users = response.data

                dispatch({
                    type: REGISTER_USER_SUCCESS,
                    payload: users
                })
            }).catch(error => {
                const errorMsg = error.message
                dispatch(REGISTERUsersFailure(errorMsg))
            })
    }
}
export const report = () => {
    return (dispatch) => {

        axios.get('http://localhost:3004/selectedAnswers')
            .then(response => {
                const users = response.data
                console.log(users, "reducer")

                dispatch({
                    type: "report",
                    payload: users
                })
            }).catch(error => {
                const errorMsg = error.message
                dispatch(REGISTERUsersFailure(errorMsg))
            })
    }
}

export const activeUser = (name) => {
    return {
        type: "active",
        payload: name
    }
}

export const isLogin = () => {

    return {
        type: "userIsLogin"

    }
}
export const adminName = (name) => {

    return {
        type: "adminName",
        payload: name

    }
}
export const addQuestions = (ques) => {

    return (dispatch) => {

        console.log(ques, "action")
        dispatch({
            type: REGISTER_USER_REQUEST
        })
        axios.post('http://localhost:3004/questions', ques)
            .then(response => {
                console.log(response.data)


                // dispatch({
                //     type: REGISTER_USER_SUCCESS,

                // })
            }).catch(error => {
                const errorMsg = error.message
                dispatch(REGISTERUsersFailure(errorMsg))
            })
    }
}