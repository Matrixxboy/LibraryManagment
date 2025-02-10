import React,{useState} from "react";
import axios from "axios";
import "./signup.css"
import {Link} from "react-router-dom";


const Signup = () => {
    const [login, setLoginData] = useState({
        email: "",
        username: "",
        password: "",
    });
    const change = (e) =>{
        const {name,value} = e.target;
        setLoginData(prevData => ({
            ...prevData, [name]: value}));
    }

    const saveNewUser = async (e) =>{
        e.preventDefault();
            try{

            const response = await axios.post("http://localhost:5000/api/login/signup", {
                email: login.email,
                username: login.username,
                password: login.password,
            });
            console.log("New User Sign-up Successfully.",response.data);
            alert(response.data.message);
        }catch (error) {
                console.log("Sign up error : ",error);
                if(error.response.status === 401){
                    alert(error.response.data.message || "Sign up error");
                }else{
                    alert("A network error occurred.");
                }
        }
    }

    return (
        <div className="container login ">
            <div className=" maincontainer container bg-white text-center text-dark w-full">
                <form className={"form-horizontal"} onSubmit={saveNewUser}>
                    <br />
                    <h2>Sign Up</h2>
                    <div className="box">
                        <div className="line"></div>
                    </div>
                    <br/>
                    <div className={"form-group container col formdiv"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                             className="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                        </svg>
                        <input type="text" id="username" name="username"
                               className="form-control w-full"
                               value={login.username} placeholder="Enter Your Username" onChange={change}/>
                    </div>
                    <br/>
                    <div className={"form-group container"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor"
                             className="bi bi-envelope-fill" viewBox="0 0 16 16">
                            <path
                                d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                        </svg>
                        <input type="email"  id="usermail" name="email"
                               className="form-control w-full"
                               value={login.email} placeholder="Enter Your Email"
                               onChange={change}/>
                    </div>
                    <br/>
                    <div className={"form-group container"}>

                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor"
                             className="bi bi-shield-lock-fill" viewBox="0 0 16 16">
                            <path d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263 63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5"/>
                        </svg>
                        <input type="password" id="userpassword" name="password"
                               className="form-control w-full"
                               value={login.password} placeholder="Enter Your Password"
                               onChange={change}/>
                    </div>
                    <br/>
                    <div className="box">
                        <div className="line"></div>
                    </div>
                    <br/>
                    <p>Alrady have account ? <Link to="/Loginpage">Click here</Link> to redirect login page</p>
                    <button className="btn btn-lg btn-normal ">Sign Up</button>
                    <br />
                </form>
            </div>
        </div>
    )
}

export default Signup;