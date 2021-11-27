import { useState } from "react";
import Client from "../core/Client";
import Input from "./Input";

interface FormProps {
    client: Client
}

export default function Form(props: FormProps) {
    const id = props.client?.id
    const [name, setName] = useState(props.client?.name ?? '')
    const [age, setAge] = useState(props.client?.age ?? 0)
    return (
        <div>
            {id ? (
                <Input text="Id" readonly value={id} className="mb-5"/>
            ) : false}
            <Input text="Name" value={name} valueChanged={setName} className="mb-5"/>
            <Input text="Age" type="number" value={age} valueChanged={setAge}/>
        </div>
    )

}