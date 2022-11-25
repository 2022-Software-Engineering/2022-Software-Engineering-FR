import SearchResult from "../../component/searchResult";
import { useState } from "react";
import "./showSearchList.css"

export const ShowSearchList=(prop)=>{
    const [resultData,setResultData]=useState([]);
    console.log(prop);
    const resultList = prop.data.map(result => (<SearchResult plantNameKR={result.plantNameKR} plantNameEN={result.plantNameEN} plantImgUrl={result.plantImgUrl}/>));
    return (
        <div>

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