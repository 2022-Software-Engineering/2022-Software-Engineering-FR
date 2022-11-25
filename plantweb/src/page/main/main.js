import Header from "../../component/header";
import ShowSearchList from "../../page/showSearchList/showSearchList";
import { useState,useEffect } from "react";
import axios from "axios";
import "./main.css"

export const Main=()=>{
    const [searchType,setSearchType]=useState("");
    const [searchWord,setSearchWord]=useState("");
    const [growRate,setGrowRate]=useState("");
    const [manageLevel,setManageLevel]=useState("");
    const [manageDemand,setManageDemand]=useState("");

    const [searchResult,setSearchResult]=useState([]);

    // const handleSearchBtn =()=>{
    //     axios.get("localhose:8080",{
    //             'searchType':searchType, 
    //             'searchWord' : searchWord,
    //             'growRate': growRate,
    //             'manageLevel' : manageLevel ,
    //             'manageDemand': manageDemand
    //     }).then(v=>{
    //         setSearchResult(v.data);
    //     },
    //     e=>{
    //         alert("서버 장애");
    //     })
    // }

    const handleSearchBtn =()=>{
        
        setSearchResult([
            {
                "plantID": "204870",
                "plantNameKR": "페페로미아 그라베올렌스",
                "plantNameEN": "<i>Peperomia graveolens</i>",
                "plantImgUrl": "http://www.nongsaro.go.kr/cms_contents/1122/204870_MF_BIMG_01.jpg"
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
            <div>
                <Header></Header>
            </div>

            <div id="search_div">
                <p>검색</p>
                <hr></hr>
                <br></br>
                <table id="search_table">
                    <tr>
                        <th>
                            <select name="searchType" onChange={(e)=>setSearchType(e.target.value)}>

                                <option value="sCntntsSj">식물명(한국어)</option>
                                <option value="sScnm">식물명(영어)</option>
                            </select>
                        </th>
                        <td>
                            <input type="text" name="searchWord" id="searchWord" onChange={(e)=>setSearchWord(e.target.value)}></input>
                            <input type="button" name="search_btn" id="search_btn" value="검색" onClick={handleSearchBtn}></input>

                        </td>
                    </tr>

                    <tr>
                        <th>
                            <strong>생장속도</strong>
                        </th>
                        <td>
                            <input type="radio" name="growRate" id="growRate_slow" value="407001" onClick={(e)=>setGrowRate(e.target.value)}></input>
                            <label from="growRate_slow">느림  </label>
                            <input type="radio" name="growRate" id="growRate_common" value="407002" onClick={(e)=>setGrowRate(e.target.value)}></input>
                            <label from="growRate_common">보통  </label>
                            <input type="radio" name="growRate" id="growRate_fast" value="407003" onClick={(e)=>setGrowRate(e.target.value)}></input>

                            <label from="growRate_fast">빠름  </label>
                        </td>
                    </tr>

                    <tr>
                        <th>
                            <strong>관리수준</strong>
                        </th>
                        <td>
                            <input type="radio" name="manageLevel" id="manageLevel_very_easy" value="408001"  onClick={(e)=>setManageLevel(e.target.value)}></input>
                            <label from="manageLevel_very_easy">매우 쉬움  </label>
                            <input type="radio" name="manageLevel" id="manageLevel_easy" value="408004" onClick={(e)=>setManageLevel(e.target.value)}></input>
                            <label from="manageLevel_easy">쉬움  </label>
                            <input type="radio" name="manageLevel" id="manageLevel_common" value="408003" onClick={(e)=>setManageLevel(e.target.value)}></input>
                            <label from="manageLevel_common">보통  </label>
                            <input type="radio" name="manageLevel" id="manageLevel_difficulty" value="408005" onClick={(e)=>setManageLevel(e.target.value)}></input>
                            <label from="manageLevel_difficulty">어려움  </label>
                            <input type="radio" name="manageLevel" id="manageLevel_very_difficulty" value="408002" onClick={(e)=>setManageLevel(e.target.value)}></input>

                            <label from="manageLevel_very_difficulty">매우 어려움  </label>
                        </td>
                    </tr>

                    <tr>
                        <th>
                            <strong>관리요구도</strong>
                        </th>
                        <td>
                            <input type="radio" name="manageDemand" id="manageDemand_low" value="409001" onClick={(e)=>setManageDemand(e.target.value)}></input>
                            <label from="manageDemand_low">약간 돌봄  </label>
                            <input type="radio" name="manageDemand" id="manageDemand_middle" value="409002" onClick={(e)=>setManageDemand(e.target.value)}></input>
                            <label from="manageDemand_middle">잘 견딤  </label>
                            <input type="radio" name="manageDemand" id="manageDemand_high" value="409003" onClick={(e)=>setManageDemand(e.target.value)}></input>

                            <label from="manageDemand_high">필요함  </label>
                        </td>
                    </tr>
                </table>
            </div>
            <div>
                <ShowSearchList data ={searchResult} ></ShowSearchList>
            </div>

        </div>
    );
    

}

export default Main;