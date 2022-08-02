import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { activeUser, isLogin, loginUsers, report } from '../redux/Register/R_Action'

function AdminPage() {



    const [userData, setUserData] = useState()
    const [result, setResult] = useState()


    useEffect(() => {

        axios.get("http://localhost:8000/api/users") //json
            .then(response => {
                setUserData(response.data)

            })

    }, [])

    useEffect(() => {

        axios.get("http://localhost:8000/api/result") //json
            .then(response => {
                setResult(response.data)

            })

    }, [])



    const [tap, setTap] = useState("")
    const navigate = useNavigate()

    // console.log(userData.reportCard.score)


    return (
        tap === "users" ?
            <div>
                <h1 className='Admin_table_heading specialHeading' >Welcome :- <span style={{ color: "white" }}>Admin</span> </h1>
                {/* <div className='quizForm'> */}

                <table className='Admin_table quizForm'>
                    <tr>
                        <th >ID</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Password</th>
                        <th>Phone</th>

                    </tr>
                    <tbody >
                        {
                            userData?.map((data, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{data.email}</td>
                                        <td>{data.name}</td>
                                        <td>{data.password}</td>
                                        <td>{data.phone}</td>

                                    </tr>)
                            })
                        }
                    </tbody>

                </table>

                <button onClick={() => {
                    sessionStorage.clear();
                    navigate('/login')
                    window.location.reload();
                }} className='btn special'>Logout</button>

            </div> : tap === "result" ?
                <div >
                    <h1 className='Admin_table_heading specialHeading' >Welcome :- <span style={{ color: "white" }}>Admin</span> </h1>
                    <table className='Admin_table quizForm'>
                        <tr>
                            <th >ID</th>
                            <th>Name</th>
                            <th>Score</th>
                            <th>Total Questions</th>
                            <th>Options Selected</th>
                        </tr>
                        <tbody >
                            {
                                result?.map((data, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{data.name}</td>
                                            <td>{data.score}</td>
                                            <td>5</td>
                                            <td>{data.selectedAns.map((e, i) => {
                                                return ` ${i + 1}: (${e}) ${" "} `
                                            })}</td>
                                        </tr>)
                                })
                            }
                        </tbody>
                    </table>

                    <button onClick={() => {
                        sessionStorage.clear();
                        navigate('/login')
                        window.location.reload();
                    }} className='btn special'>Logout</button>

                </div>
                : tap === "AddQuestion" ? navigate('/add') : <>
                    <div className='operationHeading'>

                        <h2  >Choose Your Operation  <span style={{ color: "white" }}></span> </h2>
                    </div>
                    <div className='operationButton'>

                        <button type="button" className="btn btn-primary mt-2 " onClick={() => setTap("users")}>Total Registrations</button>
                        <button type="button" className="btn btn-primary mt-2 " onClick={() => setTap("result")}>Results</button>
                        <button type="button" className="btn" onClick={() => setTap("AddQuestion")}>Add New Question</button>
                    </div>
                </>



    )
}

const mapStateToProps = state => {
    return {
        userData: state.auth,
        // report: state.auth.reportCard,
        admin: state.auth.nameOfAdmin
    }
}

const mapDispatchToProps = dispatch => {
    return {
        report: () => dispatch(report()),
        loginUsers: () => dispatch(loginUsers()),
        active: (name) => dispatch(activeUser(name)),
        isLogin: () => dispatch(isLogin())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage)