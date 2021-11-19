import Client from "../core/Client";

interface TableProps {
    clients: Client[]
}

export default function Table(props: TableProps) {

    function renderHead() {
        return (
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
            </tr>
        )
    }

    function renderData() {
        return props.clients?.map((client, i) => {
            return (
                <tr key={client.id}>
                    <td>{client.id}</td>
                    <td>{client.name}</td>
                    <td>{client.age}</td>
                </tr>
            )
        })
    }

    return (
        <table>
            <thead>
                {renderHead()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
 
    )
}