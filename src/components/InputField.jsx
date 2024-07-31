import '../Styles/InputField.css'

export function InputField ({ labelText, id, type, onChange, "data-key": dataKey, placeHolder}) {

    return (
        <section className='input-field'>
        <label htmlFor={id}
        >{labelText}
        </label>
        {type == 'textarea' ? (
          <textarea
            id={id}
            onChange={onChange}
            data-key={dataKey}
            placeholder={placeHolder}
            maxLength={340} />  
        ) : (
        <input 
            type={type}
            id={id}
            onChange={onChange}
            data-key={dataKey}
            placeholder={placeHolder} />
        )}
        
        </section>
    )
}