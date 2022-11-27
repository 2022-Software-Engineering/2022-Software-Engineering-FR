import Header from "../../component/header";
import axios from "axios";

import { useNavigate,useLocation } from 'react-router-dom';
import "./showDetails.css"
import { useEffect, useState } from "react";

export const ShowDetails=()=>{

    const [detailData, setDetailData]=useState([]);
    const [isLoaded, setIsLoaded]=useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(()=>{
        axios.get("localhose:8080",{
            plantId : location.state.plantId
        }).then(v=>{
            
            setDetailData(v.data);
            setIsLoaded(true);
        },
        e=>{
            alert("서버 장애");
        })
    },[isLoaded])



    return (
        <div>
            <Header></Header>

            <div id="details_div">
                <div>
                    <div><span>사진</span></div>
                    <div><hr></hr></div>
                    <div>
                        <img src={detailData.plantImgUrl}></img>
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
                                    <td> {detailData.plantNameKR}</td>
                                </tr>

                                <tr>
                                    <th> <strong>식물 영어명</strong></th>
                                    <td>{detailData.plantNameEN} </td>
                                </tr>

                                <tr>
                                    <th> <strong>식물 설명</strong></th>
                                    <td> {detailData.plantDescription} </td>
                                </tr>

                                <tr>
                                    <th> <strong>원산지</strong></th>
                                    <td> {detailData.countryOfOrigin}</td>
                                </tr>

                                <tr>
                                    <th><strong>꽃</strong></th>
                                    <td> {detailData.flowerExist}</td>
                                </tr>

                                <tr>
                                    <th><strong>식물명</strong></th>
                                    <td> {detailData.plantName}</td>
                                </tr>

                                <tr>
                                    <th><strong>식물 특징</strong></th>
                                    <td> {detailData.growthPattern}</td>
                                </tr>

                                <tr>
                                    <th><strong>생장 속도</strong></th>
                                    <td>{detailData.growthRate}</td>
                                </tr>

                                <tr>
                                    <th><strong>광</strong></th>
                                    <td> {detailData.lightAmount}</td>
                                </tr>

                                <tr>
                                    <th><strong>물주기</strong></th>
                                    <td> {detailData.watering}</td>
                                </tr>

                                <tr>
                                    <th><strong>병충해</strong> </th>
                                    <td> {detailData.demangeOfBugs}</td>
                                </tr>

                                <tr>
                                    <th><strong>관리 수준</strong></th>
                                    <td>{detailData.manageLevel}</td>
                                </tr>

                                <tr>
                                    <th><strong>관리 요구도</strong></th>
                                    <td> {detailData.manageDemand} </td>
                                </tr>

                                <tr>
                                    <th><strong>비료</strong></th>
                                    <td>{detailData.fertilizer}</td>
                                </tr>

                                <tr>
                                    <th><strong>배치 장소</strong></th>
                                    <td>{detailData.placeOfDeployment}</td>
                                </tr>

                                <tr>
                                    <th> <strong>재배 팁</strong></th>
                                    <td> {detailData.plantingTip}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
            <div className="buttonName">
                <button>관심 등록<span>♡</span></button>
            </div>
        </div>
    );
}

export default ShowDetails;