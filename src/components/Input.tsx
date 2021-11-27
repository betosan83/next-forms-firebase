interface InputProps {
    type?: 'text' | 'number'
    text: string
    value: any
    readonly?: boolean
    className?: string
    valueChanged?: (value: any) => void
}

export default function Input(props: InputProps) {
    return (
        <div className={`flex flex-col ${props.className}`}> 
            <label className="mb-2">
                {props.text}
            </label>
            <input 
                type={props.type ?? 'text'}
                value={props.value}
                readOnly={props.readonly}
                onChange={e => props.valueChanged?.(e.target.value)}
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