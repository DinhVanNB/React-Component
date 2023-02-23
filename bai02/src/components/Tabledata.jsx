function Tabledata({data, stt}){
    return(
        <tr >
            <td>
                {stt}
            </td>
            <td>
                {data.name}
            </td>
            <td>
                {data.Age}
            </td>
            <td>
                {data.Address}
            </td>
        </tr>
    );
}
export default Tabledata;

