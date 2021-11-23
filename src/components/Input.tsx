interface InputProps {
    type?: 'text' | 'number'
    text: string
    value: any
    readonly?: boolean
}

export default function Input(props: InputProps) {
    return (
        <div className="flex flex-col"> 
            <label className="mb-4">
                {props.text}
            </label>
            <input 
                type={props.type ?? 'text'}
                value={props.value}
                readOnly={props.readonly}
                className={`
                    border border-purple-500 rounded-lg
                    focus:outline-none bg-gray-100
                    ${props.readonly ? '' : 'focus:bg-white'} 
                    px-4 py-2
                `}
            />
        </div>
    )

}