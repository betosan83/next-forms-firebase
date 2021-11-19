import Client from "../core/Client";

interface TableProps {
    clients: Client[]
}

export default function Table(props: TableProps) {

    function renderHead() {
        return (
            <tr>
                <th className="text-left p-4">ID</th>
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Age</th>
            </tr>
        )
    }

    function renderData() {
        return props.clients?.map((client, i) => {
            return (
                <tr key={client.id} 
                className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className="text-left p-4">{client.id}</td>
                    <td className="text-left p-4">{client.name}</td>
                    <td className="text-left p-4">{client.age}</td>
                </tr>
            )
        })
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-purple-500 to bg-purple-800
            `}>
                {renderHead()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
 
    )
}