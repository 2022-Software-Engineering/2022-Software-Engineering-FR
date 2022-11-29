import "./searchResult.css"
import {useNavigate} from 'react-router-dom';


export const SearchResult = (props) => {
    const navigate = useNavigate();

    const moveTodetailPage=()=>{
        sessionStorage.setItem("plantID",props.plantID)
        navigate("/details");
    }

    return (
        <div>
            <li>
                <table id="result_table">
                    <tr onClick={moveTodetailPage}>
                        <td><img src={props.plantImgUrl}></img></td>
                        <td>{props.plantNameKR} / <i>{props.plantNameEN}</i></td>
                    </tr>
                </table>
            </li>
        </div>
    );
}

export default SearchResult;

