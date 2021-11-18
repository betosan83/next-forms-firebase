import Client from "../core/Client";

interface TableProps {
    clients: Client[]
}

export default function Table(props) {
    return (
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
            </tr>
        </table>
    )
}