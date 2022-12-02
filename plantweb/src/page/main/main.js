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
        axios.get("https://plantinus.herokuapp.com/searchResultList",{params:
                {searchType: searchType ,
                searchWord : searchWord,
                growRate: growRate,
                manageLevel : manageLevel ,
                manageDemand: manageDemand}
            }).then(v=>{
                if(v.data.returnCode !=null) alert("만족하는 검색 결과가 존재하지 않습니다.");
                else{
                    setSearchResult(v.data);

                }

        },
        e=>{
            console.log(e);
            alert("서버 장애");
        })

        document.getElementById("searchList_div").style.display = "inline-block";
    }

    

    return (
        <div>
            <Header></Header>

            <div id="search_div">
                <p className="search_text">검색 🪴</p>
                <hr></hr>
                <br></br>
                <table id="search_table">
                    <tr>
                        <th>
                            <select name="searchType" onChange={(e)=>setSearchType(e.target.value)} className="searchTypeDropBox">
                                <option value="sCntntsSj">식물명(한국어)</option>
                                <option value="sScnm">식물명(영어)</option>
                            </select>
                        </th>
                        <td>
                            <div className="search_div">
                                <input type="text" name="searchWord" id="searchWordInput" onChange={(e)=>setSearchWord(e.target.value)}></input>
                                <input type="button" name="search_btn" id="search_btn" value="🔍" onClick={handleSearchBtn}></input>

                            </div>
                        </td>
                    </tr>

                    <tr>
                        <th>
                            <strong>생장속도</strong>
                        </th>
                        <td>
                            <label from="growRate_slow">
                                <input type="radio" name="growRate" id="growRate_slow" value="407001" onClick={(e)=>setGrowRate(e.target.value)}></input>
                                <span> 느림 </span>  
                            </label>
                            <label from="growRate_common">
                                <input type="radio" name="growRate" id="growRate_common" value="407002" onClick={(e)=>setGrowRate(e.target.value)}></input>
                                <span> 보통 </span>  
                            </label>
                            <label from="growRate_fast">
                                <input type="radio" name="growRate" id="growRate_fast" value="407003" onClick={(e)=>setGrowRate(e.target.value)}></input>
                                <span> 빠름 </span>  
                            </label>
                        </td>
                    </tr>

                    <tr>
                        <th>
                            <strong>관리수준</strong>
                        </th>
                        <td>
                            <label from="manageLevel_very_easy">
                                <input type="radio" name="manageLevel" id="manageLevel_very_easy" value="408001"  onClick={(e)=>setManageLevel(e.target.value)}></input>
                                <span> 매우 쉬움 </span>
                            </label>
                            <label from="manageLevel_easy">
                                <input type="radio" name="manageLevel" id="manageLevel_easy" value="408004" onClick={(e)=>setManageLevel(e.target.value)}></input>
                                <span> 쉬움 </span>
                            </label>
                            <label from="manageLevel_common">
                                <input type="radio" name="manageLevel" id="manageLevel_common" value="408003" onClick={(e)=>setManageLevel(e.target.value)}></input>
                                <span> 보통 </span>  
                            </label>
                            <label from="manageLevel_difficulty">
                                <input type="radio" name="manageLevel" id="manageLevel_difficulty" value="408005" onClick={(e)=>setManageLevel(e.target.value)}></input>
                                <span> 어려움 </span>  
                            </label>
                            <label from="manageLevel_very_difficulty">
                                <input type="radio" name="manageLevel" id="manageLevel_very_difficulty" value="408002" onClick={(e)=>setManageLevel(e.target.value)}></input>
                                <span> 매우 어려움 </span>  
                            </label>
                        </td>
                    </tr>

                    <tr>
                        <th>
                            <strong>관리요구도</strong>
                        </th>
                        <td>
                            <label from="manageDemand_low">
                                <input type="radio" name="manageDemand" id="manageDemand_low" value="409001" onClick={(e)=>setManageDemand(e.target.value)}></input>
                                <span> 약간 돌봄 </span> 
                            </label>
                            <label from="manageDemand_middle">
                                <input type="radio" name="manageDemand" id="manageDemand_middle" value="409002" onClick={(e)=>setManageDemand(e.target.value)}></input>
                                <span> 잘 견딤 </span> 
                            </label>
                            <label from="manageDemand_high">
                                <input type="radio" name="manageDemand" id="manageDemand_high" value="409003" onClick={(e)=>setManageDemand(e.target.value)}></input>
                                <span> 필요함 </span>  
                            </label>
                        </td>
                    </tr>
                </table>
            </div>
            <div id="span_div"><span></span></div>
            <div id="searchList_div">
                
                    <p className="title_text">결과 🌱 </p>
                    <hr></hr>
                
                <ShowSearchList data ={searchResult} ></ShowSearchList>
            </div>

        </div>
    );
    

}

export default Main;