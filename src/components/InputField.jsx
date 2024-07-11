

export function InputField ({ labelText, id, type, onChange, "data-key": dataKey, placeHolder}) {

    return (
        <>
        <label htmlFor={id}
        >{labelText}
        </label>
        <input type={type}
        id={id}
        onChange={onChange}
        data-key={dataKey}
        placeholder={placeHolder} />
        </>
    )
}