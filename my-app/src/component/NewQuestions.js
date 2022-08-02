import React, { useRef } from "react"
import { connect } from 'react-redux'
import { addQuestions } from '../redux/Register/R_Action'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";




function NewQuestions({ addQuestions }) {

    const r_one = useRef();
    const r_two = useRef();
    const r_three = useRef();
    const r_four = useRef();
    const r_correct = useRef();
    const r_ques = useRef();

    const navigate = useNavigate()


    function AddQuestion(e) {


        const newQues = {
            Question: r_ques.current.value,
            a: r_one.current.value,
            b: r_two.current.value,
            c: r_three.current.value,
            d: r_four.current.value,
            ans: r_correct.current.value
        }


        if (r_one.current.value === '' || r_two.current.value === '' || r_three.current.value === '' || r_four.current.value === '' || r_correct.current.value === '' || r_ques.current.value === '') {
            alert('fill the fields')
        }
        else {
            axios.post("http://localhost:8000/api/quiz", newQues).then(res => console.log(res.data))
            
            console.log(newQues, "page")

            r_one.current.value = ""
            r_two.current.value = ""
            r_three.current.value = ""
            r_four.current.value = ""
            r_correct.current.value = ""
            r_ques.current.value = ""

            alert("Question Added Succesfully")

        }
    }
    return (
        <>
            <div className=" App my-5 mb-5" >
                <form  >
                    <div ><h1 >Add New Question Here</h1></div>
                    <br />
                    <label className='registerLabel' htmlFor="fname">Question  : </label>
                    <input className="inputFeild" type="text" name="fname" ref={r_ques} /><br />
                    <br/>
                    <label className='registerLabel' htmlFor="fname">Option 1 : </label>
                    <input type="text" className="inputFeild" name="fname" ref={r_one} /><br />
                    <br />
                    <label className='registerLabel' htmlFor="fname">Option 2  : </label>
                    <input type="text" name="fname" className="inputFeild" ref={r_two} /><br />
                    <br />
                    <label className='registerLabel' htmlFor="fname">Option 3 : </label>
                    <input type="text" name="fname" className="inputFeild" ref={r_three} /><br /><br />
                    <label className='registerLabel' htmlFor="fname">Option 4 : </label>
                    <input type="text" name="fname" className="inputFeild" ref={r_four} /><br /> <br /> <br />
                    <label className='registerLabel' htmlFor="fname" style={{width:"200px"}}>Enter Correct Answer : </label>
                    {/* <input type="text" name="fname" className="inputFeild" ref={r_correct} /><br /> */}
                    <br />
                    <br />
                    
                    <div>
                    
                    <button type="button" className="btn" >Option 1</button>
                    <button type="button" className="btn" >Option 2</button>
                    <button type="button" className="btn" >Option 3</button>
                    <button type="button" className="btn" >Option 4</button>
                    
                    </div>
                    
                    <div className='mt-4'>
                        <button type="button" className="btn" onClick={(e) => AddQuestion(e)}>Add</button>
                        <br />

                        <button onClick={() => {
                            sessionStorage.clear();
                            navigate('/login')
                            window.location.reload();
                        }} className="btn">Back To Login Page</button>

                    </div>
                </form>
                <br />
            </div>
        </>
    )
}
const mapStateToProps = state => {
    return {
        userData: state.user.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addQuestions: (newQues) => dispatch(addQuestions(newQues))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestions)

// export default Register;
