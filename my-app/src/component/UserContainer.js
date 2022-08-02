// import axios from 'axios';
// import React, { useEffect, useRef, useState } from 'react'
// import { connect } from 'react-redux'
// import { Link, useNavigate } from 'react-router-dom';
// import { fetchUsers, userAnswer } from '../redux/User/userAction'




// function UserContainer({ userData, fetchUsers, userAnswer, currentLoginPlayer }) {


//   const [Show, setShow] = useState(false)
//   const [next, setNext] = useState(0);
//   const [score, setScore] = useState(0);
//   const [answer, setAns] = useState('')
//   const [s_answer, setS_Ans] = useState([])

//   const [disableSubmit, setDisableSubmit] = useState(false)
//   const [disableRadio, setDisableRadio] = useState(false)

//   const navigate = useNavigate()
//   const dp = useRef();

//   const [image, setImage] = useState();



//   const handleShow = () => setShow(true)
//   useEffect(() => {
//     fetchUsers()
//   }, [])


//   function handleImage(e) {
//     e.preventDefault()
//     const file = dp.current.files[0];
//     console.log(file, "testing image")
//     var profilePic = new FormData();

//     profilePic.append("profilePic", file, file.name);


//     axios.post("http://localhost:8000/single", profilePic)

//     setImage(file.name)

//   }

//   function checkAnswer() {

//     setDisableRadio(true)
//     setDisableSubmit(true)
//     if (answer === userData[next].ans) {
//       setScore(score + 1)


//     }
//     setS_Ans([...s_answer, answer])


//   }
//   const handleNext = () => {


//     setDisableRadio(false)

//     setDisableSubmit(false)

//     setNext(next + 1)
//     // console.log(next);
//     if (next == userData.length - 1) {
//       console.log(s_answer, score);
//       // userAnswer({ optionsSelected: s_answer, Score: score, Name: currentLoginPlayer.active })

//       axios.post("http://localhost:8000/api/result",
//         {
//           selectedAns: s_answer,
//           score: score,
//           name: sessionStorage.getItem("Name")

//         })

//     }
//   }

//   function handleChange(e) {
//     setAns(e)
//   }
//   // console.log(answer)
//   return Show ? next < userData.length ? (

//     <div className='qBackground'>
//       <div className='seven'><h2>Quiz </h2></div>
//       <div>

//         <form className='quizForm'>
//           <p> Q{next + 1}: {userData[next].Question}</p>
//           <div className='options'>
//             <input type="radio" disabled={disableRadio} id="a" name="fav_language" value="a" onChange={(e) => handleChange(e.target.value)} />
//             <label for="html">{userData[next].a}</label><br /><br />
//           </div>

//           <div className='options'>
//             <input type="radio" id="b" disabled={disableRadio} name="fav_language" value="b" onChange={(e) => handleChange(e.target.value)} />
//             <label for="css">{userData[next].b}</label><br /><br />
//           </div>

//           <div className='options'>
//             <input type="radio" id="c" name="fav_language" disabled={disableRadio} value="c" onChange={(e) => handleChange(e.target.value)} />
//             <label for="javascript">{userData[next].c}</label><br /><br />
//           </div>

//           <div className='options'>
//             <input type="radio" id="d" name="fav_language" value="d" disabled={disableRadio} onChange={(e) => handleChange(e.target.value)} />
//             <label for="opt">{userData[next].d}</label>
//           </div>

//           <br />
//           <br />
//           <button disabled={disableSubmit} className='btn-2' onClick={checkAnswer} type="button">Submit</button>
//           {
//             (next == userData.length - 1) ? <button className='btn-2' onClick={(e) => handleNext()} type="button">End Test</button> : <button className='btn-2' onClick={(e) => handleNext()} type="button">Next</button>
//           }

//         </form>
//         <button onClick={() => {
//         sessionStorage.clear();
//         navigate('/login')
//         window.location.reload();
//       }} className='btn'>Logout</button>

//       </div>
//     </div>
//   ) : (
//     <div className='qBackground'>
//       <h2>Name : {sessionStorage.getItem("Name")}</h2>

//       Your Score is {score}
//       <p>End of ques</p>

//       <button onClick={() => {
//         sessionStorage.clear();
//         navigate('/login')
//         window.location.reload();
//       }} className='btn'>Logout</button>

//     </div>
//   ) : <>

//     <img src={image ? "http://localhost:8000/" + image : "demo.png"} alt="Avatar" class="avatar" style={{ height: "100px" }} />

//     <form >

//       <input type="file" name="image" ref={dp} style={{ paddingTop: "45px" }} />

//       <button onClick={handleImage}>Upload </button>
//     </form>
//     <button className='btn' onClick={handleShow} style={{ marginTop: "59px" }}>Click Here to Start Quiz</button>
//   </>

// }

// const mapStateToProps = state => {
//   return {
//     userData: state.user.users,
//     currentLoginPlayer: state.auth
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchUsers: () => dispatch(fetchUsers()),
//     userAnswer: (ans) => dispatch(userAnswer(ans))
//     // loginUsers: (newUser) => dispatch(loginUsers(newUser))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)