import "./searchResult.css"
import {useNavigate} from 'react-router-dom';


export const SearchResult = (props) => {
    const navigate = useNavigate();

    const moveTodetailPage=()=>{
        navigate("/details",{
            state: {
                plantID : props.plantID
            }
        });
    }

    return (
        <div>
            <li>
                <table id="result_table">
                    <tr onClick={moveTodetailPage}>
                        <th><img src={props.plantImgUrl}></img></th>
                        <td>{props.plantNameKR} / <i>{props.plantNameEN}</i></td>
                    </tr>
                </table>
            </li>
        </div>
    );
}

export default SearchResult;
