
// import Login from './Login';
import axios from "axios";
import React, { useEffect, useRef } from "react"

import { Link, useNavigate } from "react-router-dom";

function Login() {
    const r_email = useRef();
    const r_pass = useRef();
    const Navigate = useNavigate()

    // useEffect(() => {
    //     loginUsers()
    // }, [])


    function LoginUser(e) {

        const newUser = {
            email: r_email.current.value,
            password: r_pass.current.value
        }


        if (r_email.current.value === '' || r_pass.current.value === '') {
            alert('fill the fields')
        }
        else {
            axios.get("http://localhost:8000/api/users") //json
                .then(response => {
                    const userData = response.data

                    userData.forEach((a) => {
                        if (a.email === newUser.email && a.password === newUser.password) {

                            axios.post("http://localhost:8000/loginData/", a).then(res => {
                                console.log(res.data);
                                sessionStorage.setItem("Token", res.data.Token)
                                sessionStorage.setItem("Name", res.data.username)
                                window.location.reload()
                            })

                            console.log("succesfull", a.isAdmin)
                            if (!a.isAdmin) {

                                Navigate('/Quiz')
                            }
                            else {


                                Navigate('/admin')
                            }
                        }

                    })

                }).catch(error => {
                    console.log(error.message)

                })
        }
    }
    return (
        <>
            <div className=" App my-5 mb-5" >
                <form  >
                    <h1 className="LoginHeading">Welcome to Quiz Login Page</h1>
                    <br />
                    <div className="LoginForm">

                        <label className='loginLabel' htmlFor="fname" >Email  : </label>
                        <input className="inputFeild" type="email" name="fname" ref={r_email} /><br />
                        <br />
                        <label className='loginLabel' htmlFor="fname">Password : </label>
                        <input className="inputFeild" type="password" name="fname" ref={r_pass} /><br />
                        <br />
                        <div className='mt-4'>
                            <button type="button" className="btn btn-primary mt-2 " onClick={(e) => LoginUser(e)}>Login</button>
                            <br />
                            <Link to='/'>
                                <button className="btn">Don't have an Account , Register</button>
                            </Link>
                        </div>
                    </div>
                </form>
                <br />
            </div>
        </>
    )
}

// const mapStateToProps = state => {
//     return {
//         userData: state.auth.users
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         adminName: (newUser) => dispatch(adminName(newUser)),
//         loginUsers: (newUser) => dispatch(loginUsers(newUser)),
//         active: (name) => dispatch(activeUser(name)),
//         isLogin: () => dispatch(isLogin())
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Login)
export default Login