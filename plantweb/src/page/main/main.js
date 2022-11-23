import Header from "../../component/header";
import "./main.css"

export const Main=()=>{
    sessionStorage.setItem("Logined","Login");
    return (
        <div>
            <Header></Header>
            <div id="search_div">
                <p>검색</p>
                <hr></hr>
                <br></br>
                <table id="search_table">
                    <tr>
                        <th>
                            <select name="searchType">
                                <option value="sCntntsSj">식물명(한국어)</option>
                                <option value="sScnm">식물명(영어)</option>
                            </select>
                        </th>
                        <td>
                            <input type="text" name="searchWord" id="searchWord"></input>
                            <input type="button" name="search_btn" id="search_btn" value="검색"></input>
                        </td>
                    </tr>

                    <tr>
                        <th>
                            <strong>생장속도</strong>
                        </th>
                        <td>
                            <input type="radio" name="growRate" id="growRate_slow" value="407001"></input>
                            <label from="growRate_slow">느림  </label>
                            <input type="radio" name="growRate" id="growRate_common" value="407002"></input>
                            <label from="growRate_common">보통  </label>
                            <input type="radio" name="growRate" id="growRate_fast" value="407003"></input>
                            <label from="growRate_fast">빠름  </label>
                        </td>
                    </tr>

                    <tr>
                        <th>
                            <strong>관리수준</strong>
                        </th>
                        <td>
                            <input type="radio" name="manageLevel" id="manageLevel_very_easy" value="408001"></input>
                            <label from="manageLevel_very_easy">매우 쉬움  </label>
                            <input type="radio" name="manageLevel" id="manageLevel_easy" value="408004"></input>
                            <label from="manageLevel_easy">쉬움  </label>
                            <input type="radio" name="manageLevel" id="manageLevel_common" value="408003"></input>
                            <label from="manageLevel_common">보통  </label>
                            <input type="radio" name="manageLevel" id="manageLevel_difficulty" value="408005"></input>
                            <label from="manageLevel_difficulty">어려움  </label>
                            <input type="radio" name="manageLevel" id="manageLevel_very_difficulty" value="408002"></input>
                            <label from="manageLevel_very_difficulty">매우 어려움  </label>
                        </td>
                    </tr>

                    <tr>
                        <th>
                            <strong>관리요구도</strong>
                        </th>
                        <td>
                            <input type="radio" name="manageDemand" id="manageDemand_low" value="409001"></input>
                            <label from="manageDemand_low">약간 돌봄  </label>
                            <input type="radio" name="manageDemand" id="manageDemand_middle" value="409002"></input>
                            <label from="manageDemand_middle">잘 견딤  </label>
                            <input type="radio" name="manageDemand" id="manageDemand_high" value="409003"></input>
                            <label from="manageDemand_high">필요함  </label>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
    

}

export default Main;