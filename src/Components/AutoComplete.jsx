import { useEffect, useState, useRef } from "react";
import { useField } from "formik"
import "./Auto.css"
import {Input} from "@material-ui/core"
import  axios  from "axios"
const Auto = ({label, ...props})=>{
    const [field, meta] = useField(props)
    const {name , onChange, onBlur} = field
    
    const [display, setDisplay] = useState(false)
    const [options, setOptions] = useState([])
    const [search, setSearch] =useState("")
    const ref = useRef(null)
    const handleClick = (e)=>{
        const {current:wrap} = ref

        if(wrap && !wrap.contains(e.target)){
            setDisplay(false)
        }
    }
    useEffect(()=>{
        var countries = []
        
        axios.get("https://restcountries.com/v3.1/all").then(response=>{
             response.data.map(e=>countries.push(e.name.common))
        })
        setOptions(countries)

    },[])

    useEffect(()=>{
        document.addEventListener("mousedown", handleClick)

        return ()=>{
            document.removeEventListener("mousedown", handleClick)
        }
    },[])

    const setCountries = (value)=>{
        setSearch(value)
        setDisplay(false)
    }

    return(
        <div >
            <label>{label}</label>
            <Input 
            name={name}
            onBlur={onBlur}
            onClick={()=>setDisplay(!display)} 
            placeholder="pais"
            value={search}
            onChange={(e)=>{setSearch(e.target.value); onChange(e);}}
            autoComplete="off"
            />
            {meta.touched && meta.error ? <div>{meta.error}</div>:null}

            {display && <div ref={ref} className="autoDiv">
                {options
                .filter((e)=>e.toLowerCase().indexOf(search.toLowerCase()) > -1)
                .map(e=>{
                    return <div
                     key={e}
                    onClick={()=>{setCountries(e)}}
                     >{e}
                     </div>
                })}
                </div>}
                
        </div>
    )
}

export default Auto