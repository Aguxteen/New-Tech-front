import { useField } from "formik"
import {Input} from "@material-ui/core"

const TextInput = ({label, ...props})=>{
    const [field, meta] = useField(props)
    
    return(
        <div>
            <label>{label}</label>
            <Input placeholder={field.name} {...field}/>
            {meta.touched && meta.error ? <div>{meta.error}</div>:null}
        </div>
    )
}

export default TextInput