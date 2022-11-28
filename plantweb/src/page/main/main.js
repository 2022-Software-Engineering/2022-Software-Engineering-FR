import Header from "../../component/header";
import ShowSearchList from "../../page/showSearchList/showSearchList";
import { useState,useEffect } from "react";
import axios from "axios";
import "./main.css"

export const Main=()=>{
    const [searchType,setSearchType]=useState("sCntntsSj");
    const [searchWord,setSearchWord]=useState('0');
    const [growRate,setGrowRate]=useState('0');
    const [manageLevel,setManageLevel]=useState('0');
    const [manageDemand,setManageDemand]=useState('0');

    const [searchResult,setSearchResult]=useState([]);

    const handleSearchBtn =()=>{
        axios.get("http://127.0.0.1:8000/searchResultList",{
                'searchType': searchType, 

                'searchWord' : searchWord,
                'growRate': growRate,
                'manageLevel' : manageLevel ,
                'manageDemand': manageDemand
        }).then(v=>{

            setSearchResult(v.data);
        },
        e=>{
            console.log(e);
            alert("서버 장애");
        })

    }

    

    return (
        <div>
            <div id="header_div">
                <Header></Header>
            </div>

            <div id="search_div">
                <p>검색 🔍</p>
                <hr></hr>
                <br></br>
                <table id="search_table">
                    <tr>
                        <th>
                            <select name="searchType" onChange={(e)=>setSearchType(e.target.value)} className="serchTypeDropBox">
                                <option value="sCntntsSj">식물명(한국어)</option>
                                <option value="sScnm">식물명(영어)</option>
                            </select>
                        </th>
                        <td>
                            <div className="search_div">
                                <input type="text" name="searchWord" id="searchWordInput" onChange={(e)=>setSearchWord(e.target.value)}></input>
                                <input type="button" name="search_btn" id="search_btn" value="검색" onClick={handleSearchBtn}></input>

                            </div>
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
            <div id="searchList_div">
                <ShowSearchList data ={searchResult} ></ShowSearchList>
            </div>

        </div>
    );
    

}

export default Main;