import axios from "axios"
import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userTypes"


export const fetchUsersFailure = error => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {
    return (dispatch) => {

        dispatch({
            type: FETCH_USER_REQUEST
        })
        axios.get('http://localhost:8000/api/quiz')
            .then(response => {
                const users = response.data
                dispatch({
                    type: FETCH_USER_SUCCESS,
                    payload: users
                })
            }).catch(error => {
                const errorMsg = error.message
                dispatch(fetchUsersFailure(errorMsg))
            })
    }
}

export const userAnswer = (myAnswer) => {

    return () => {


        axios.post('http://localhost:8005/selectedAnswers', myAnswer)
            .then(response => {
                console.log(response.data)

            }).catch(error => {
                console.log(error.message)
            })
    }
}