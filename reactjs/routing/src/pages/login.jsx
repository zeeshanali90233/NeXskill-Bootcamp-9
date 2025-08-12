import React from 'react'
import { NavLink } from 'react-router'
import { useNavigate } from "react-router";

const Login = () => {
    let navigate = useNavigate();

    const loginUser = () => {
        navigate("/dashboard");
    }
    return (
        <div>
            Login


            <button onClick={loginUser}>Login</button>
            <NavLink to={"/contact"}>
                Contact us
            </NavLink>
        </div>
    )
}

export default Login
