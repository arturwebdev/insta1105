import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import imgs from "../../images";
import { fetchUsers } from "../../store/slices/users/usersAPI";
import { selectUser, toggleCurrentUser } from "../../store/slices/users/usersSlice";
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch()
  const {currentUser} = useSelector(selectUser)
  const navigate = useNavigate()

  useEffect(() => {
    if (currentUser) {
      navigate('/')
    }
  }, [currentUser])

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  const formRef = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    const {login: {value: login}, password: {value: password}} = formRef.current
  
    dispatch(toggleCurrentUser({login, password}))

  }

  return (

    <div >
      <div className="login">
        <div>
          <img className="logo" src={imgs.logo} alt="" />
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input name="login" defaultValue={`bret`} placeholder="Phone number, username, or email" type="text" />
          <input name="password" defaultValue={`gwenborough`} placeholder="Password" type="password" />
          <button>Log in</button>
        </form>
        <div className="line">
          <hr />
          <span className="or">OR</span>
          <hr />
        </div>
        <p className="pass">Forgot password?</p>
      </div>
      <div className="endside">
        <p>Don't have an account?</p>
        <span className="bottom" >Sign up</span>
      </div>
    </div>

  );
};

export default Login;
