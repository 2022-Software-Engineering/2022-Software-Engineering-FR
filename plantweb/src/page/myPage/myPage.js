import Header from "../../component/header";
import ShowSearchList from "../../page/showSearchList/showSearchList";
import { useState,useEffect } from "react";
import axios from "axios";
import "./myPage.css"

export const MyPage=()=>{

    const [searchResult,setSearchResult]=useState([]);
    const [isLoaded,setIsloaded] = useState(false);

    useEffect(()=>{
        axios.post("https://plantinus.herokuapp.com/interestPlantList",{
                'userID':sessionStorage.getItem("userID")
        }).then(v=>{
            setSearchResult(v.data);
            setIsloaded(true);
        },
        e=>{
            alert("서버 장애");
        })
    },[isLoaded])

    
    
    return (
        <div>
            <div id="header_div">
                <Header></Header>
            </div>

            <div id="interest_div">
                    <p className="myPageTitle">🌱 {sessionStorage.getItem("userID")} 님의 관심 식물 리스트 🌱</p>
                    <hr></hr>
                
                    <ShowSearchList data ={searchResult} ></ShowSearchList>
            </div>
        </div>
    );
    

}

export default MyPage;
