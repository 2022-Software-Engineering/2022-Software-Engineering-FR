import { useNavigate} from 'react-router-dom';
import {useState, useEffect} from "react"
import Logo from "../images/Logo_header.png";
import UserIcon from"../images/user_icon.png";
import "./header.css"



export const Header = () => {
    const navigate = useNavigate();
    const [isLoaded,setIsLoaded]=useState(false);
    const [buttonText,setButtonText]=useState("");

    useEffect(()=>{
        setButtonText(sessionStorage.getItem("userID") == null? "LOGIN" : "LOGOUT");
        setIsLoaded(true);
    },[isLoaded])

    const LoginOrOut =() => {
        if(buttonText=="LOGIN"){
            navigate('/login');
        }else{
            alert("로그아웃 되셨습니다.")
            setButtonText("LOGIN");
            sessionStorage.clear();
            navigate('/');

        }
    }
    const moveToMyPage =() => {
        if(sessionStorage.getItem("userID")==null){
            alert("로그인 후 이용 가능한 기능입니다")
        }else{
            navigate('/myPage');
        }
    }
    const moveToMain =() => {
        navigate('/');
    }

    return (
        <div id ="header_div">
            <div className='logo_div'  onClick={moveToMain}>
                <div className="logoImg_div">
                    <img className="logoImg_header" alt="logo" src={Logo} />
                </div>
                <div className="logoText_div">
                    <span className="logoText">PLANTINUS</span>
                </div>
            </div>


            <div id="space_div"><span></span></div>
            <div id="btn_div"><button id="btn_moveToLogin" onClick ={LoginOrOut}>{buttonText}</button></div>
            <div id="myPage_div" onClick={moveToMyPage}><img className="userIconImg" alt="logo" src={UserIcon} /></div>
        </div>
    );
}

export default Header;