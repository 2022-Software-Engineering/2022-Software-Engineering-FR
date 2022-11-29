import Header from "../../component/header";
import ShowSearchList from "../../page/showSearchList/showSearchList";
import { useState,useEffect } from "react";
import axios from "axios";
import "./myPage.css"

export const MyPage=()=>{

    const [searchResult,setSearchResult]=useState([]);
    const [isLoaded,setIsloaded] = useState(false);

    // useEffect(()=>{
    //     axios.post("localhose:8080",{
    //             'userID':sessionStorage.getItem("userID")
    //     }).then(v=>{
    //         setSearchResult(v.data);
    //         setIsloaded(false);
    //     },
    //     e=>{
    //         alert("서버 장애");
    //     })
    // },[isLoaded])

    const handleSearchBtn =()=>{
        setSearchResult([
            {
                "plantID": "204870",
                "plantNameKR": "페페로미아 그라베올렌스",
                "plantNameEN": "<i>Peperomia graveolens</i>",
                "plantImgUrl": "http://www.nongsaro.go.kr/cms_contents/1122/204870_MF_BIMG_01.jpg",
                "dltkdgksrj": "dltksgkssrrkqtdmf sjgdjqhewk"
            },
            {
                "plantID": "204865",
                "plantNameKR": "사마로",
                "plantNameEN": "<i>Sinocrassula yunnanensis</i>",
                "plantImgUrl": "http://www.nongsaro.go.kr/cms_contents/1122/204865_MF_BIMG_01.jpg"
            },
            {
                "plantID": "204858",
                "plantNameKR": "자보",
                "plantNameEN": "<i>Gasteria gracilis</i> var. <i>minima</i>",
                "plantImgUrl": "http://www.nongsaro.go.kr/cms_contents/1122/204858_MF_BIMG_01.jpg"
            }
        ]);
    }
    
    return (
        <div>
            <div id="header_div">
                <Header></Header>
            </div>

            <div className="title_div">
                <p className="myPageTitle">{sessionStorage.getItem("userID")} 님의 관심 식물 리스트</p>
                {/* <input type="button" value="결과리스트보이기" onClick={handleSearchBtn}></input> */}
            </div>
            <div><br></br></div> 
            <div id="interestList_div">
                
                <ShowSearchList data ={searchResult} ></ShowSearchList>
            </div>
        </div>
    );
    

}

export default MyPage;
