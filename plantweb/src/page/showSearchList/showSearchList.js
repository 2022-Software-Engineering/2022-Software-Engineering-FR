import SearchResult from "../../component/searchResult";
import { useState } from "react";
import "./showSearchList.css"

export const ShowSearchList=(prop)=>{
    const resultList = prop.data.map(result => (<SearchResult plantID={result.plantID} plantNameKR={result.plantNameKR} plantNameEN={result.plantNameEN} plantImgUrl={result.plantImgUrl}/>));

    return (
        <div>
            <div id="result_div">
                <p>결과 📃</p>
                <hr></hr>
                
            </div>
            <div className="resultTable_div">
                <ul className="resultTableUl_div">
                    {resultList}
                </ul>
            </div>
            
        </div>
    );
}

export default ShowSearchList
