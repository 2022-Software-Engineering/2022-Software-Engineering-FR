import Main from "../main/main";
import SearchResult from "../../component/searchResult";
import "./showSearchList.css"

export const ShowSearchList=()=>{
    sessionStorage.setItem("Logined","Login");

    const results = [];
    const resultList = results.map(v => (<SearchResult plantNameKR={v.plantNameKR} plantNameEN={v.plantNameEN} plantImgUrl={v.plantImgUrl}/>));
    return (
        <div>
            <Main></Main>

            <div id="result_div">
                <p>결과</p>
                <hr></hr>
                
                <ul>
                    {resultList}
                </ul>
            </div>
        </div>
    );
    

}

export default ShowSearchList;