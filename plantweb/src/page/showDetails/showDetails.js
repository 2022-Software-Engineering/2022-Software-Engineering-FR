import Header from "../../component/header";
import "./showDetails.css"

export const ShowDetails=()=>{
    return (
        <div>
            <Header></Header>
            <div id="details_div">
                <div>
                    <div>
                        <span>사진</span>
                    </div>
                    <div><hr></hr></div>
                    <div>
                        <img></img>
                    </div>
                </div>

                <div>
                    <div>
                        <p>재배정보</p>
                        <hr></hr>
                    </div>

                    <div>

                        <table id="details_table">
                            <tbody>
                            <tr>
                                <th><strong>식물 한글명</strong></th>
                                <td> plantNameKR</td>
                            </tr>

                            <tr>
                                <th>
                                    <strong>식물 영어명</strong>
                                </th>
                                <td>
                                    plantNameEN
                                </td>
                            </tr>

                            <tr>
                                <th>
                                    <strong>식물 설명</strong>
                                </th>
                                <td>
                                    plantDescription
                                </td>
                            </tr>

                            <tr>
                                <th>
                                    <strong>원산지</strong>
                                </th>
                                <td>
                                    countryOfOrigin
                                </td>
                            </tr>

                            <tr>
                                <th>
                                    <strong>꽃</strong>
                                </th>
                                <td>
                                    flowerExist
                                </td>
                            </tr>

                            <tr>
                                <th>
                                    <strong>식물명</strong>
                                </th>
                                <td>
                                    plantName
                                </td>
                            </tr>

                            <tr>
                                <th>
                                    <strong>식물 특징</strong>
                                </th>
                                <td>
                                    growthPattern
                                </td>
                            </tr>

                            <tr>
                                <th>
                                    <strong>생장 속도</strong>
                                </th>
                                <td>
                                    growthRate
                                </td>
                            </tr>

                            <tr>
                                <th>
                                    <strong>광</strong>
                                </th>
                                <td>
                                    lightAmount
                                </td>
                            </tr>

                            <tr>
                                <th>
                                    <strong>물주기</strong>
                                </th>
                                <td>
                                    watering
                                </td>
                            </tr>

                            <tr>
                                <th>
                                    <strong>병충해</strong>
                                </th>
                                <td>
                                    demangeOfBugs
                                </td>
                            </tr>

                            <tr>
                                <th>
                                    <strong>관리 수준</strong>
                                </th>
                                <td>
                                    manageLevel
                                </td>
                            </tr>

                            <tr>
                                <th>
                                    <strong>관리 요구도</strong>
                                </th>
                                <td>
                                    manageDemand
                                </td>
                            </tr>

                            <tr>
                                <th>
                                    <strong>비료</strong>
                                </th>
                                <td>
                                    fertilizer
                                </td>
                            </tr>

                            <tr>
                                <th>
                                    <strong>배치 장소</strong>
                                </th>
                                <td>
                                    placeOfDeployment
                                </td>
                            </tr>

                            <tr>
                                <th>
                                    <strong>재배 팁</strong>
                                </th>
                                <td>
                                    plantingTip
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ShowDetails;