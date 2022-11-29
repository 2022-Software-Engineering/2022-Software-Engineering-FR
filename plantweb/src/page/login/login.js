import { useNavigate,useLocation } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';
import Logo from "../../images/Logo_login.png";
import "./login.css"

export const Login=()=>{
    const [userID, setUserID] = useState("");
    const [password, setPW] = useState("");

    const navigate = useNavigate();
    const location = useLocation();

    const Login = ()=>{

        if(userID=="" | password=="") alert("회원정보를 입력 해 주세요")
        else{

            axios.post("https://plantinus.herokuapp.com/Login",{
                "userID": userID,
                "password": password
            }).then((v)=>{
                if(v.data.isLogined == "Success"){
                    sessionStorage.setItem("userID",userID);
                    alert(userID+"님 환영합니다.");
                    navigate("/");
            }else{
                alert("올바르지 않은 회원정보입니다.");
            }
        },
            e =>{
                console.log(e);
                alert("서버 장애");
            })
        }   
    }

    
    return (
        <div id="para">
            <div className="logoLogin_div">
                <img className="logoImg_login" alt="logo" src={Logo} />
                덩그러니
            </div>
            <div className='login_div'>

                <div id="login_input_div">
                    <div className='inputId_div'>
                        <label from="id" id="id_label">ID </label>
                        <input type="text" id="id" onChange={(e)=>{setUserID(e.target.value)}}></input>
                    </div>
                    <div className='inputPW_div'>
                        <label from="pw" id="pw_label">PW </label>
                        <input type="password" id="pw"onChange={(e)=>{setPW(e.target.value)}}></input>
                    </div>
                </div>
                <div className='loginBtn_div'>
                    <button id="login_btn" onClick={Login}>LOGIN</button>
                </div>
            </div>
        </div>
    );
}
export default Login;