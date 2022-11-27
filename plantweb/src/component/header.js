import { useNavigate} from 'react-router-dom';
import {useState, useEffect} from "react"
import Logo from "../images/Logo.png";
import UserIcon from"../images/user_icon.png";
import "./header.css"



export const Header = () => {
    const navigate = useNavigate();
    const [isLoaded,setIsLoaded]=useState(false);
    const [buttonText,setButtonText]=useState("");
    // const buttonText=sessionStorage.getItem("userID") == null? "LOGIN" : "LOGOUT";

    useEffect(()=>{
        setButtonText(sessionStorage.getItem("userID") == null? "LOGIN" : "LOGOUT");
        setIsLoaded(true);
    },[isLoaded])

    const LoginOrOut =() => {
        if(buttonText=="LOGIN"){
            navigate('/login');
        }else{
            sessionStorage.clear();
        }
    }
    const movemyPage =() => {
        navigate('/myPage');
    }

    return (
        <div id ="header_div">
            <div className="logo_div">
                <img className="logoImg" alt="logo" src={Logo} />
            </div>
            <div id="space_div"><span></span></div>
            <div id="btn_div"><button id="btn_moveToLogin" onClick ={LoginOrOut}>{buttonText}</button></div>
            <div id="myPage_div" onClick={movemyPage}><img className="userIconImg" alt="logo" src={UserIcon} /></div>
        </div>
    );
}

export default Header;