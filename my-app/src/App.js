
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store';
import UserContainer from './component/UserContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './component/Register';
import Login from './component/Login';
import AdminPage from './component/AdminPage';
import NewQuestions from './component/NewQuestions';
import { useEffect, useState } from 'react';
import axios from 'axios';
import QuizPage from './component/QuizPage';




function App() {
  
  const [token, setToken] = useState(false);
  
  useEffect(() => {

    axios.post("http://localhost:8000/verify/", { token: sessionStorage.getItem("Token") }).then(res => {
      setToken(res.data)

    }
    )
  }, [])

  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>

            {
              token ? <>
                <Route path='/admin' element={<AdminPage />}></Route>
                <Route path='/add' element={<NewQuestions />}></Route>
                {/* <Route path='*' element={<UserContainer />}></Route> */}
                <Route path='*' element={<QuizPage />}></Route>
              </> : <>
                <Route path='/' element={<Register />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='*' element={<Login />}></Route>
              </>
            }

          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;