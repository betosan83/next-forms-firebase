import Client from "../core/Client";
import { IconEdit, IconTrash } from "./Icons";

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
                <th className="p-4">Actions</th>
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
                    {renderActions(client)}
                </tr>
            )
        })
    }

    function renderActions(client: Client) {
        return (
            <td className="flex">
                <button className={`
                    flex justify-center items-center
                    text-green-600 rounded-full p-2 m-1
                    hover:bg-purple-50
                `}>
                    {IconEdit}
                </button>
                <button className={`
                    flex justify-center items-center
                    text-red-500 rounded-full p-2 m-1
                    hover:bg-purple-50
                `}>
                    {IconTrash}
                </button>
            </td>
        )
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