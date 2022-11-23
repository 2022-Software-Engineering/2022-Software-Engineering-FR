import "./searchResult.css"


export const SearchResult = (props) => {
    return (
        <div>
            <li>
                <table id="result_table">
                    <tr>
                        <th><img src={props.plantImgUrl}></img></th>
                        <td>{props.plantNameKR} / <i>{props.plantNameEN}</i></td>
                    </tr>
                </table>
            </li>
        </div>
    );
}

export default SearchResult;
